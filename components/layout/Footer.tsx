import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-pink-500 text-white">

      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Left */}
          <div>

            <h2 className="text-2xl font-bold">
              Risty<span className="text-pink-100">.</span>
            </h2>

            <p className="mt-4 leading-7 text-pink-100">
              Data Analyst & Business Intelligence enthusiast passionate about
              transforming data into actionable insights.
            </p>

          </div>

          {/* Center */}

          <div>

            <h3 className="mb-4 text-xl font-semibold">
              Quick Links
            </h3>

            <div className="space-y-2">

              <Link href="#about" className="block hover:text-pink-100">
                About
              </Link>

              <Link href="#skills" className="block hover:text-pink-100">
                Skills
              </Link>

              <Link href="#projects" className="block hover:text-pink-100">
                Projects
              </Link>

              <Link href="#experience" className="block hover:text-pink-100">
                Experience
              </Link>

              <Link href="#contact" className="block hover:text-pink-100">
                Contact
              </Link>

            </div>

          </div>

          {/* Right */}

          <div>

            <h3 className="mb-4 text-xl font-semibold">
              Connect
            </h3>

            <div className="flex gap-5 text-2xl">

              <a
                href="mailto:ristyanugrah24@gmail.com"
                className="transition hover:scale-110"
              >
                <FaEnvelope />
              </a>

              <a
                href="https://github.com/Ristyanugra"
                target="_blank"
                className="transition hover:scale-110"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/risty-septiana"
                target="_blank"
                className="transition hover:scale-110"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

        </div>

        <hr className="my-10 border-pink-300" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

          <p>
            © {new Date().getFullYear()} Risty Anugrah Dwi Septiana
          </p>

          <p className="flex items-center gap-2">

            Made with

            <FaHeart className="text-red-300" />

            using Next.js & Tailwind CSS

          </p>

        </div>

      </div>

    </footer>
  );
}