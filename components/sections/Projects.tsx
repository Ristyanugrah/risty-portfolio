
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeUp from "@/components/ui/FadeUp";
import projects from "@/data/projects";

export default function Projects() {
  const categories = [
    "Data Analytics",
    "Web Development",
  ];

  return (
    <section
      id="projects"
      className="bg-pink-50 py-24 text-gray-900"
    >
      <Container>
        <SectionTitle
          title="Projects"
          subtitle="Explore my data analytics and web development projects."
        />

        {categories.map((category) => {
          const categoryProjects = projects.filter(
            (project) => project.category === category
          );

          return (
            <div key={category} className="mb-20">

              {/* Category Heading */}
              <div className="mb-10 border-b border-pink-200 pb-4">
                <h3 className="text-2xl font-bold text-pink-600">
                  {category === "Data Analytics"
                    ? "Data Analytics & Business Intelligence"
                    : "Web Development & Information Systems"}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  {categoryProjects.length} projects available
                </p>
              </div>

              {/* Project Grid */}
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                {categoryProjects.map((project) => (
                  <FadeUp key={project.title}>
                    <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-pink-200 bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">

                      {/* Project Image */}
                      <div className="relative h-56 w-full overflow-hidden bg-pink-100">

                        {project.image ? (
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full flex-col items-center justify-center text-pink-500">
                            <span className="text-5xl">
                              {category === "Data Analytics" ? "📊" : "💻"}
                            </span>
                            <p className="mt-3 text-sm font-semibold">
                              {category}
                            </p>
                          </div>
                        )}

                        <span className="absolute left-4 top-4 rounded-full bg-pink-500 px-4 py-1.5 text-xs font-semibold text-white shadow">
                          Featured Project
                        </span>

                      </div>

                      {/* Project Details */}
                      <div className="flex flex-1 flex-col p-6">

                        <h4 className="text-lg font-bold leading-7 text-gray-900">
                          {project.title}
                        </h4>

                        <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
                          {project.description}
                        </p>

                        {/* Tools & Technologies */}
                        <div className="mt-6">
                          <h5 className="mb-3 text-sm font-bold text-gray-800">
                            Tools & Technologies
                          </h5>

                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-lg border border-pink-200 bg-pink-50 px-3 py-2 text-xs font-medium text-pink-600 transition hover:bg-pink-100"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Presentation Buttons */}
                        <div className="mt-7 flex flex-wrap gap-3">

                          <a
                            href={project.presentation}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-1 items-center justify-center rounded-xl bg-pink-500 px-3 py-3 text-sm font-semibold text-white transition hover:bg-pink-600"
                          >
                            View Presentation ↗
                          </a>

                          <a
                            href={project.presentation}
                            download
                            className="flex flex-1 items-center justify-center rounded-xl border border-pink-500 px-3 py-3 text-sm font-semibold text-pink-600 transition hover:bg-pink-50"
                          >
                            Download ↓
                          </a>

                        </div>

                      </div>
                    </div>
                  </FadeUp>
                ))}

              </div>
            </div>
          );
        })}

      </Container>
    </section>
  );
}
