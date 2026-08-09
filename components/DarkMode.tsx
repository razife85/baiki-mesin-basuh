"use client";

import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

export default function DarkMode() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="fixed top-24 right-6 bg-white dark:bg-gray-800 shadow-xl rounded-full w-14 h-14 flex items-center justify-center z-50"
    >
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
}