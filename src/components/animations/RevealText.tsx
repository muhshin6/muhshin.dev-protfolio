"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";
import { motion, type Variants } from "motion/react";

type RevealTextProps = {
  children: ReactNode;
  className?: string;
  /** Delay before the first word starts (seconds) */
  delay?: number;
  /** Gap between each word (seconds) */
  stagger?: number;
  /** Duration of a single word reveal (seconds) */
  duration?: number;
};

/**
 * Word-by-word masked text reveal.
 *
 * Every word slides up from behind an overflow-hidden mask while the
 * whole block is in view. Styled children (gradients, links, ...) are
 * kept intact - only their text nodes are split into words.
 */
export default function RevealText({
  children,
  className,
  delay = 0,
  stagger = 0.05,
  duration = 0.7,
}: RevealTextProps) {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { y: "130%" },
    visible: {
      y: "0%",
      transition: { duration, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const buildWords = (node: ReactNode, prefix = "w"): ReactNode[] => {
    const words: ReactNode[] = [];

    Children.forEach(node, (child, index) => {
      const key = `${prefix}-${index}`;

      // Plain text: split into words so each one can reveal on its own
      if (typeof child === "string" || typeof child === "number") {
        String(child)
          .split(/(\s+)/)
          .forEach((part, partIndex) => {
            if (!part) return;

            // Keep whitespace so words don't stick together
            if (/^\s+$/.test(part)) {
              words.push(part);
              return;
            }

            words.push(
              <span
                key={`${key}-${partIndex}`}
                className="inline-block overflow-hidden align-bottom pb-[0.2em]"
              >
                <motion.span className="inline-block" variants={wordVariants}>
                  {part}
                </motion.span>
              </span>,
            );
          });
        return;
      }

      // Styled elements (e.g. gradient spans): keep them, reveal their text
      if (isValidElement(child)) {
        const element = child as ReactElement<{ children?: ReactNode }>;

        words.push(
          cloneElement(element, {
            key: element.key ?? key,
            children: buildWords(element.props.children, key),
          }),
        );
        return;
      }

      words.push(child);
    });

    return words;
  };

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {buildWords(children)}
    </motion.span>
  );
}
