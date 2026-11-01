"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = savedTheme ? savedTheme === "dark" : prefersDark;

    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative flex items-center justify-center w-10 h-10 rounded-full bg-surface-container/50 hover:bg-primary-container/20 border border-outline-variant/30 text-on-surface transition-all group"
    >
      {darkMode ? (
        <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">
          light_mode
        </span>
      ) : (
        <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">
          dark_mode
        </span>
      )}
    </button>
  );
}
