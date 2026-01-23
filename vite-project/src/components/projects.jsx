import { Github, ExternalLink, Shield, Terminal, Lock, Bug } from "lucide-react"

const projects = [
  {
    title: "VulnScanner Pro",
    description: "An automated vulnerability scanning tool that identifies common web application security flaws including SQL injection, XSS, and CSRF vulnerabilities.",
    tech: ["Python", "Selenium", "BeautifulSoup", "PostgreSQL"],
    github: "#",
    live: "#",
    icon: Bug,
  },
  {
    title: "ThreatMap Dashboard",
    description: "Real-time threat intelligence dashboard that aggregates data from multiple sources and visualizes attack patterns and threat actor activities.",
    tech: ["React", "D3.js", "Node.js", "Elasticsearch"],
    github: "#",
    live: "#",
    icon: Shield,
  },
  {
    title: "CryptoVault",
    description: "End-to-end encrypted password manager with zero-knowledge architecture. Features secure sharing and breach monitoring.",
    tech: ["Rust", "AES-256", "SQLite", "WebAssembly"],
    github: "#",
    live: "#",
    icon: Lock,
  },
  {
    title: "NetRecon",
    description: "Network reconnaissance toolkit for authorized penetration testing. Includes port scanning, service enumeration, and OS fingerprinting.",
    tech: ["Go", "Nmap", "Docker", "gRPC"],
    github: "#",
    live: "#",
    icon: Terminal,
  },
]

export function Projects() {
  return (
    <section id="projects" className="px-6 lg:px-16 py-24 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="h-px w-12 bg-primary" />
          <span className="text-primary font-mono text-sm tracking-wider">PROJECTS</span>
          <div className="h-px w-12 bg-primary" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <project.icon className="w-10 h-10 text-primary" />
                <div className="flex items-center gap-3">
                  <a 
                    href={project.github}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${project.title} GitHub`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href={project.live}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${project.title} Live Demo`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="text-xs font-mono text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
