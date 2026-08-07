import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
}

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "rounded-xl px-6 py-3 font-semibold transition-all duration-300";

  const styles =
    variant === "primary"
      ? "bg-pink-500 text-white hover:bg-pink-600 hover:scale-105 shadow-lg shadow-pink-200"
      : "border-2 border-pink-500 text-pink-500 bg-white hover:bg-pink-500 hover:text-white hover:scale-105";

  return <button className={`${base} ${styles}`}>{children}</button>;
}