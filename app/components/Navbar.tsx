"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  const currentTheme = resolvedTheme || theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="container mx-auto flex animate-pulse gap-x-2 p-4">
        <div className="h-12 w-full rounded-2xl bg-white/80" />
        <div className="h-12 w-1/2 rounded-2xl bg-white/80" />
      </div>
    );
  }

  return (
    <section className="container mx-auto p-4 md:pt-6">
      <nav className="flex items-center justify-between rounded-2xl bg-white p-3 shadow-lg dark:bg-neutral-800">
        <div className="text-lg font-bold text-white">
          <Image
            src={
              currentTheme === "light"
                ? "/assets/images/logo.svg"
                : "/assets/images/logo-dark.svg"
            }
            alt="Logo"
            width={150}
            height={150}
            className="mr-2 inline-block"
          />
        </div>
        <div className="space-x-4">
          <button
            onClick={() =>
              setTheme(currentTheme === "light" ? "dark" : "light")
            }
            className="dark:bg-neutral-70 flex cursor-pointer items-center justify-center rounded-lg bg-neutral-100 p-2 text-white transition-colors duration-300 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600"
          >
            <Image
              src={
                currentTheme === "light"
                  ? "/assets/images/icon-moon.svg"
                  : "/assets/images/icon-sun.svg"
              }
              alt="Moon Icon"
              width={20}
              height={20}
              className="inline-block"
            />
          </button>
        </div>
      </nav>
    </section>
  );
}
