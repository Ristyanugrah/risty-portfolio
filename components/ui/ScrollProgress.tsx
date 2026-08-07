"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const scroll = () => {
      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const current = window.scrollY;

      setWidth((current / total) * 100);
    };

    window.addEventListener("scroll", scroll);

    return () =>
      window.removeEventListener("scroll", scroll);
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-[60] h-1 bg-pink-500 transition-all"
      style={{
        width: `${width}%`,
      }}
    />
  );
}