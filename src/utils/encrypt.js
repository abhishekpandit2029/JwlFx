// frontend/cryptoShared.js

// IMPORTANT: Must be SAME as backend SECRET_STRING
const SECRET_STRING = "vixii_super_secret_key_32bytes!";

function b64ToBytes(b64) {
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
}

function bytesToB64(bytes) {
  let bin = "";
  bytes.forEach((b) => (bin += String.fromCharCode(b)));
  return btoa(bin);
}

// SHA-256(secret) -> 32-byte key (same as backend)
async function deriveKey() {
  const enc = new TextEncoder().encode(SECRET_STRING);
  const hash = await crypto.subtle.digest("SHA-256", enc);
  return crypto.subtle.importKey("raw", hash, { name: "AES-CBC" }, false, [
    "encrypt",
    "decrypt",
  ]);
}

export async function encryptForServer(data) {
  const key = await deriveKey();
  const iv = crypto.getRandomValues(new Uint8Array(16)); // 16 bytes

  const plaintextBytes = new TextEncoder().encode(JSON.stringify(data));

  const cipherBuf = await crypto.subtle.encrypt(
    { name: "AES-CBC", iv },
    key,
    plaintextBytes
  );
  const cipherBytes = new Uint8Array(cipherBuf);

  return `${bytesToB64(iv)}:${bytesToB64(cipherBytes)}`;
}

export async function decryptFromServer(payload) {
  const [ivB64, cipherB64] = String(payload).split(":");
  if (!ivB64 || !cipherB64) throw new Error("Invalid payload format");

  const key = await deriveKey();
  const iv = b64ToBytes(ivB64);
  if (iv.length !== 16) throw new Error("Invalid IV length");

  const cipherBytes = b64ToBytes(cipherB64);

  const plainBuf = await crypto.subtle.decrypt(
    { name: "AES-CBC", iv },
    key,
    cipherBytes
  );
  const text = new TextDecoder().decode(plainBuf);

  return JSON.parse(text);
}
