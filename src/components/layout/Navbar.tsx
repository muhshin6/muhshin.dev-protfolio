"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useTheme } from "@teispace/next-themes"
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react"
import { Menu, X, Sun, Moon, Code2 } from "lucide-react"

import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  const { resolvedTheme, setTheme } = useTheme()
  const { scrollY, scrollYProgress } = useScroll()

  const isDark = resolvedTheme === "dark"

  const toggleTheme = () => setTheme(isDark ? "light" : "dark")

  // Solidify the bar once the page starts moving
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 12))

  // Scroll spy: highlight the section currently in view
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section))

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length > 0) setActive(visible[0].target.id)
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-gray-200/80 bg-background/85 backdrop-blur-xl dark:border-white/10 dark:bg-[#090D1B]/85"
          : "border-transparent bg-background/60 backdrop-blur-md dark:bg-[#090D1B]/60"
      )}
    >
      <nav className="section-container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="group flex items-center gap-2.5">
          <span className="flex size-10 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/20 transition-transform duration-300 group-hover:scale-110">
            <Code2 size={22} />
          </span>

          <span className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl dark:text-white">
            Muhshin
            <span className="bg-linear-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              .dev
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1)

            return (
              <li key={link.name} className="relative">
                <Link
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative block rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-300",
                    isActive
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  )}
                >
                  {link.name}

                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-linear-to-r from-indigo-500 to-violet-500"
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="flex size-10 items-center justify-center rounded-xl border border-gray-200 bg-white/70 text-gray-600 transition-all duration-300 hover:border-indigo-500/50 hover:text-indigo-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:border-indigo-500/50 dark:hover:text-indigo-400"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Contact Button */}
          <Link
            href="#contact"
            className="hidden rounded-xl bg-linear-to-r from-indigo-500 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-indigo-500/40 sm:inline-flex"
          >
            Let&apos;s Talk
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="flex size-10 items-center justify-center rounded-xl border border-gray-200 bg-white/70 text-gray-600 transition-colors hover:text-indigo-600 md:hidden dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:text-indigo-400"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Reading progress */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-linear-to-r from-indigo-500 via-violet-500 to-purple-500"
      />

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-gray-200 bg-background/95 backdrop-blur-xl md:hidden dark:border-white/10 dark:bg-[#090D1B]/95"
          >
            <div className="section-container flex flex-col gap-1 py-4">
              {navLinks.map((link) => {
                const isActive = active === link.href.slice(1)

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white"
                    )}
                  >
                    {link.name}
                  </Link>
                )
              })}

              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-xl bg-linear-to-r from-indigo-500 to-violet-600 px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
