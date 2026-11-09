"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"

import RevealText from "@/components/animations/RevealText"

import { ArrowRight, Download, ChevronDown } from "lucide-react"

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa"

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si"

const technologies = [
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "React", icon: FaReact, color: "text-cyan-500" },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-gray-900 dark:text-white",
  },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-500" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
  { name: "GitHub", icon: FaGithub, color: "text-gray-900 dark:text-white" },
]

const socials = [
  { name: "GitHub", href: "https://github.com/muhshin6", icon: FaGithub },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/muhshin-reza-b2a083427/",
    icon: FaLinkedin,
  },
  { name: "Facebook", href: "https://www.facebook.com/", icon: FaFacebook },
]

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gray-50 px-5 pt-32 pb-24 transition-colors duration-300 sm:px-8 lg:px-16 dark:bg-[#090D1B]"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-20 left-10 h-80 w-80 rounded-full bg-indigo-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-10 h-80 w-80 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 md:grid-cols-2 lg:gap-20">
        {/* LEFT SIDE: Introduction */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="order-1 text-center md:text-start"
        >
          <p className="mb-3 text-lg font-medium text-gray-500 dark:text-gray-400">
            <RevealText stagger={0.08}>Hello, I&apos;m</RevealText>
          </p>

          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl dark:text-white">
            <RevealText delay={0.15}>
              Muhshin
              <span className="mt-2 block bg-linear-to-r from-indigo-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">
                Reza.
              </span>
            </RevealText>
          </h1>

          {/* Professional Title */}
          <h2 className="mt-7 text-xl font-bold text-gray-800 sm:text-2xl dark:text-gray-200">
            <RevealText delay={0.4} stagger={0.04}>
              <span className="mr-2 text-indigo-500 dark:text-indigo-400">
                |
              </span>
              Frontend Web Developer
              <span className="ml-2 text-indigo-500 dark:text-indigo-400">
                |
              </span>
            </RevealText>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-gray-600 sm:text-base lg:mx-0 dark:text-gray-400">
            <RevealText delay={0.55} stagger={0.015} duration={0.5}>
              I build modern, responsive and user-friendly web applications with
              clean code and thoughtful design. Passionate about creating
              meaningful digital experiences using modern web technologies.
            </RevealText>
          </p>

          {/* Action Buttons */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Link
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-indigo-500 to-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-indigo-500/40"
            >
              View My Projects
              <ArrowRight
                size={18}
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-gray-800 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:text-indigo-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-200 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
            >
              <Download size={18} aria-hidden />
              Download CV
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-10 flex items-center justify-center gap-5 lg:justify-start">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Contact me:
            </span>

            {socials.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400"
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE: Profile + Technologies */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 flex flex-col items-center"
        >
          {/* Profile Image */}
          <div className="relative flex items-center justify-center">
            {/* Slow orbiting ring */}
            <div
              aria-hidden
              className="animate-orbit absolute -inset-6 rounded-full border border-dashed border-indigo-500/40"
            />

            <div className="relative h-64 w-64 overflow-hidden rounded-full border-[3px] border-indigo-500 bg-indigo-500/10 shadow-[0_0_50px_rgba(99,102,241,0.25)] sm:h-80 sm:w-80 lg:h-96 lg:w-96">
              <Image
                src="/image/profile.png"
                alt="Muhshin Reza - Frontend Web Developer"
                fill
                priority
                sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Technology chips */}
          <ul className="mt-12 flex max-w-md flex-wrap justify-center gap-2.5">
            {technologies.map(({ name, icon: Icon, color }) => (
              <li key={name}>
                <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3.5 py-2 text-xs font-medium text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-400 hover:text-indigo-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:border-indigo-400/60 dark:hover:text-indigo-300">
                  <Icon aria-hidden className={`size-4 ${color}`} />
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs font-medium text-gray-400 transition-colors hover:text-indigo-500 lg:flex dark:text-gray-500"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} aria-hidden />
        </motion.span>
      </a>
    </section>
  )
}

export default Hero
