"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import profile from "@/data/profile";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white pt-20">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-pink-300/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-pink-200/40 blur-3xl" />

      <Container className="flex min-h-screen items-center">
        <div className="grid w-full items-center gap-16 md:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge text="Available for Full-time Opportunities" />

            <p className="mt-8 text-lg font-semibold text-pink-500">
              Hello, I'm
            </p>

            <h1 className="mt-3 text-5xl font-extrabold leading-tight text-gray-900 md:text-7xl">
              Risty
              <br />
              Anugrah Dwi Septiana
            </h1>

            <h2 className="mt-6 text-3xl font-semibold text-gray-700 md:text-4xl">
              Data Analyst
              <br />
              & Business Intelligence
            </h2>

            <p className="mt-8 max-w-xl leading-8 text-gray-600">
              Informatics Engineering graduate with a strong passion for
              Data Analytics and Business Intelligence. Experienced in SQL,
              Python, Microsoft Excel, Power BI, Tableau, and ETL processes.
              Passionate about transforming raw data into meaningful insights
              through interactive dashboards that support data-driven
              business decision making.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href={profile.cv} target="_blank">
                <Button>Download CV</Button>
              </Link>

              <Link href="#projects">
                <Button variant="outline">
                  View Projects
                </Button>
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Badge text="SQL" />
              <Badge text="Python" />
              <Badge text="Power BI" />
              <Badge text="Tableau" />
              <Badge text="Excel" />
              <Badge text="ETL" />
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative h-80 w-80 overflow-hidden rounded-3xl border-2 border-pink-400 shadow-[0_20px_60px_rgba(236,72,153,0.25)] md:h-96 md:w-96">
              <Image
                src={profile.heroImage}
                alt={profile.name}
                fill
                priority
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}