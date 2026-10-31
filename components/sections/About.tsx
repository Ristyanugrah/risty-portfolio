
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

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* LEFT - PROFILE IMAGE */}
          <div className="flex justify-center">
            <div className="relative h-[520px] w-full max-w-[380px] overflow-hidden rounded-3xl border-2 border-pink-300 bg-white shadow-xl">
              <Image
                src={profile.aboutImage}
                alt={profile.name}
                fill
                className="object-contain p-4"
                priority
              />
            </div>
          </div>

          {/* RIGHT - ABOUT DESCRIPTION */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              {profile.name}
            </h2>

            <p className="mt-3 text-lg font-semibold text-pink-500">
              Data Analyst | Business Intelligence Enthusiast
            </p>

            <p className="mt-6 leading-8 text-gray-600">
              I am an Informatics Engineering graduate from Universitas
              Widyatama with a strong interest in Data Analytics and
              Business Intelligence. I enjoy exploring data, identifying
              patterns, and transforming complex information into
              meaningful insights that support better business decisions.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              Through academic, internship, bootcamp, and portfolio
              projects, I have developed hands-on experience in data
              cleaning, data transformation, exploratory data analysis
              (EDA), SQL querying, and dashboard development.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              I work with Python, SQL, Microsoft Excel, Power BI, and
              Tableau to analyze data and communicate findings through
              clear visualizations. I am continuously developing my
              analytical and technical skills to grow as a Data Analyst
              and Business Intelligence professional.
            </p>

            {/* PROFILE INFORMATION */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
                <FaMapMarkerAlt className="shrink-0 text-xl text-pink-500" />
                <div className="min-w-0">
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="break-words font-medium">
                    {profile.location}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
                <FaGraduationCap className="shrink-0 text-xl text-pink-500" />
                <div className="min-w-0">
                  <p className="text-sm text-gray-500">Education</p>
                  <p className="font-medium">{profile.degree}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
                <FaBriefcase className="shrink-0 text-xl text-pink-500" />
                <div className="min-w-0">
                  <p className="text-sm text-gray-500">Experience</p>
                  <p className="font-medium">
                    Internship & Project Experience
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
                <FaEnvelope className="shrink-0 text-xl text-pink-500" />
                <div className="min-w-0">
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="break-all font-medium">
                    {profile.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
                <FaCalendarAlt className="shrink-0 text-xl text-pink-500" />
                <div className="min-w-0">
                  <p className="text-sm text-gray-500">Graduation</p>
                  <p className="font-medium">{profile.graduation}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
                <FaBriefcase className="shrink-0 text-xl text-pink-500" />
                <div className="min-w-0">
                  <p className="text-sm text-gray-500">Specialization</p>
                  <p className="font-medium">
                    Data Analytics & BI
                  </p>
                </div>
              </div>

            </div>

            {/* TECHNICAL SKILLS */}
            <div className="mt-8">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-700">
                Technical Skills
              </h3>

              <div className="flex flex-wrap gap-3">
                {[
                  "Python",
                  "SQL",
                  "Microsoft Excel",
                  "Power BI",
                  "Tableau",
                  "PostgreSQL",
                  "ETL",
                  "Data Visualization",
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
        </div>
      </Container>
    </section>
  );
}
