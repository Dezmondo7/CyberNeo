import { Navigation } from "./components/navigation"
import { Hero } from "./components/hero"
import { Certifications } from "./components/certifications"
import { Experience } from "./components/experience"
import { Projects } from "./components/projects"
import { References } from "./components/references"
import { Contact } from "./components/contact"
import { Footer } from "./components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Certifications />
      <Experience />
      <Projects />
      <Contact />
      <References />
      <Footer />
    </main>
  )
}
