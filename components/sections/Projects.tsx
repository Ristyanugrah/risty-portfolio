import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeUp from "@/components/ui/FadeUp";
import projects from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-pink-50 py-24 text-gray-900"
    >
      <Container>
        <SectionTitle
          title="Projects"
          subtitle="Some projects that I have worked on."
        />

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <FadeUp key={project.title}>
              <div className="group overflow-hidden rounded-3xl border border-pink-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

                {/* Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <span className="absolute left-4 top-4 rounded-full bg-pink-500 px-4 py-1 text-xs font-semibold text-white shadow">
                    ⭐ Featured
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">

                  <h3 className="text-2xl font-bold text-gray-900">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-sm font-medium text-pink-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-8 flex flex-wrap gap-3">

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl bg-pink-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-pink-600"
                      >
                        🌐 Live Demo
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl border-2 border-pink-500 bg-white px-5 py-3 text-sm font-semibold text-pink-500 transition-all duration-300 hover:scale-105 hover:bg-pink-500 hover:text-white"
                      >
                        GitHub
                      </a>
                    )}

                  </div>

                </div>

              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}