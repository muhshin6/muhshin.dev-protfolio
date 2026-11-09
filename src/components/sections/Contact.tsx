"use client"

import { motion } from "motion/react"

import SectionHeading from "@/components/sections/SectionHeading"

import { ArrowUpRight, Mail, MapPin, Phone, Send } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "imuhshin666@gmail.com",
    href: "mailto:imuhshin666@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+8801350496902",
    href: "tel:+8801350496902",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangladesh",
    href: "https://www.google.com/maps/place/Bangladesh",
  },
]

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/muhshin6",
    icon: FaGithub,
    className: "text-gray-700 dark:text-gray-300",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/muhshin-reza-b2a083427/",
    icon: FaLinkedin,
    className: "text-blue-600 dark:text-blue-400",
  },
]

const Contact = () => {
  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden bg-gray-50 transition-colors duration-300 dark:bg-[#090D1B]"
    >
      {/* Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-[120px]"
      />

      <div className="section-container relative z-10">
        <SectionHeading
          eyebrow="Get In Touch"
          icon={Send}
          title="Let's Build Something"
          accent="Amazing."
          description="Have an idea or a project in mind? Let's connect and turn your vision into something meaningful."
        />

        {/* Contact Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="card-surface rounded-3xl p-8 sm:p-10"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Let&apos;s talk
            </h3>

            <p className="mt-3 max-w-md leading-7 text-gray-600 dark:text-gray-400">
              I&apos;m always interested in new opportunities, creative
              collaborations, and exciting projects.
            </p>

            {/* Contact Details */}
            <ul className="mt-10 space-y-7">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4"
                  >
                    <span className="rounded-xl border border-indigo-500/10 bg-indigo-500/10 p-3 text-indigo-600 transition group-hover:bg-indigo-500 group-hover:text-white dark:text-indigo-400">
                      <Icon size={21} aria-hidden />
                    </span>

                    <span>
                      <span className="block text-sm text-gray-500 dark:text-gray-400">
                        {label}
                      </span>

                      <span className="mt-1 block font-medium text-gray-800 transition-colors group-hover:text-indigo-600 dark:text-gray-200 dark:group-hover:text-indigo-400">
                        {value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-12 border-t border-gray-200 pt-8 dark:border-white/10">
              <p className="mb-5 text-sm font-medium text-gray-500 dark:text-gray-400">
                Find me on
              </p>

              <div className="flex gap-3">
                {socials.map(({ name, href, icon: Icon, className }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className={`rounded-xl border border-gray-200 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:bg-indigo-500 hover:text-white dark:border-white/10 dark:bg-white/5 dark:hover:border-indigo-500 ${className}`}
                  >
                    <Icon size={25} aria-hidden />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="card-surface card-featured flex flex-col justify-between rounded-3xl p-8 sm:p-10"
          >
            <div
              aria-hidden
              className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-violet-500/15 blur-[80px]"
            />

            <div className="relative">
              <span className="mb-8 inline-flex rounded-2xl border border-indigo-500/20 bg-indigo-500/10 p-4 text-indigo-600 dark:text-indigo-400">
                <Send size={28} aria-hidden />
              </span>

              <h3 className="max-w-sm text-3xl leading-tight font-bold text-gray-900 sm:text-4xl dark:text-white">
                Have a project in mind?
              </h3>

              <p className="mt-5 max-w-sm leading-7 text-gray-600 dark:text-gray-400">
                Whether it's a new website, collaboration, or just a
                conversation, I'd love to hear from you.
              </p>
            </div>

            <div className="relative mt-12">
              <a
                href="mailto:imuhshin666@gmail.com?subject=Project%20Inquiry"
                className="group inline-flex w-full items-center justify-between rounded-xl bg-linear-to-r from-indigo-600 to-violet-600 px-6 py-5 font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/30"
              >
                Let's Connect
                <ArrowUpRight
                  size={22}
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <div className="mt-8 flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                </span>

                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Open to opportunities and collaborations
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
