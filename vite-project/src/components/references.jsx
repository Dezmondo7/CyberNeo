import { Quote, Briefcase, Mail } from "lucide-react"

const references = [
  {
    name: "Wayne Bennett",
    title: "Director",
    company: "Robert Walters",
    email: "wayne.bennett@robertwalters.com",
    quote:
      "I can confirm that Dale Warburton was a key member of the Technology division at Robert Walters between 2017 and 2019. As one of the top-performing consultants on the team, Dale demonstrated an elite level of professional discipline, stakeholder management, and a deep understanding of the technology landscape to help identify technical consultants on critical enterprise IT projects.",
    relationship: "Director IT, Cyber & Networks",
  },
  {
    name: "Arben Zymberi",
    title: "Senior Cyber Instructor",
    company: "Codenation",
    email: "arben.zymberi@wearecodenation.com",
    quote:
      "Dale consistently demonstrated exceptional technical aptitude... making him one of the strongest students on the course. During his practical project, he successfully carried out Apache hardening techniques, including installing and configuring an Intrusion Prevention System (IPS) and Firewall rules to reduce the attack surface. His ability to follow best practices was particularly impressive.",
    relationship: "Senior Cyber Instructor",
  },
]

export function References() {
  return (
    <section id="references" className="px-6 lg:px-16 py-24 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="h-px w-12 bg-primary" />
          <span className="text-primary font-mono text-sm tracking-wider">
            REFERENCES
          </span>
          <div className="h-px w-12 bg-primary" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {references.map((ref, index) => (
            <div
              key={index}
              className="group p-6 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <Quote className="w-8 h-8 text-primary mb-4 opacity-50" />

              <p className="text-muted-foreground text-sm leading-relaxed italic mb-6">
                {`"${ref.quote}"`}
              </p>

              <div className="h-px w-full bg-border mb-4" />

              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {ref.name}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Briefcase className="w-3.5 h-3.5 text-primary" />
                  <span>{ref.title}</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {ref.company} · {ref.relationship}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                  <Mail className="w-3.5 h-3.5 text-primary" />
                  <a
                    href={`mailto:${ref.email}`}
                    className="hover:text-primary transition-colors"
                  >
                    {ref.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
