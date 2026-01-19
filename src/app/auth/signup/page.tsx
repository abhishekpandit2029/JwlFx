"use client";

import { useState } from "react";
import Link from "next/link";
import { PiEyeglassesBold, PiEyeglassesFill } from "react-icons/pi";
import SelectCallingCode from "@/components/common/SelectCallingCode";
import HeroAuth from "@/components/auth/HeroAuth";
import { decryptFromServer } from "@/utils/encrypt";

export default function JewelFxRegistration() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    callingCode: "",
    phone: "",
    businessInfo: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const payload = {
      email: formData.email,
      password: formData.password,
      name: formData.name,
      phone: formData.phone || undefined,
      callingCode: formData.callingCode || undefined,
      businessInfo: formData.businessInfo || undefined,
    };

    console.log("Form submitted:", payload);
    // Add your registration logic here
  };

  const inputClass =
    "w-full bg-white dark:bg-black border border-black/40 dark:border-white/40 rounded-md px-3 py-3 " +
    "text-black dark:text-white text-[15px] " +
    "outline-none transition-all duration-200 " +
    "focus:border-black dark:focus:border-white focus:ring-2 focus:ring-black/10 dark:focus:ring-white/10 " +
    "placeholder:text-black/30 dark:placeholder:text-white/30";

  const labelClass =
    "text-xs uppercase tracking-[1.5px] text-black/70 dark:text-white/70 transition-colors";

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white relative overflow-hidden transition-colors">
      <div className="relative z-1 flex min-h-screen">
        <HeroAuth />
        <div className="flex-1 w-full p-6 sm:p-10 md:p-15 flex items-center justify-center bg-white dark:bg-black transition-colors">
          <div className="w-full max-w-130 animate-[fadeInUp_1s_ease-out_0.2s_both]">
            <div className="mb-10 text-center">
              <h1 className="font-['Cormorant_Garamond',serif] text-[36px] sm:text-[42px] font-normal mb-3 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-15 after:h-px after:bg-black/50 dark:after:bg-white/50">
                Create Your Account
              </h1>
              <p className="text-black/60 dark:text-white/60 text-sm mt-4 font-light transition-colors">
                Get started in just a few seconds
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className={labelClass}>Name</label>
                <input
                  type="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className={inputClass}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className={labelClass}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="johndoe@jewelfx.com"
                  required
                  className={inputClass}
                />
              </div>

              {/* Phone — Calling code + phone input */}
              <div className="flex flex-col gap-2">
                <label className={labelClass}>Phone</label>

                <div className="flex items-center gap-3">
                  <SelectCallingCode
                    onChange={(value) =>
                      setFormData((prev) => ({ ...prev, callingCode: value }))
                    }
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 000-0000"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Business Info */}
              <div className="flex flex-col gap-2">
                <label className={labelClass}>Business Info</label>
                <textarea
                  name="businessInfo"
                  value={formData.businessInfo}
                  onChange={handleChange}
                  placeholder="Business name, type, location, anything you'd like to share..."
                  rows={3}
                  className={inputClass + " resize-none"}
                />
              </div>

              {/* Passwords */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Min. 8 characters"
                      required
                      minLength={8}
                      className={inputClass + " pr-12"}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent border-none text-black/60 dark:text-white/60 cursor-pointer p-2 hover:text-black dark:hover:text-white transition-colors"
                      aria-label="Toggle password visibility"
                    >
                      {showPassword ? (
                        <PiEyeglassesBold />
                      ) : (
                        <PiEyeglassesFill />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className={labelClass}>Confirm Password</label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Re-enter password"
                      required
                      minLength={8}
                      className={inputClass + " pr-12"}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword((s) => !s)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent border-none text-black/60 dark:text-white/60 cursor-pointer p-2 hover:text-black dark:hover:text-white transition-colors"
                      aria-label="Toggle confirm password visibility"
                    >
                      {showConfirmPassword ? (
                        <PiEyeglassesBold />
                      ) : (
                        <PiEyeglassesFill />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Error */}
              {error && (
                <div className="text-sm text-black dark:text-white bg-black/5 dark:bg-white/5 border border-black/15 dark:border-white/15 px-4 py-3 rounded-md transition-colors">
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="mt-1 px-8 py-4 bg-black dark:bg-white text-white dark:text-black border border-black dark:border-white text-[13px] font-medium uppercase tracking-[2px] cursor-pointer transition-all duration-300 hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white hover:-translate-y-0.5 active:translate-y-0 rounded-md"
              >
                Sign Up
              </button>

              <div className="w-full h-px bg-black/10 dark:bg-white/10 my-6 transition-colors" />

              <div className="text-center text-sm text-black/60 dark:text-white/60 transition-colors">
                Already have an account?{" "}
                <Link
                  href="/auth/signin"
                  className="text-black dark:text-white underline underline-offset-4 hover:opacity-80 transition-colors"
                >
                  Sign In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(26px, -26px) scale(1.04);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(45deg);
          }
          to {
            transform: rotate(405deg);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(26px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
