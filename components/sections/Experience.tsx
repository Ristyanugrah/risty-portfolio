import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import experience from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-white py-24 text-gray-900"
    >
      <Container>

        <SectionTitle
          title="Experience"
          subtitle="My professional journey."
        />

        <div className="relative mx-auto max-w-4xl">

          {/* Timeline Line */}
          <div className="absolute left-6 top-0 h-full w-1 rounded-full bg-pink-200"></div>

          {experience.map((item, index) => (
            <div
              key={index}
              className="relative mb-12 flex items-start gap-8"
            >

              {/* Timeline Dot */}
              <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-pink-500 text-white shadow-lg">
                💼
              </div>

              {/* Card */}
              <div className="flex-1 rounded-3xl border border-pink-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

                <p className="text-sm font-semibold uppercase tracking-wide text-pink-500">
                  {item.period}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-gray-900">
                  {item.position}
                </h3>

                <p className="mt-1 font-semibold text-gray-700">
                  {item.company}
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  {item.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}