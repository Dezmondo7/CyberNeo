import { Mail, Cloud, Github, Linkedin, Twitter } from "lucide-react"

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/Dezmondo7", handle: "@dezmondo7" },
  { icon: Cloud, label: "TryHackMe", href: "https://tryhackme.com/p/Neophite", handle: "@Neophite" },
  { icon: Twitter, label: "X", href: "https://x.com/", handle: "@alexchen_sec" },
  { icon: Mail, label: "Email", href: "dalewarby23@outlook.com", handle: "dalewarby23@outlook.com" },
]

export function Contact() {
  return (
    <section id="contact" className="px-6 lg:px-16 py-24">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-primary" />
          <span className="text-primary font-mono text-sm tracking-wider">Cyber Security</span>
          <div className="h-px w-12 bg-primary" />
        </div>

        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
          {"Personal Statement"}
        </h2>

          {/* Text-left often reads better for long paragraphs, but text-center works for "Hero" styles */}
        <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12 text-center">
          For the past five years, I have pursued a rigorous, project-led path into Cybersecurity, 
          moving beyond theory to build and secure complex system architectures. My approach is 
          rooted in a <strong>'security-by-design'</strong> philosophy. I have engineered 
          custom applications specifically to implement and test <strong>OWASP Top 10</strong> mitigation 
          strategies and defensive hardening techniques. The projects above are centered on a dedicated lab environment where I simulate complex Active Directory architectures and SIEM configurations to bridge the gap between theoretical threats and enterprise-scale defense. By deconstructing the entire stack—from 
          hardware limitations to enterprise software architecture—I have gained an 'under-the-hood' 
          understanding of how vulnerabilities manifest and how to systematically defend against them. 
          This hands-on research is validated by a <strong>Top 7% global ranking on TryHackMe</strong>, 
          reflecting my commitment to continuous offensive and defensive skill development.
        </p>


        <div className="grid sm:grid-cols-2 gap-4">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="group flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all"
              target="_blank"
            >
              <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <div>
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {social.label}
                </p>
                <p className="text-xs text-muted-foreground">{social.handle}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
