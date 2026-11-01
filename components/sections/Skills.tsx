
"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import skills from "@/data/skills";

interface SkillsProps {
  selectedSkill: string | null;
  onSkillSelect: (skill: string) => void;
}

export default function Skills({
  selectedSkill,
  onSkillSelect,
}: SkillsProps) {
  const handleSkillClick = (skill: string) => {
    onSkillSelect(skill);

    setTimeout(() => {
      document.getElementById("projects")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <section id="skills" className="bg-white py-24 text-gray-900">
      <Container>
        <SectionTitle
          title="Technologies & Tools"
          subtitle="Click a technology to explore projects that use it."
        />

        {selectedSkill && (
          <p className="mb-8 text-center text-sm text-pink-600">
            Selected technology: <strong>{selectedSkill}</strong>
            {" — click again to clear the selection."}
          </p>
        )}

        <div className="space-y-16">
          {skills.map((category) => (
            <div key={category.category}>
              <h3 className="mb-8 text-3xl font-bold text-pink-500">
                {category.category}
              </h3>

              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {category.items.map((item) => {
                  const isSelected = selectedSkill === item.name;

                  return (
                    <button
                      type="button"
                      key={item.name}
                      onClick={() => handleSkillClick(item.name)}
                      aria-pressed={isSelected}
                      className={`
                        group rounded-3xl border p-6 text-center
                        shadow-md transition-all duration-300
                        hover:-translate-y-3 hover:shadow-xl
                        ${
                          isSelected
                            ? "border-pink-500 bg-pink-50 shadow-lg"
                            : "border-pink-100 bg-white hover:border-pink-400"
                        }
                      `}
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

                      {isSelected && (
                        <span className="mt-2 block text-xs font-semibold text-pink-600">
                          Selected
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
