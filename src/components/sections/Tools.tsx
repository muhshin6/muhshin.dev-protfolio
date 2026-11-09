"use client"

import { motion } from "motion/react"
import { Wrench } from "lucide-react"
import { FaGitAlt, FaGithub } from "react-icons/fa"
import { SiFigma } from "react-icons/si"
import { VscVscode } from "react-icons/vsc"

import SectionHeading from "@/components/sections/SectionHeading"

const tools = [
  {
    name: "Git",
    icon: FaGitAlt,
    color: "text-orange-600",
    description:
      "Tracking every change with a reliable version control workflow.",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    color: "text-gray-900 dark:text-white",
    description:
      "Hosting repositories and collaborating on projects with others.",
  },
  {
    name: "VS Code",
    icon: VscVscode,
    color: "text-blue-500",
    description:
      "My everyday editor with extensions that speed up development.",
  },
  {
    name: "Figma",
    icon: SiFigma,
    color: "text-violet-600",
    description:
      "Designing and prototyping interfaces before writing any code.",
  },
]

/**
 * Tools & Workflow — rendered inside the Skills section so the two
 * read as one block instead of two separate sections.
 */
export default function Tools() {
  return (
    <div className="mt-20">
      <SectionHeading
        eyebrow="Developer Tools"
        icon={Wrench}
        size="sm"
        title="Tools &"
        accent="Workflow"
        description="The everyday tools I rely on to build, debug and ship modern web applications."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {tools.map((tool, index) => {
          const ToolIcon = tool.icon

          return (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-surface group p-6"
            >
              <span className="mb-5 flex size-12 items-center justify-center rounded-xl bg-indigo-500/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-500/20">
                <ToolIcon size={24} aria-hidden className={tool.color} />
              </span>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {tool.name}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                {tool.description}
              </p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
