(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/auth/signup/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { PiEyeglassesBold } from "react-icons/pi";
// import { PiEyeglassesFill } from "react-icons/pi";
// export default function JewelFxRegistration() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//     firstName: "",
//     lastName: "",
//     phone: "",
//     role: "",
//     businessInfo: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [error, setError] = useState("");
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setError("");
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }
//     const payload = {
//       email: formData.email,
//       password: formData.password,
//       firstName: formData.firstName,
//       lastName: formData.lastName,
//       phone: formData.phone || undefined,
//       role: formData.role || undefined,
//       businessInfo: formData.businessInfo || undefined,
//     };
//     console.log("Form submitted:", payload);
//     // Add your registration logic here
//   };
//   const inputClass =
//     "w-full bg-white border border-black/40 rounded-md px-3 py-3 text-black text-[15px] " +
//     "outline-none transition-all duration-200 focus:border-black focus:ring-2 focus:ring-black/10 " +
//     "placeholder:text-black/30";
//   const labelClass = "text-xs uppercase tracking-[1.5px] text-black/70";
//   return (
//     <div className="min-h-screen bg-white text-black relative overflow-hidden">
//       {/* Background Decorations */}
//       <div className="fixed w-full h-full top-0 left-0 z-0 opacity-[0.08] pointer-events-none">
//         <div className="absolute w-130 h-130 border border-black/15 rounded-full -top-45 -right-45 animate-[float_20s_ease-in-out_infinite]" />
//         <div className="absolute w-95 h-95 border border-black/10 rounded-full -bottom-30 -left-30 animate-[float_25s_ease-in-out_infinite_reverse]" />
//         <div className="absolute w-65 h-65 border border-black/10 rotate-45 top-1/2 left-[8%] animate-[rotate_30s_linear_infinite]" />
//       </div>
//       <div className="relative z-1 flex min-h-screen">
//         {/* LEFT (Brand) - hidden on mobile */}
//         <div className="hidden md:flex flex-1 p-15 flex-col bg-linear-to-br from-white to-[#f5f5f5]">
//           <div className="max-w-150 animate-[fadeInUp_0.8s_ease-out]">
//             <div className="mb-10">
//               <div className="font-['Cormorant_Garamond',serif] text-[56px] font-light tracking-[4px] mb-2 text-black relative inline-block">
//                 JewelFx
//               </div>
//               <div className="text-sm tracking-[3px] uppercase text-black/60 font-light">
//                 Design • Digitize • Deliver
//               </div>
//             </div>
//             <div className="grid grid-cols-2 gap-6">
//               {[
//                 { title: "Track Jobs", desc: "Status updates and history" },
//                 { title: "Upload Files", desc: "Versions and deliverables" },
//                 {
//                   title: "Role Access",
//                   desc: "Customer / Admin / QC / Designer",
//                 },
//                 { title: "Secure", desc: "Clean authentication flow" },
//                 {
//                   title: "QC Review",
//                   desc: "Approve work before client delivery",
//                 },
//                 {
//                   title: "Invoices & Payments",
//                   desc: "Billing, payment links, and history",
//                 },
//               ].map((feature, idx) => (
//                 <div
//                   key={idx}
//                   className="p-5 border rounded-md border-black/10 bg-black/2 transition-all duration-300 hover:border-black/25 hover:bg-black/4 hover:-translate-y-1"
//                 >
//                   <div className="text-sm font-medium mb-2 uppercase tracking-wider">
//                     {feature.title}
//                   </div>
//                   <div className="text-[13px] text-black/60 leading-relaxed">
//                     {feature.desc}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         {/* RIGHT (Register) */}
//         <div className="flex-1 w-full p-6 sm:p-10 md:p-15 flex items-center justify-center bg-white">
//           <div className="w-full max-w-130 animate-[fadeInUp_1s_ease-out_0.2s_both]">
//             <div className="mb-10 text-center">
//               <h1 className="font-['Cormorant_Garamond',serif] text-[36px] sm:text-[42px] font-normal mb-3 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-15 after:h-px after:bg-black/50">
//                 Sign Up
//               </h1>
//               <p className="text-black/60 text-sm mt-4 font-light">
//                 Enter your details to create an account
//               </p>
//             </div>
//             <form onSubmit={handleSubmit} className="flex flex-col gap-6">
//               {/* First/Last Name */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 <div className="flex flex-col gap-2">
//                   <label className={labelClass}>First Name</label>
//                   <input
//                     type="text"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     placeholder="John"
//                     required
//                     className={inputClass}
//                   />
//                 </div>
//                 <div className="flex flex-col gap-2">
//                   <label className={labelClass}>Last Name</label>
//                   <input
//                     type="text"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     placeholder="Doe"
//                     required
//                     className={inputClass}
//                   />
//                 </div>
//               </div>
//               {/* Email */}
//               <div className="flex flex-col gap-2">
//                 <label className={labelClass}>Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="you@company.com"
//                   required
//                   className={inputClass}
//                 />
//               </div>
//               {/* Phone (optional) */}
//               <div className="flex flex-col gap-2">
//                 <label className={labelClass}>Phone (optional)</label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="+1 (555) 000-0000"
//                   className={inputClass}
//                 />
//               </div>
//               {/* Role (optional) */}
//               <div className="flex flex-col gap-2">
//                 <label className={labelClass}>Role (optional)</label>
//                 <select
//                   name="role"
//                   value={formData.role}
//                   onChange={handleChange}
//                   className={
//                     inputClass +
//                     " cursor-pointer appearance-none pr-10 bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2712%27%20height=%2712%27%20viewBox=%270%200%2012%2012%27%3E%3Cpath%20fill=%27%23000000%27%20d=%27M6%209L1%204h10z%27/%3E%3C/svg%3E')] bg-no-repeat bg-position-[right_0.75rem_center]"
//                   }
//                 >
//                   <option value="">Select role</option>
//                   <option value="customer">Customer</option>
//                   <option value="admin">Admin (Ops)</option>
//                   <option value="manager">Manager / QC</option>
//                   <option value="designer">Designer</option>
//                 </select>
//               </div>
//               {/* Business Info (optional) */}
//               <div className="flex flex-col gap-2">
//                 <label className={labelClass}>Business Info (optional)</label>
//                 <textarea
//                   name="businessInfo"
//                   value={formData.businessInfo}
//                   onChange={handleChange}
//                   placeholder="Business name, type, location, anything you'd like to share..."
//                   rows={3}
//                   className={inputClass + " resize-none"}
//                 />
//               </div>
//               {/* Passwords */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 <div className="flex flex-col gap-2">
//                   <label className={labelClass}>Password</label>
//                   <div className="relative">
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       name="password"
//                       value={formData.password}
//                       onChange={handleChange}
//                       placeholder="Min. 8 characters"
//                       required
//                       minLength={8}
//                       className={inputClass + " pr-12"}
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword((s) => !s)}
//                       className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent border-none text-black/60 cursor-pointer p-2 hover:text-black"
//                       aria-label="Toggle password visibility"
//                     >
//                       {showPassword ? (
//                         <PiEyeglassesBold />
//                       ) : (
//                         <PiEyeglassesFill />
//                       )}
//                     </button>
//                   </div>
//                 </div>
//                 <div className="flex flex-col gap-2">
//                   <label className={labelClass}>Confirm Password</label>
//                   <div className="relative">
//                     <input
//                       type={showConfirmPassword ? "text" : "password"}
//                       name="confirmPassword"
//                       value={formData.confirmPassword}
//                       onChange={handleChange}
//                       placeholder="Re-enter password"
//                       required
//                       minLength={8}
//                       className={inputClass + " pr-12"}
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowConfirmPassword((s) => !s)}
//                       className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent border-none text-black/60 cursor-pointer p-2 hover:text-black"
//                       aria-label="Toggle confirm password visibility"
//                     >
//                       {showConfirmPassword ? (
//                         <PiEyeglassesBold />
//                       ) : (
//                         <PiEyeglassesFill />
//                       )}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               {/* Error */}
//               {error && (
//                 <div className="text-sm text-black bg-black/5 border border-black/15 px-4 py-3 rounded-md">
//                   {error}
//                 </div>
//               )}
//               {/* Submit */}
//               <button
//                 type="submit"
//                 className="mt-1 px-8 py-4 bg-black text-white border border-black text-[13px] font-medium uppercase tracking-[2px] cursor-pointer transition-all duration-300 hover:bg-white hover:text-black hover:border-black hover:-translate-y-0.5 active:translate-y-0 rounded-md"
//               >
//                 Create Account
//               </button>
//               <div className="w-full h-px bg-black/10 my-6" />
//               <div className="text-center text-sm text-black/60">
//                 Already have an account?{" "}
//                 <Link
//                   href="/auth/signin"
//                   className="text-black underline underline-offset-4 hover:opacity-80"
//                 >
//                   Sign In
//                 </Link>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <style jsx>{`
//         @keyframes float {
//           0%,
//           100% {
//             transform: translate(0, 0) scale(1);
//           }
//           50% {
//             transform: translate(26px, -26px) scale(1.04);
//           }
//         }
//         @keyframes rotate {
//           from {
//             transform: rotate(45deg);
//           }
//           to {
//             transform: rotate(405deg);
//           }
//         }
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(26px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }
// JewelFxRegistration.tsx
__turbopack_context__.s([
    "default",
    ()=>JewelFxRegistration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$40$19$2e$2$2e$1$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/styled-jsx@5.1.6_@babel+core@7.28.5_react@19.2.1/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$5$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.5.0_react@19.2.1/node_modules/react-icons/pi/index.mjs [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/SelectCallingCode'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function JewelFxRegistration() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(84);
    if ($[0] !== "60137a9622b5ce47c3978c3f534278a27978cc7916e7685dbd157347d312c3a8") {
        for(let $i = 0; $i < 84; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "60137a9622b5ce47c3978c3f534278a27978cc7916e7685dbd157347d312c3a8";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            email: "",
            password: "",
            confirmPassword: "",
            firstName: "",
            lastName: "",
            callingCode: "",
            phone: "",
            role: "",
            businessInfo: ""
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showConfirmPassword, setShowConfirmPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "JewelFxRegistration[handleChange]": (e)=>{
                const { name, value } = e.target;
                setFormData({
                    "JewelFxRegistration[handleChange > setFormData()]": (prev)=>({
                            ...prev,
                            [name]: value
                        })
                }["JewelFxRegistration[handleChange > setFormData()]"]);
                setError("");
            }
        })["JewelFxRegistration[handleChange]"];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const handleChange = t1;
    let t2;
    if ($[3] !== formData.businessInfo || $[4] !== formData.callingCode || $[5] !== formData.confirmPassword || $[6] !== formData.email || $[7] !== formData.firstName || $[8] !== formData.lastName || $[9] !== formData.password || $[10] !== formData.phone || $[11] !== formData.role) {
        t2 = ({
            "JewelFxRegistration[handleSubmit]": (e_0)=>{
                e_0.preventDefault();
                if (formData.password !== formData.confirmPassword) {
                    setError("Passwords do not match.");
                    return;
                }
                const payload = {
                    email: formData.email,
                    password: formData.password,
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    phone: formData.phone || undefined,
                    callingCode: formData.callingCode || undefined,
                    role: formData.role || undefined,
                    businessInfo: formData.businessInfo || undefined
                };
                console.log("Form submitted:", payload);
            }
        })["JewelFxRegistration[handleSubmit]"];
        $[3] = formData.businessInfo;
        $[4] = formData.callingCode;
        $[5] = formData.confirmPassword;
        $[6] = formData.email;
        $[7] = formData.firstName;
        $[8] = formData.lastName;
        $[9] = formData.password;
        $[10] = formData.phone;
        $[11] = formData.role;
        $[12] = t2;
    } else {
        t2 = $[12];
    }
    const handleSubmit = t2;
    let t3;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed w-full h-full top-0 left-0 z-0 opacity-[0.08] pointer-events-none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute w-130 h-130 border border-black/15 rounded-full -top-45 -right-45 animate-[float_20s_ease-in-out_infinite]"
                }, void 0, false, {
                    fileName: "[project]/src/app/auth/signup/page.tsx",
                    lineNumber: 440,
                    columnNumber: 99
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute w-95 h-95 border border-black/10 rounded-full -bottom-30 -left-30 animate-[float_25s_ease-in-out_infinite_reverse]"
                }, void 0, false, {
                    fileName: "[project]/src/app/auth/signup/page.tsx",
                    lineNumber: 440,
                    columnNumber: 234
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute w-65 h-65 border border-black/10 rotate-45 top-1/2 left-[8%] animate-[rotate_30s_linear_infinite]"
                }, void 0, false, {
                    fileName: "[project]/src/app/auth/signup/page.tsx",
                    lineNumber: 440,
                    columnNumber: 377
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/auth/signup/page.tsx",
            lineNumber: 440,
            columnNumber: 10
        }, this);
        $[13] = t3;
    } else {
        t3 = $[13];
    }
    let t4;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "font-['Cormorant_Garamond',serif] text-[56px] font-light tracking-[4px] mb-2 text-black relative inline-block",
                    children: "JewelFx"
                }, void 0, false, {
                    fileName: "[project]/src/app/auth/signup/page.tsx",
                    lineNumber: 447,
                    columnNumber: 33
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm tracking-[3px] uppercase text-black/60 font-light",
                    children: "Design • Digitize • Deliver"
                }, void 0, false, {
                    fileName: "[project]/src/app/auth/signup/page.tsx",
                    lineNumber: 447,
                    columnNumber: 173
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/auth/signup/page.tsx",
            lineNumber: 447,
            columnNumber: 10
        }, this);
        $[14] = t4;
    } else {
        t4 = $[14];
    }
    let t5;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden md:flex flex-1 p-15 flex-col bg-linear-to-br from-white to-[#f5f5f5]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-150 animate-[fadeInUp_0.8s_ease-out]",
                children: [
                    t4,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-6",
                        children: [
                            {
                                title: "Track Jobs",
                                desc: "Status updates and history"
                            },
                            {
                                title: "Upload Files",
                                desc: "Versions and deliverables"
                            },
                            {
                                title: "Role Access",
                                desc: "Customer / Admin / QC / Designer"
                            },
                            {
                                title: "Secure",
                                desc: "Clean authentication flow"
                            },
                            {
                                title: "QC Review",
                                desc: "Approve work before client delivery"
                            },
                            {
                                title: "Invoices & Payments",
                                desc: "Billing, payment links, and history"
                            }
                        ].map(_JewelFxRegistrationAnonymous)
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/signup/page.tsx",
                        lineNumber: 454,
                        columnNumber: 167
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/auth/signup/page.tsx",
                lineNumber: 454,
                columnNumber: 103
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/auth/signup/page.tsx",
            lineNumber: 454,
            columnNumber: 10
        }, this);
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    let t6;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-10 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "font-['Cormorant_Garamond',serif] text-[36px] sm:text-[42px] font-normal mb-3 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-15 after:h-px after:bg-black/50",
                    children: "Sign Up"
                }, void 0, false, {
                    fileName: "[project]/src/app/auth/signup/page.tsx",
                    lineNumber: 479,
                    columnNumber: 45
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-black/60 text-sm mt-4 font-light",
                    children: "Enter your details to create an account"
                }, void 0, false, {
                    fileName: "[project]/src/app/auth/signup/page.tsx",
                    lineNumber: 479,
                    columnNumber: 301
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/auth/signup/page.tsx",
            lineNumber: 479,
            columnNumber: 10
        }, this);
        $[16] = t6;
    } else {
        t6 = $[16];
    }
    let t7;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-xs uppercase tracking-[1.5px] text-black/70",
            children: "First Name"
        }, void 0, false, {
            fileName: "[project]/src/app/auth/signup/page.tsx",
            lineNumber: 486,
            columnNumber: 10
        }, this);
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    let t8;
    if ($[18] !== formData.firstName) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-2",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    name: "firstName",
                    value: formData.firstName,
                    onChange: handleChange,
                    placeholder: "John",
                    required: true,
                    className: "w-full bg-white border border-black/40 rounded-md px-3 py-3 text-black text-[15px] outline-none transition-all duration-200 focus:border-black focus:ring-2 focus:ring-black/10 placeholder:text-black/30"
                }, void 0, false, {
                    fileName: "[project]/src/app/auth/signup/page.tsx",
                    lineNumber: 493,
                    columnNumber: 51
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/auth/signup/page.tsx",
            lineNumber: 493,
            columnNumber: 10
        }, this);
        $[18] = formData.firstName;
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    let t9;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-xs uppercase tracking-[1.5px] text-black/70",
            children: "Last Name"
        }, void 0, false, {
            fileName: "[project]/src/app/auth/signup/page.tsx",
            lineNumber: 501,
            columnNumber: 10
        }, this);
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    let t10;
    if ($[21] !== formData.lastName) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-2",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    name: "lastName",
                    value: formData.lastName,
                    onChange: handleChange,
                    placeholder: "Doe",
                    required: true,
                    className: "w-full bg-white border border-black/40 rounded-md px-3 py-3 text-black text-[15px] outline-none transition-all duration-200 focus:border-black focus:ring-2 focus:ring-black/10 placeholder:text-black/30"
                }, void 0, false, {
                    fileName: "[project]/src/app/auth/signup/page.tsx",
                    lineNumber: 508,
                    columnNumber: 52
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/auth/signup/page.tsx",
            lineNumber: 508,
            columnNumber: 11
        }, this);
        $[21] = formData.lastName;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    if ($[23] !== t10 || $[24] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
            children: [
                t8,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/auth/signup/page.tsx",
            lineNumber: 516,
            columnNumber: 11
        }, this);
        $[23] = t10;
        $[24] = t8;
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    let t12;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-xs uppercase tracking-[1.5px] text-black/70",
            children: "Email"
        }, void 0, false, {
            fileName: "[project]/src/app/auth/signup/page.tsx",
            lineNumber: 525,
            columnNumber: 11
        }, this);
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    let t13;
    if ($[27] !== formData.email) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-2",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "email",
                    name: "email",
                    value: formData.email,
                    onChange: handleChange,
                    placeholder: "you@company.com",
                    required: true,
                    className: "w-full bg-white border border-black/40 rounded-md px-3 py-3 text-black text-[15px] outline-none transition-all duration-200 focus:border-black focus:ring-2 focus:ring-black/10 placeholder:text-black/30"
                }, void 0, false, {
                    fileName: "[project]/src/app/auth/signup/page.tsx",
                    lineNumber: 532,
                    columnNumber: 53
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/auth/signup/page.tsx",
            lineNumber: 532,
            columnNumber: 11
        }, this);
        $[27] = formData.email;
        $[28] = t13;
    } else {
        t13 = $[28];
    }
    let t14;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-xs uppercase tracking-[1.5px] text-black/70",
            children: "Phone (optional)"
        }, void 0, false, {
            fileName: "[project]/src/app/auth/signup/page.tsx",
            lineNumber: 540,
            columnNumber: 11
        }, this);
        $[29] = t14;
    } else {
        t14 = $[29];
    }
    let t15;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectCallingCode, {
            onChange: {
                "JewelFxRegistration[<SelectCallingCode>.onChange]": (value_0)=>setFormData({
                        "JewelFxRegistration[<SelectCallingCode>.onChange > setFormData()]": (prev_0)=>({
                                ...prev_0,
                                callingCode: value_0
                            })
                    }["JewelFxRegistration[<SelectCallingCode>.onChange > setFormData()]"])
            }["JewelFxRegistration[<SelectCallingCode>.onChange]"]
        }, void 0, false, {
            fileName: "[project]/src/app/auth/signup/page.tsx",
            lineNumber: 547,
            columnNumber: 11
        }, this);
        $[30] = t15;
    } else {
        t15 = $[30];
    }
    let t16;
    if ($[31] !== formData.phone) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-2",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        t15,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "tel",
                            name: "phone",
                            value: formData.phone,
                            onChange: handleChange,
                            placeholder: "(555) 000-0000",
                            className: "w-full bg-white border border-black/40 rounded-md px-3 py-3 text-black text-[15px] outline-none transition-all duration-200 focus:border-black focus:ring-2 focus:ring-black/10 placeholder:text-black/30"
                        }, void 0, false, {
                            fileName: "[project]/src/app/auth/signup/page.tsx",
                            lineNumber: 561,
                            columnNumber: 99
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/auth/signup/page.tsx",
                    lineNumber: 561,
                    columnNumber: 53
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/auth/signup/page.tsx",
            lineNumber: 561,
            columnNumber: 11
        }, this);
        $[31] = formData.phone;
        $[32] = t16;
    } else {
        t16 = $[32];
    }
    let t17;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-xs uppercase tracking-[1.5px] text-black/70",
            children: "Role (optional)"
        }, void 0, false, {
            fileName: "[project]/src/app/auth/signup/page.tsx",
            lineNumber: 569,
            columnNumber: 11
        }, this);
        $[33] = t17;
    } else {
        t17 = $[33];
    }
    let t18;
    let t19;
    let t20;
    let t21;
    let t22;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "",
            children: "Select role"
        }, void 0, false, {
            fileName: "[project]/src/app/auth/signup/page.tsx",
            lineNumber: 580,
            columnNumber: 11
        }, this);
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "customer",
            children: "Customer"
        }, void 0, false, {
            fileName: "[project]/src/app/auth/signup/page.tsx",
            lineNumber: 581,
            columnNumber: 11
        }, this);
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "admin",
            children: "Admin (Ops)"
        }, void 0, false, {
            fileName: "[project]/src/app/auth/signup/page.tsx",
            lineNumber: 582,
            columnNumber: 11
        }, this);
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "manager",
            children: "Manager / QC"
        }, void 0, false, {
            fileName: "[project]/src/app/auth/signup/page.tsx",
            lineNumber: 583,
            columnNumber: 11
        }, this);
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "designer",
            children: "Designer"
        }, void 0, false, {
            fileName: "[project]/src/app/auth/signup/page.tsx",
            lineNumber: 584,
            columnNumber: 11
        }, this);
        $[34] = t18;
        $[35] = t19;
        $[36] = t20;
        $[37] = t21;
        $[38] = t22;
    } else {
        t18 = $[34];
        t19 = $[35];
        t20 = $[36];
        t21 = $[37];
        t22 = $[38];
    }
    let t23;
    if ($[39] !== formData.role) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-2",
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    name: "role",
                    value: formData.role,
                    onChange: handleChange,
                    className: "w-full bg-white border border-black/40 rounded-md px-3 py-3 text-black text-[15px] outline-none transition-all duration-200 focus:border-black focus:ring-2 focus:ring-black/10 placeholder:text-black/30 cursor-pointer appearance-none pr-10 bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2712%27%20height=%2712%27%20viewBox=%270%200%2012%2012%27%3E%3Cpath%20fill=%27%23000000%27%20d=%27M6%209L1%204h10z%27/%3E%3C/svg%3E')] bg-no-repeat bg-position-[right_0.75rem_center]",
                    children: [
                        t18,
                        t19,
                        t20,
                        t21,
                        t22
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/auth/signup/page.tsx",
                    lineNumber: 599,
                    columnNumber: 53
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/auth/signup/page.tsx",
            lineNumber: 599,
            columnNumber: 11
        }, this);
        $[39] = formData.role;
        $[40] = t23;
    } else {
        t23 = $[40];
    }
    let t24;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-xs uppercase tracking-[1.5px] text-black/70",
            children: "Business Info (optional)"
        }, void 0, false, {
            fileName: "[project]/src/app/auth/signup/page.tsx",
            lineNumber: 607,
            columnNumber: 11
        }, this);
        $[41] = t24;
    } else {
        t24 = $[41];
    }
    let t25;
    if ($[42] !== formData.businessInfo) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-2",
            children: [
                t24,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    name: "businessInfo",
                    value: formData.businessInfo,
                    onChange: handleChange,
                    placeholder: "Business name, type, location, anything you'd like to share...",
                    rows: 3,
                    className: "w-full bg-white border border-black/40 rounded-md px-3 py-3 text-black text-[15px] outline-none transition-all duration-200 focus:border-black focus:ring-2 focus:ring-black/10 placeholder:text-black/30 resize-none"
                }, void 0, false, {
                    fileName: "[project]/src/app/auth/signup/page.tsx",
                    lineNumber: 614,
                    columnNumber: 53
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/auth/signup/page.tsx",
            lineNumber: 614,
            columnNumber: 11
        }, this);
        $[42] = formData.businessInfo;
        $[43] = t25;
    } else {
        t25 = $[43];
    }
    let t26;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-xs uppercase tracking-[1.5px] text-black/70",
            children: "Password"
        }, void 0, false, {
            fileName: "[project]/src/app/auth/signup/page.tsx",
            lineNumber: 622,
            columnNumber: 11
        }, this);
        $[44] = t26;
    } else {
        t26 = $[44];
    }
    const t27 = showPassword ? "text" : "password";
    let t28;
    if ($[45] !== formData.password || $[46] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: t27,
            name: "password",
            value: formData.password,
            onChange: handleChange,
            placeholder: "Min. 8 characters",
            required: true,
            minLength: 8,
            className: "w-full bg-white border border-black/40 rounded-md px-3 py-3 text-black text-[15px] outline-none transition-all duration-200 focus:border-black focus:ring-2 focus:ring-black/10 placeholder:text-black/30 pr-12"
        }, void 0, false, {
            fileName: "[project]/src/app/auth/signup/page.tsx",
            lineNumber: 630,
            columnNumber: 11
        }, this);
        $[45] = formData.password;
        $[46] = t27;
        $[47] = t28;
    } else {
        t28 = $[47];
    }
    let t29;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = ({
            "JewelFxRegistration[<button>.onClick]": ()=>setShowPassword(_JewelFxRegistrationButtonOnClickSetShowPassword)
        })["JewelFxRegistration[<button>.onClick]"];
        $[48] = t29;
    } else {
        t29 = $[48];
    }
    let t30;
    if ($[49] !== showPassword) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t29,
            className: "absolute right-2 top-1/2 -translate-y-1/2 bg-transparent border-none text-black/60 cursor-pointer p-2 hover:text-black",
            "aria-label": "Toggle password visibility",
            children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$5$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiEyeglassesBold"], {}, void 0, false, {
                fileName: "[project]/src/app/auth/signup/page.tsx",
                lineNumber: 648,
                columnNumber: 234
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$5$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiEyeglassesFill"], {}, void 0, false, {
                fileName: "[project]/src/app/auth/signup/page.tsx",
                lineNumber: 648,
                columnNumber: 257
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/auth/signup/page.tsx",
            lineNumber: 648,
            columnNumber: 11
        }, this);
        $[49] = showPassword;
        $[50] = t30;
    } else {
        t30 = $[50];
    }
    let t31;
    if ($[51] !== t28 || $[52] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-2",
            children: [
                t26,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        t28,
                        t30
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/auth/signup/page.tsx",
                    lineNumber: 656,
                    columnNumber: 53
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/auth/signup/page.tsx",
            lineNumber: 656,
            columnNumber: 11
        }, this);
        $[51] = t28;
        $[52] = t30;
        $[53] = t31;
    } else {
        t31 = $[53];
    }
    let t32;
    if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-xs uppercase tracking-[1.5px] text-black/70",
            children: "Confirm Password"
        }, void 0, false, {
            fileName: "[project]/src/app/auth/signup/page.tsx",
            lineNumber: 665,
            columnNumber: 11
        }, this);
        $[54] = t32;
    } else {
        t32 = $[54];
    }
    const t33 = showConfirmPassword ? "text" : "password";
    let t34;
    if ($[55] !== formData.confirmPassword || $[56] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: t33,
            name: "confirmPassword",
            value: formData.confirmPassword,
            onChange: handleChange,
            placeholder: "Re-enter password",
            required: true,
            minLength: 8,
            className: "w-full bg-white border border-black/40 rounded-md px-3 py-3 text-black text-[15px] outline-none transition-all duration-200 focus:border-black focus:ring-2 focus:ring-black/10 placeholder:text-black/30 pr-12"
        }, void 0, false, {
            fileName: "[project]/src/app/auth/signup/page.tsx",
            lineNumber: 673,
            columnNumber: 11
        }, this);
        $[55] = formData.confirmPassword;
        $[56] = t33;
        $[57] = t34;
    } else {
        t34 = $[57];
    }
    let t35;
    if ($[58] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = ({
            "JewelFxRegistration[<button>.onClick]": ()=>setShowConfirmPassword(_JewelFxRegistrationButtonOnClickSetShowConfirmPassword)
        })["JewelFxRegistration[<button>.onClick]"];
        $[58] = t35;
    } else {
        t35 = $[58];
    }
    let t36;
    if ($[59] !== showConfirmPassword) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t35,
            className: "absolute right-2 top-1/2 -translate-y-1/2 bg-transparent border-none text-black/60 cursor-pointer p-2 hover:text-black",
            "aria-label": "Toggle confirm password visibility",
            children: showConfirmPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$5$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiEyeglassesBold"], {}, void 0, false, {
                fileName: "[project]/src/app/auth/signup/page.tsx",
                lineNumber: 691,
                columnNumber: 249
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$5$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiEyeglassesFill"], {}, void 0, false, {
                fileName: "[project]/src/app/auth/signup/page.tsx",
                lineNumber: 691,
                columnNumber: 272
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/auth/signup/page.tsx",
            lineNumber: 691,
            columnNumber: 11
        }, this);
        $[59] = showConfirmPassword;
        $[60] = t36;
    } else {
        t36 = $[60];
    }
    let t37;
    if ($[61] !== t34 || $[62] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-2",
            children: [
                t32,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        t34,
                        t36
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/auth/signup/page.tsx",
                    lineNumber: 699,
                    columnNumber: 53
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/auth/signup/page.tsx",
            lineNumber: 699,
            columnNumber: 11
        }, this);
        $[61] = t34;
        $[62] = t36;
        $[63] = t37;
    } else {
        t37 = $[63];
    }
    let t38;
    if ($[64] !== t31 || $[65] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
            children: [
                t31,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/auth/signup/page.tsx",
            lineNumber: 708,
            columnNumber: 11
        }, this);
        $[64] = t31;
        $[65] = t37;
        $[66] = t38;
    } else {
        t38 = $[66];
    }
    let t39;
    if ($[67] !== error) {
        t39 = error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm text-black bg-black/5 border border-black/15 px-4 py-3 rounded-md",
            children: error
        }, void 0, false, {
            fileName: "[project]/src/app/auth/signup/page.tsx",
            lineNumber: 717,
            columnNumber: 20
        }, this);
        $[67] = error;
        $[68] = t39;
    } else {
        t39 = $[68];
    }
    let t40;
    let t41;
    if ($[69] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: "mt-1 px-8 py-4 bg-black text-white border border-black text-[13px] font-medium uppercase tracking-[2px] cursor-pointer transition-all duration-300 hover:bg-white hover:text-black hover:border-black hover:-translate-y-0.5 active:translate-y-0 rounded-md",
            children: "Create Account"
        }, void 0, false, {
            fileName: "[project]/src/app/auth/signup/page.tsx",
            lineNumber: 726,
            columnNumber: 11
        }, this);
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-px bg-black/10 my-6"
        }, void 0, false, {
            fileName: "[project]/src/app/auth/signup/page.tsx",
            lineNumber: 727,
            columnNumber: 11
        }, this);
        $[69] = t40;
        $[70] = t41;
    } else {
        t40 = $[69];
        t41 = $[70];
    }
    let t42;
    if ($[71] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center text-sm text-black/60",
            children: [
                "Already have an account?",
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/auth/signin",
                    className: "text-black underline underline-offset-4 hover:opacity-80",
                    children: "Sign In"
                }, void 0, false, {
                    fileName: "[project]/src/app/auth/signup/page.tsx",
                    lineNumber: 736,
                    columnNumber: 91
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/auth/signup/page.tsx",
            lineNumber: 736,
            columnNumber: 11
        }, this);
        $[71] = t42;
    } else {
        t42 = $[71];
    }
    let t43;
    if ($[72] !== handleSubmit || $[73] !== t11 || $[74] !== t13 || $[75] !== t16 || $[76] !== t23 || $[77] !== t25 || $[78] !== t38 || $[79] !== t39) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-1 flex min-h-screen",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 w-full p-6 sm:p-10 md:p-15 flex items-center justify-center bg-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-130 animate-[fadeInUp_1s_ease-out_0.2s_both]",
                        children: [
                            t6,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "flex flex-col gap-6",
                                children: [
                                    t11,
                                    t13,
                                    t16,
                                    t23,
                                    t25,
                                    t38,
                                    t39,
                                    t40,
                                    t41,
                                    t42
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/auth/signup/page.tsx",
                                lineNumber: 743,
                                columnNumber: 235
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/auth/signup/page.tsx",
                        lineNumber: 743,
                        columnNumber: 156
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/auth/signup/page.tsx",
                    lineNumber: 743,
                    columnNumber: 63
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/auth/signup/page.tsx",
            lineNumber: 743,
            columnNumber: 11
        }, this);
        $[72] = handleSubmit;
        $[73] = t11;
        $[74] = t13;
        $[75] = t16;
        $[76] = t23;
        $[77] = t25;
        $[78] = t38;
        $[79] = t39;
        $[80] = t43;
    } else {
        t43 = $[80];
    }
    let t44;
    if ($[81] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$40$19$2e$2$2e$1$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            id: "c8095f7b9a3b8680",
            children: "@keyframes float{0%,to{transform:translate(0)scale(1)}50%{transform:translate(26px,-26px)scale(1.04)}}@keyframes rotate{0%{transform:rotate(45deg)}to{transform:rotate(405deg)}}@keyframes fadeInUp{0%{opacity:0;transform:translateY(26px)}to{opacity:1;transform:translateY(0)}}"
        }, void 0, false, void 0, this);
        $[81] = t44;
    } else {
        t44 = $[81];
    }
    let t45;
    if ($[82] !== t43) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-white text-black relative overflow-hidden",
            children: [
                t3,
                t43,
                t44
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/auth/signup/page.tsx",
            lineNumber: 765,
            columnNumber: 11
        }, this);
        $[82] = t43;
        $[83] = t45;
    } else {
        t45 = $[83];
    }
    return t45;
}
_s(JewelFxRegistration, "PbGVylqJK1BU/j6846P66iereCY=");
_c = JewelFxRegistration;
function _JewelFxRegistrationButtonOnClickSetShowConfirmPassword(s_0) {
    return !s_0;
}
function _JewelFxRegistrationButtonOnClickSetShowPassword(s) {
    return !s;
}
function _JewelFxRegistrationAnonymous(feature, idx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-5 border rounded-md border-black/10 bg-black/2 transition-all duration-300 hover:border-black/25 hover:bg-black/4 hover:-translate-y-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm font-medium mb-2 uppercase tracking-wider",
                children: feature.title
            }, void 0, false, {
                fileName: "[project]/src/app/auth/signup/page.tsx",
                lineNumber: 780,
                columnNumber: 174
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[13px] text-black/60 leading-relaxed",
                children: feature.desc
            }, void 0, false, {
                fileName: "[project]/src/app/auth/signup/page.tsx",
                lineNumber: 780,
                columnNumber: 262
            }, this)
        ]
    }, idx, true, {
        fileName: "[project]/src/app/auth/signup/page.tsx",
        lineNumber: 780,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "JewelFxRegistration");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_auth_signup_page_tsx_195d14da._.js.map