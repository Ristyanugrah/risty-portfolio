import Image from "next/image";
import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaEnvelope,
  FaBriefcase,
  FaCalendarAlt,
} from "react-icons/fa";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import profile from "@/data/profile";

export default function About() {
  return (
    <section
      id="about"
      className="bg-pink-50 py-24 text-gray-900"
    >
      <Container>

        <SectionTitle
          title="About Me"
          subtitle="Get to know me better."
        />

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}
          <div className="flex justify-center">
            <div className="relative h-[620px] w-[420px] overflow-hidden rounded-3xl border-2 border-pink-300 bg-white shadow-xl">
              <Image
                src={profile.aboutImage}
                alt={profile.name}
                fill
                className="object-contain p-4"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div>

            <h2 className="text-4xl font-bold text-gray-900">
              {profile.name}
            </h2>

            <p className="mt-3 text-xl font-semibold text-pink-500">
              {profile.title}
            </p>

            <p className="mt-8 leading-8 text-gray-600">
              I am an Informatics Engineering graduate with a strong passion
              for Data Analytics and Business Intelligence. I enjoy exploring
              data, identifying patterns, and transforming complex information
              into meaningful insights that support better business decisions.
            </p>

            <p className="mt-6 leading-8 text-gray-600">
              Throughout my academic journey, internship, and freelance
              experiences, I have developed skills in SQL, Python,
              Microsoft Excel, Power BI, Tableau, ETL processes,
              database management, and web development. I am committed
              to continuous learning and always eager to solve business
              problems through data-driven solutions.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">

              <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm">
                <FaMapMarkerAlt className="text-pink-500 text-xl" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p>{profile.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm">
                <FaGraduationCap className="text-pink-500 text-xl" />
                <div>
                  <p className="text-sm text-gray-500">Education</p>
                  <p>{profile.degree}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm">
                <FaBriefcase className="text-pink-500 text-xl" />
                <div>
                  <p className="text-sm text-gray-500">Experience</p>
                  <p>Data Entry • Web Developer • System Analyst</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm">
                <FaEnvelope className="text-pink-500 text-xl" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p>{profile.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm">
                <FaCalendarAlt className="text-pink-500 text-xl" />
                <div>
                  <p className="text-sm text-gray-500">Graduation</p>
                  <p>{profile.graduation}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm">
                <FaBriefcase className="text-pink-500 text-xl" />
                <div>
                  <p className="text-sm text-gray-500">Specialization</p>
                  <p>Data Analytics & Business Intelligence</p>
                </div>
              </div>

            </div>

            {/* Skills */}
            <div className="mt-10 flex flex-wrap gap-3">

              {[
                "SQL",
                "Python",
                "Power BI",
                "Tableau",
                "Microsoft Excel",
                "ETL",
                "PostgreSQL",
                "MySQL",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-pink-300 bg-white px-4 py-2 text-sm font-medium text-pink-600 shadow-sm transition hover:bg-pink-100"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}