import { ShieldCheck } from "lucide-react"
import type { IconType } from "react-icons"

import {
  SiDaisyui,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"

export type TechIcon = {
  icon: IconType | typeof ShieldCheck
  /** Tailwind classes so every icon stays readable in light and dark mode */
  color: string
}

/** Icon + brand colour used to render a technology chip. */
export const techIcons: Record<string, TechIcon> = {
  "Next.js": { icon: SiNextdotjs, color: "text-gray-900 dark:text-white" },
  TypeScript: { icon: SiTypescript, color: "text-[#3178C6]" },
  MongoDB: { icon: SiMongodb, color: "text-[#47A248]" },
  "Tailwind CSS": {
    icon: SiTailwindcss,
    color: "text-cyan-600 dark:text-[#06B6D4]",
  },
  React: { icon: SiReact, color: "text-sky-600 dark:text-[#61DAFB]" },
  JavaScript: {
    icon: SiJavascript,
    color: "text-yellow-600 dark:text-[#F7DF1E]",
  },
  "Better Auth": {
    icon: ShieldCheck,
    color: "text-purple-600 dark:text-[#A855F7]",
  },
  Authentication: {
    icon: ShieldCheck,
    color: "text-purple-600 dark:text-[#A855F7]",
  },
  "Node.js": { icon: SiNodedotjs, color: "text-[#5FA04E]" },
  "Express.js": { icon: SiExpress, color: "text-gray-700 dark:text-white" },
  daisyUI: { icon: SiDaisyui, color: "text-[#5A0EF8]" },
}

export type Project = {
  id: number
  title: string
  description: string
  image: string
  category: string
  technologies: string[]
  live?: string
  github?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "BookNook",
    description:
      "A modern online book management platform where users can explore books, borrow books, and manage their personal reading collection.",
    image: "/image/booknook.png",
    category: "Full Stack",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "MongoDB",
      "Express.js",
      "Better Auth",
      "Tailwind CSS",
    ],
    live: "https://book-nook-frontend-iota.vercel.app",
    github: "https://github.com/muhshin6/book-nook-client",
  },
  {
    id: 2,
    title: "BazarDor",
    description:
      "A Bengali grocery price tracking platform that helps users explore daily market prices and compare price changes over time.",
    image: "/image/bazardor.png",
    category: "Full Stack",
    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "MongoDB",
      "daisyUI",
      "Tailwind CSS",
      "Authentication",
    ],
    live: "https://a7-bazar-dor-t8wp.vercel.app",
    github: "https://github.com/muhshin6/A7-Bazar-Dor",
  },
  {
    id: 3,
    title: "FitLog",
    description:
      "A fitness tracking application that helps users explore exercises, create daily workout plans, and track their fitness activities.",
    image: "/image/fitlog.png",
    category: "Frontend",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "daisyUI"],
    live: "https://a6-fit-log-five.vercel.app",
    github: "https://github.com/muhshin6/A6-Fit-Log",
  },
]
