"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme;
    const initial = saved || "light";

    setTheme(initial);
    applyTheme(initial);
  }, []);

  function applyTheme(next: Theme) {
    const root = document.documentElement;
    localStorage.setItem("theme", next);
    root.classList.toggle("dark", next === "dark");
  }

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    applyTheme(newTheme);
  }

  return (
    <button
      onClick={toggleTheme}
      className="group relative w-8 h-8 rounded-full transition-all duration-300 ease-in-out
                 bg-white dark:bg-black
                 border border-black dark:border-white
                  active:scale-95
                 shadow-lg hover:shadow-xl"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {/* Icon Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Sun Icon */}
        <svg
          className={`absolute w-4 h-4 text-black transition-all duration-500 ease-in-out
                     ${
                       theme === "light"
                         ? "opacity-100 rotate-0 scale-100"
                         : "opacity-0 rotate-180 scale-0"
                     }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        </svg>

        {/* Moon Icon */}
        <svg
          className={`absolute w-4 h-4 text-white transition-all duration-500 ease-in-out
                     ${
                       theme === "dark"
                         ? "opacity-100 rotate-0 scale-100"
                         : "opacity-0 -rotate-180 scale-0"
                     }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </div>

      {/* Ripple Effect on Click */}
      <div
        className="absolute inset-0 rounded-full bg-black dark:bg-white opacity-0 
                      group-active:opacity-20 transition-opacity duration-150"
      />
    </button>
  );
}
