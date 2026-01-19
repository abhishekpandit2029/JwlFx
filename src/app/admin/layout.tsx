"use client";

import "../../app/globals.css";
import { useState } from "react";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import ThemeToggle from "@/components/common/ThemeToggle";
import { AiOutlineLogout } from "react-icons/ai";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    {
      name: "All Teamates",
      icon: <FiUsers className="w-5 h-5" />,
      href: "/admin",
    },
    // Add more items here as needed
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-black text-black dark:text-white transition-colors">
        <div className="min-h-screen p-4">
          <div className="flex gap-4 h-[calc(100vh-2rem)]">
            {/* Sidebar - Desktop */}
            <aside className="hidden md:flex w-64 border border-black/10 dark:border-white/10 rounded-2xl bg-white dark:bg-black transition-colors">
              <div className="flex flex-col w-full p-6">
                {/* Logo */}
                <div className="mb-8 pb-4 border-b border-black/10 dark:border-white/10">
                  <Link
                    href="/"
                    className="font-['Cormorant_Garamond',serif] text-3xl font-light tracking-[3px] text-black dark:text-white transition-colors"
                  >
                    JewelFx
                  </Link>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 space-y-2">
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg border border-transparent hover:border-black/10 dark:hover:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-all group"
                    >
                      <span className="text-black/60 dark:text-white/60 group-hover:text-black dark:group-hover:text-white transition-colors">
                        {item.icon}
                      </span>
                      <span className="text-sm font-medium text-black dark:text-white transition-colors">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </nav>

                {/* Theme Toggle at Bottom */}
                <div className="mt-auto pt-6 border-t border-black/10 dark:border-white/10 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[1.5px] text-black/60 dark:text-white/60">
                      Theme
                    </span>
                    <ThemeToggle />
                  </div>
                  <div className="flex items-center justify-between pr-1">
                    <span className="text-xs uppercase tracking-[1.5px] text-black/60 dark:text-white/60">
                      Logout
                    </span>
                    <AiOutlineLogout size={24} />
                  </div>
                </div>
              </div>
            </aside>

            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
              <div
                className="fixed inset-0 bg-black/50 dark:bg-white/10 z-40 md:hidden transition-colors"
                onClick={() => setSidebarOpen(false)}
              />
            )}

            {/* Mobile Sidebar */}
            <aside
              className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-black border-r border-black/10 dark:border-white/10 z-50 md:hidden transform transition-transform duration-300 ${
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="flex flex-col w-full p-6 h-full">
                {/* Close Button */}
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                >
                  <IoClose className="w-6 h-6 text-black dark:text-white" />
                </button>

                {/* Logo */}
                <div className="mb-8">
                  <Link
                    href="/"
                    className="font-['Cormorant_Garamond',serif] text-3xl font-light tracking-[3px] text-black dark:text-white"
                  >
                    JewelFx
                  </Link>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 space-y-2">
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setSidebarOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg border border-transparent hover:border-black/10 dark:hover:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-all group"
                    >
                      <span className="text-black/60 dark:text-white/60 group-hover:text-black dark:group-hover:text-white transition-colors">
                        {item.icon}
                      </span>
                      <span className="text-sm font-medium text-black dark:text-white">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </nav>

                {/* Theme Toggle at Bottom */}
                <div className="mt-auto pt-6 border-t border-black/10 dark:border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[1.5px] text-black/60 dark:text-white/60">
                      Theme
                    </span>
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 border border-black/10 dark:border-white/10 rounded-2xl bg-white dark:bg-black transition-colors overflow-hidden">
              {/* Mobile Header */}
              <div className="md:hidden flex items-center justify-between p-4 border-b border-black/10 dark:border-white/10">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                >
                  <HiMenuAlt3 className="w-6 h-6 text-black dark:text-white" />
                </button>

                <Link
                  href="/"
                  className="font-['Cormorant_Garamond',serif] text-2xl font-light tracking-[3px] text-black dark:text-white"
                >
                  JewelFx
                </Link>

                <ThemeToggle />
              </div>

              {/* Content with padding */}
              <div className="p-4 scrollbar-hide md:p-6 h-full overflow-auto">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
