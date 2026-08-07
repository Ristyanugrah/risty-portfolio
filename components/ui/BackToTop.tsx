"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggle);

    return () => window.removeEventListener("scroll", toggle);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollTop}
      className="
      fixed
      bottom-8
      right-8
      z-50
      flex
      h-14
      w-14
      items-center
      justify-center
      rounded-full
      bg-pink-500
      text-white
      shadow-xl
      transition
      hover:scale-110
      hover:bg-pink-600
      "
    >
      <FaArrowUp />
    </button>
  );
}