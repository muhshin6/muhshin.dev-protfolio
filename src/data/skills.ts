import { FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa"
import { Code2, Database } from "lucide-react"
import type { LucideIcon } from "lucide-react"

import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"
import type { IconType } from "react-icons"

export type Skill = {
  name: string
  icon: IconType
  color: string
}

export type SkillGroup = {
  title: string
  description: string
  icon: LucideIcon
  skills: Skill[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Development",
    description: "Building modern and responsive user interfaces.",
    icon: Code2,
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
      { name: "React", icon: FaReact, color: "text-cyan-500" },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-gray-900 dark:text-white",
      },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
    ],
  },
  {
    title: "Backend & Database",
    description: "Working with server-side technologies and databases.",
    icon: Database,
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "text-gray-900 dark:text-white",
      },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    ],
  },
]
