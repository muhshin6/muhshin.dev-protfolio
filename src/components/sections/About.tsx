"use client"

import { motion } from "motion/react"
import Link from "next/link"

import SectionHeading from "@/components/sections/SectionHeading"

import { ArrowUpRight, Target, Download, UserRound } from "lucide-react"

const interests = [
  "Frontend Development",
  "Web Design",
  "Problem Solving",
  "Learning New Technologies",
]

const journey = [
  {
    title: "Started Learning Web Development",
    description: "Building a strong foundation in HTML, CSS and JavaScript.",
  },
  {
    title: "Modern Frontend Development",
    description:
      "Exploring React, Next.js, TypeScript and modern UI development.",
  },
  {
    title: "Building Real Projects",
    description:
      "Turning ideas into practical web applications and improving through practice.",
  },
  {
    title: "Continuous Growth",
    description:
      "Learning, experimenting and becoming a better developer every day.",
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden bg-gray-50 transition-colors duration-300 dark:bg-[#090D1B]"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute top-20 -left-40 h-80 w-80 rounded-full bg-indigo-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="section-container relative z-10">
        <SectionHeading
          eyebrow="Get To Know Me"
          icon={UserRound}
          title="About"
          accent="Me"
          description="A little introduction about who I am, what I do, and what drives my passion for web development."
        />

        {/* Main About Grid */}
        <div className="grid items-stretch gap-6 lg:grid-cols-5">
          {/* Personal Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="card-surface flex h-full flex-col p-7 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1.5 sm:p-9">
              <span className="mb-4 w-fit rounded-full bg-indigo-500/10 px-3 py-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                Who I Am
              </span>

              <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
                Passionate About Building
                <span className="mt-1 block bg-linear-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
                  Digital Experiences.
                </span>
              </h3>

              <div className="mt-5 space-y-5 text-sm leading-8 text-gray-600 sm:text-base dark:text-gray-400">
                <p>
                  I&apos;m Muhshin Reza, a frontend web developer passionate
                  about building modern and user-friendly web applications.
                </p>
                <p>
                  I enjoy turning ideas into functional digital experiences
                  using technologies like React, Next.js, TypeScript and
                  Tailwind CSS.
                </p>
                <p>
                  I believe in writing clean code, creating meaningful user
                  experiences and continuously improving my development skills.
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 transition-colors duration-300 hover:border-indigo-400 hover:text-indigo-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:border-indigo-400/60 dark:hover:text-indigo-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-indigo-500 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-indigo-500/40"
                >
                  <Download size={17} aria-hidden />
                  Download Resume
                  <ArrowUpRight size={16} aria-hidden />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* My Journey */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2"
          >
            <div className="card-surface h-full p-7 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1.5 sm:p-8">
              <span className="mb-5 flex size-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500 dark:text-indigo-400">
                <Target size={25} aria-hidden />
              </span>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                My Journey
              </h3>

              <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-400">
                Every project is an opportunity to learn, experiment and grow as
                a developer.
              </p>

              <ol className="mt-7 space-y-7 border-l border-indigo-500/30 pl-6">
                {journey.map((step) => (
                  <li key={step.title} className="relative">
                    <span
                      aria-hidden
                      className="absolute top-1 -left-7.75 size-3 rounded-full border-2 border-indigo-500 bg-white dark:bg-[#111827]"
                    />

                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {step.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
