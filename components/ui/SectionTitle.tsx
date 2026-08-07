interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-16 text-center">

      {/* Small Label */}
      <span className="inline-block rounded-full bg-pink-100 px-5 py-2 text-sm font-semibold text-pink-600">
        ✨ Portfolio
      </span>

      {/* Title */}
      <h2 className="mt-5 text-4xl font-extrabold text-gray-900 md:text-5xl">
        {title}
      </h2>

      {/* Pink Line */}
      <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-pink-500"></div>

      {/* Subtitle */}
      {subtitle && (
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          {subtitle}
        </p>
      )}

    </div>
  );
}