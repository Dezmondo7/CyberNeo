import { ExternalLink } from "lucide-react"

const experiences = [
  {
    period: "2025 — Present",
    title: "Cyber Security Student",
    company: "Tameside College",
    description: "Currently completing Level 4 Cyber Security certification with a focus on advanced theoretical analysis of attack vectors and multi-layered defense mechanisms",
    skills: ["Penetration Testing", "Python", "Burp Suite", "AWS Security"],
    link: "#",
  },
  {
    period: "2020 — 2025",
    title: "IT & Cyber Security Consultant",
    company: "Virtuso Solutions",
    description: "Strategic provider of specialist IT and cybersecurity consultancy, dedicated to the successful execution of enterprise-level digital transformations. Proven track record in managing high-stakes projects, ranging cloud transitions to robust security policy implementation.",
    skills: ["SIEM", "Threat Intelligence", "Splunk", "Incident Response"],
    link: "#",
  },
  {
    period: "2017 — 2020",
    title: "IT & Cyber Security Consultant",
    company: "Robert Walters",
    description: "Delivered high-impact IT and cybersecurity consultancy for enterprise-scale programs. Specialized in deploying expert consultants to lead mission-critical initiatives, including contactless ticketing systems, cloud migrations, security framework development, and comprehensive network refreshes.",
    skills: ["Consulting", "Project Resource", "Contracts", "Cyber Secuirty", "cloud"],
    link: "#",
  },
]

export function Experience() {
  return (
    <section id="experience" className="px-6 lg:px-16 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="h-px w-12 bg-primary" />
          <span className="text-primary font-mono text-sm tracking-wider">EXPERIENCE</span>
          <div className="h-px w-12 bg-primary" />
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="group grid md:grid-cols-[140px_1fr] gap-4 md:gap-8"
            >
              <span className="text-sm text-muted-foreground font-mono">
                {exp.period}
              </span>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                  <a href={exp.link} className="inline-flex items-center gap-2">
                    {exp.title} · {exp.company}
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
