"use client"

import { ArrowUpRight, Heart, ArrowUp } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-gray-200 bg-gray-50 transition-colors duration-300 dark:border-white/10 dark:bg-[#090D1B]">
      <div className="section-container">
        {/* Main Footer */}
        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Muhshin
              <span className="bg-linear-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
                .dev
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-600 dark:text-gray-400">
              Building modern, responsive, and user-friendly web experiences
              with passion and creativity.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com/muhshin6"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-xl border border-gray-200 bg-white p-3 text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:bg-indigo-500 hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:border-indigo-500"
              >
                <FaGithub size={25} />
              </a>

              <a
                href="https://www.linkedin.com/in/muhshin-reza-b2a083427/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-xl border border-gray-200 bg-white p-3 text-blue-600 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:bg-indigo-500 hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-blue-400 dark:hover:border-indigo-500"
              >
                <FaLinkedin size={25} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-gray-900 uppercase dark:text-white">
              Quick Links
            </h3>

            <div className="mt-6 grid grid-cols-2 gap-y-1.5">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group inline-flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400"
                >
                  {link.name}

                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-gray-900 uppercase dark:text-white">
              Let's Connect
            </h3>

            <p className="mt-6 max-w-xs text-sm leading-7 text-gray-600 dark:text-gray-400">
              Have an exciting project or an opportunity? Let's create
              something amazing together.
            </p>

            <a
              href="mailto:imuhshin666@gmail.com?subject=Hello%20Muhshin"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition-colors hover:text-violet-600 dark:text-indigo-400 dark:hover:text-violet-400"
            >
              Get in touch
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-5 border-t border-gray-200 py-6 sm:flex-row dark:border-white/10">
          <p className="text-center text-sm text-gray-500">
            © {currentYear} Muhshin.dev. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-sm text-gray-500">
            Designed & Built with by
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              Muhshin
            </span>
          </p>

          {/* Back to Top */}
          <a
            href="#home"
            aria-label="Back to top"
            className="rounded-xl border border-gray-200 p-3 text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:bg-indigo-500 hover:text-white dark:border-white/10 dark:text-gray-400"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
