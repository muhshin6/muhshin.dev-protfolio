import About from "@/components/sections/About"
import Contact from "@/components/sections/Contact"
import Hero from "@/components/sections/Hero"
import Projects from "@/components/sections/Projects"
import Skills from "@/components/sections/Skills"

/**
 * Single page portfolio — every section is an anchor target that the
 * navbar links to (#home, #about, #skills, #projects, #contact).
 * Tools live inside the Skills section.
 */
export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
