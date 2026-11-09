"use client"

import { useEffect } from "react"

export default function CopyProtection() {
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
    }

    // Disable text selection copy
    const handleSelectStart = (e: Event) => {
      const target = e.target as HTMLElement

      if (!target.closest("input, textarea, [contenteditable='true']")) {
        e.preventDefault()
      }
    }

    // Disable keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase()

      if (
        (e.ctrlKey && ["c", "u", "s", "a", "p"].includes(key)) ||
        (e.ctrlKey && e.shiftKey && ["i", "j", "c"].includes(key)) ||
        key === "f12"
      ) {
        e.preventDefault()
      }
    }

    document.addEventListener("contextmenu", handleContextMenu)
    document.addEventListener("selectstart", handleSelectStart)
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu)
      document.removeEventListener("selectstart", handleSelectStart)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return null
}
