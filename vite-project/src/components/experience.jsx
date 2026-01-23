import { ExternalLink } from "lucide-react"

const experiences = [
  {
    period: "2022 — Present",
    title: "Senior Security Engineer",
    company: "CyberShield Corp",
    description: "Lead penetration testing engagements for Fortune 500 clients. Developed automated vulnerability scanning pipelines and incident response procedures that reduced mean time to detection by 60%.",
    skills: ["Penetration Testing", "Python", "Burp Suite", "AWS Security"],
    link: "#",
  },
  {
    period: "2020 — 2022",
    title: "Security Analyst",
    company: "TechDefense Inc",
    description: "Conducted threat intelligence analysis and vulnerability assessments. Built custom SIEM rules and detection signatures that identified over 200 potential security incidents.",
    skills: ["SIEM", "Threat Intelligence", "Splunk", "Incident Response"],
    link: "#",
  },
  {
    period: "2019 — 2020",
    title: "Junior Security Consultant",
    company: "SecureNet Solutions",
    description: "Performed security audits and compliance assessments for SMB clients. Assisted in developing security policies and conducted employee security awareness training.",
    skills: ["Compliance", "Risk Assessment", "Nessus", "Security Policies"],
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
