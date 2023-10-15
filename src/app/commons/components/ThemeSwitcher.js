"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { CiCloudMoon, CiCloudSun } from "react-icons/ci";

const ICON_SIZE = 26;

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className="p-2 bg-current absolute right-4 top-4 text-inherit rounded-2xl"
      name="theme-switcher"
      aria-label="theme-switcher"
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      {theme === "light" ? (
        <CiCloudMoon color="#ffffff" size={ICON_SIZE} />
      ) : (
        <CiCloudSun color="#000000" size={ICON_SIZE} />
      )}
    </button>
  );
}
