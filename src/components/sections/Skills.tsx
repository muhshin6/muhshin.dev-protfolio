"use client"

import { motion } from "motion/react"

import SectionHeading from "@/components/sections/SectionHeading"
import Tools from "@/components/sections/Tools"
import { skillGroups } from "@/data/skills"

import { Sparkles } from "lucide-react"

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding bg-gray-50 transition-colors duration-300 dark:bg-[#090D1B]"
    >
      <div className="section-container">
        <SectionHeading
          eyebrow="My Expertise"
          icon={Sparkles}
          title="Skills &"
          accent="Technologies"
          description="A breakdown of the technologies I use to build modern, responsive and user-friendly web applications."
        />

        {/* Skill Categories */}
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const GroupIcon = group.icon

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="card-surface group p-6 sm:p-7"
              >
                {/* Category Header */}
                <div className="mb-4 flex items-center gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500 transition-colors group-hover:bg-indigo-500 group-hover:text-white dark:text-indigo-400">
                    <GroupIcon size={24} aria-hidden />
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {group.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {group.skills.length} Technologies
                    </p>
                  </div>
                </div>

                <p className="mb-6 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {group.description}
                </p>

                {/* Skill chips */}
                <ul className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => {
                    const SkillIcon = skill.icon

                    return (
                      <li key={skill.name}>
                        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-300 hover:border-indigo-400 hover:text-indigo-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-200 dark:hover:border-indigo-400/60 dark:hover:text-indigo-300">
                          <SkillIcon
                            aria-hidden
                            className={`size-4 shrink-0 ${skill.color}`}
                          />
                          {skill.name}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* Tools live inside the skills section */}
        <Tools />
      </div>
    </section>
  )
}
