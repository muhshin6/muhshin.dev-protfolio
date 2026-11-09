import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import Navbar from "../components/layout/Navbar"
import Footer from "@/components/layout/Footer"


const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: {
    default: "Muhshin Reza | Frontend Developer",
    template: "%s | Muhshin.dev",
  },
  description:
    "Muhshin Reza is a passionate Frontend Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
  keywords: [
    "Muhshin Reza",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Web Developer",
  ],
  authors: [{ name: "Muhshin Reza" }],
  creator: "Muhshin Reza",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", geist.variable, geistMono.variable)}
    >
      <body>
        <ThemeProvider>
          <Navbar/>
          {children}
          <Footer/>
          </ThemeProvider>
      </body>
    </html>
  )
}
