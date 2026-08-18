import { ExternalLink } from "lucide-react"

const experiences = [
   {
    period: "Sept 2026 — ",
    title: "MSc Cloud and Network Security Student",
    company: "University of Greater Manchester",
    description: "Awarded an Unconditional offer to study the MSc in Cloud and Network Security. Course content focuses on Cloud Solutions and Implementation, Penetration Testing and Forensics, DevOps and Enterprise Network Architecture. The course integrates hands-on labs using tools and vendors from key industry partners.",
    skills: ["AWS", "Red Hat", "Cisco", "GitHub"],
    link: "#",
  },
  {
    period: "Oct 2025 — May 2026",
    title: "Cyber Security Student",
    company: "Tameside College | Trafford & Stockport College",
    description: "Completed with Distinction the Level 2 Cyber Security certification which included a practical lab assesment configuring and installing intrusion prevention system, setting up firewall rules, and disabling sensitive information and services to reduce the attack surface alongside a three-hour written online examination. Completed the Level 4 Cyber Security certification with Distinction which focused on advanced theoretical analysis of attack vectors and multi-layered defense mechanisms.",
    skills: ["Penetration Testing", "Python", "Burp Suite", "Network Design"],
    link: "#",
  },
  {
    period: "2017 — 2025",
    title: "IT & Cyber Security Consultant",
    company: "IT Consultancies",
    description: "Strategic provider of specialist IT and Cyber Security consultancy sourcing project specialists who contributed to the successful execution of enterprise-level digital transformations. Proven track record contributing to high-stakes projects, ranging from cloud transitions to robust security policy implementation.",
    skills: ["SIEM", "Threat Intelligence", "Splunk", "Incident Response"],
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
