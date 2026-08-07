import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import skills from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-white py-24 text-gray-900"
    >
      <Container>

        <SectionTitle
          title="Technologies & Tools"
          subtitle="Technologies and tools that I use."
        />

        <div className="space-y-16">

          {skills.map((category) => (

            <div key={category.category}>

              <h3 className="mb-8 text-3xl font-bold text-pink-500">
                {category.category}
              </h3>

              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

                {category.items.map((item) => (

                  <div
                    key={item.name}
                    className="
                      group
                      rounded-3xl
                      border
                      border-pink-100
                      bg-white
                      p-6
                      text-center
                      shadow-md
                      transition-all
                      duration-300
                      hover:-translate-y-3
                      hover:border-pink-400
                      hover:shadow-xl
                    "
                  >

                    <div className="flex justify-center">

                      <Image
                        src={item.image}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="h-16 w-16 object-contain transition duration-300 group-hover:scale-110"
                      />

                    </div>

                    <h4 className="mt-5 font-semibold text-gray-800">
                      {item.name}
                    </h4>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}