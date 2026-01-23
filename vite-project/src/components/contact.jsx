import { Mail, Github, Linkedin, Twitter } from "lucide-react"

const socials = [
  { icon: Github, label: "GitHub", href: "#", handle: "@alexchen-sec" },
  { icon: Linkedin, label: "LinkedIn", href: "#", handle: "/in/alexchen" },
  { icon: Twitter, label: "X", href: "#", handle: "@alexchen_sec" },
  { icon: Mail, label: "Email", href: "mailto:alex@example.com", handle: "alex@example.com" },
]

export function Contact() {
  return (
    <section id="contact" className="px-6 lg:px-16 py-24">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-primary" />
          <span className="text-primary font-mono text-sm tracking-wider">CONTACT</span>
          <div className="h-px w-12 bg-primary" />
        </div>

        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
          {"Let's work together"}
        </h2>

        <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mb-12">
          {"I'm always interested in discussing new security challenges, consulting opportunities, or just connecting with fellow professionals. Feel free to reach out through any of the channels below."}
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="group flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all"
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
