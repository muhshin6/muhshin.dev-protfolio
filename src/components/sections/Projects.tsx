"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"

import SectionHeading from "@/components/sections/SectionHeading"
import { projects, techIcons } from "@/data/projects"

import { ExternalLink, ArrowUpRight, Code2 } from "lucide-react"
import { FaGithub } from "react-icons/fa"

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding relative overflow-hidden bg-gray-50 transition-colors duration-300 dark:bg-[#090D1B]"
    >
      <div className="section-container">
        <SectionHeading
          eyebrow="My Portfolio"
          icon={Code2}
          title="Featured"
          accent="Projects"
          description="Here are some of the projects I have built using modern web technologies, focusing on performance, functionality and user experience."
        />

        {/* Projects Grid — 2 columns, an odd last card spans full width */}
        <div className="grid gap-7 md:grid-cols-2">
          {projects.map((project, index) => {
            const isFeature =
              projects.length % 2 === 1 && index === projects.length - 1

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`h-full ${isFeature ? "md:col-span-2" : ""}`}
              >
                <article
                  className={`card-surface group flex h-full flex-col transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-2 ${
                    isFeature ? "md:flex-row" : ""
                  }`}
                >
                  {/* Project Image */}
                  <div
                    className={`relative aspect-16/9 overflow-hidden bg-[#191F30] md:aspect-2/1 ${
                      isFeature ? "md:aspect-auto md:w-[42%] md:shrink-0" : ""
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={`${project.title} project preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div
                      aria-hidden
                      className="absolute inset-0 bg-linear-to-t from-[#080B17]/60 to-transparent"
                    />

                    <span className="absolute top-4 left-4 rounded-full border border-white/15 bg-black/55 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Details */}
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                        {project.title}
                      </h3>

                      <ArrowUpRight
                        aria-hidden
                        className="mt-1 h-5 w-5 shrink-0 text-gray-400 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-indigo-500"
                      />
                    </div>

                    <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => {
                        const config = techIcons[tech]
                        const TechIcon = config?.icon

                        return (
                          <li
                            key={tech}
                            className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-[13px] font-medium text-gray-700 transition-colors duration-300 hover:border-indigo-400 dark:border-white/10 dark:bg-white/5 dark:text-gray-200 dark:hover:border-indigo-400/60"
                          >
                            {TechIcon && (
                              <TechIcon
                                aria-hidden
                                className={`size-4 shrink-0 ${config.color}`}
                              />
                            )}
                            {tech}
                          </li>
                        )
                      })}
                    </ul>

                    {/* Project Links */}
                    <div className="mt-auto flex gap-3 pt-6">
                      {project.github && (
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-indigo-500 hover:text-indigo-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-200 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
                        >
                          <FaGithub aria-hidden className="h-4 w-4" />
                          GitHub
                        </Link>
                      )}

                      {project.live && (
                        <Link
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-linear-to-r from-indigo-500 to-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:shadow-indigo-500/40"
                        >
                          Live Demo
                          <ExternalLink aria-hidden className="h-4 w-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
