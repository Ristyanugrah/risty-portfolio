interface BadgeProps {
  text: string;
}

export default function Badge({ text }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-pink-300 bg-pink-50 px-4 py-2 text-sm font-semibold text-pink-600 shadow-sm transition-all duration-300 hover:bg-pink-100 hover:shadow-md">
      {text}
    </span>
  );
}