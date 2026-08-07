import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import certificates from "@/data/certificates";

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-pink-50 py-24 text-gray-900"
    >
      <Container>

        <SectionTitle
          title="Certificates"
          subtitle="Professional certifications and learning achievements."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {certificates.map((certificate) => (

            <div
              key={certificate.title}
              className="group overflow-hidden rounded-3xl border border-pink-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >

              {/* Image */}
              <div className="overflow-hidden">

                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  width={500}
                  height={350}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-lg font-bold text-gray-900">
                  {certificate.title}
                </h3>

                <p className="mt-2 font-semibold text-pink-500">
                  {certificate.issuer}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  {certificate.year}
                </p>

                {certificate.credential && (
                  <a
                    href={certificate.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center rounded-xl bg-pink-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-pink-600 hover:scale-105"
                  >
                    📄 View Certificate
                  </a>
                )}

              </div>

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}