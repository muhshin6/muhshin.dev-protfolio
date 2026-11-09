"use client"

import type { ReactNode } from "react"
import { motion } from "motion/react"
import type { LucideIcon } from "lucide-react"

import RevealText from "@/components/animations/RevealText"
import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  /** Small pill label shown above the title (large headings only) */
  eyebrow?: string
  icon?: LucideIcon
  /** Static part of the title */
  title: string
  /** Highlighted (gradient) part of the title */
  accent?: string
  description: ReactNode
  size?: "lg" | "sm"
  align?: "center" | "left"
  className?: string
}

/**
 * One consistent heading pattern for every section of the single page:
 * pill → title (word-by-word reveal) → short description.
 */
export default function SectionHeading({
  eyebrow,
  icon: Icon,
  title,
  accent,
  description,
  size = "lg",
  align = "center",
  className,
}: SectionHeadingProps) {
  const isLarge = size === "lg"

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className={cn(
        align === "center" ? "text-center" : "text-start",
        isLarge ? "mb-14" : "mb-9",
        className
      )}
    >
      {eyebrow && (
        <span className="section-eyebrow">
          {Icon && <Icon aria-hidden className="size-3.5" />}
          {eyebrow}
        </span>
      )}

      <h2
        className={cn(
          "font-bold tracking-tight text-gray-900 dark:text-white",
          isLarge ? "text-3xl sm:text-4xl lg:text-5xl" : "text-2xl sm:text-3xl"
        )}
      >
        <RevealText stagger={isLarge ? 0.05 : 0.06}>
          {title}
          {accent && (
            <>
              {" "}
              <span className="bg-linear-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
                {accent}
              </span>
            </>
          )}
        </RevealText>
      </h2>

      <p
        className={cn(
          "leading-7 text-gray-600 dark:text-gray-400",
          align === "center" && "mx-auto",
          isLarge
            ? "mt-5 max-w-2xl text-sm sm:text-base"
            : "mt-3 max-w-2xl text-sm"
        )}
      >
        <RevealText stagger={0.015} duration={0.5}>
          {description}
        </RevealText>
      </p>
    </motion.div>
  )
}
