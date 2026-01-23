import { Award } from "lucide-react"

const certifications = [
  {
    name: "OSCP",
    fullName: "Offensive Security Certified Professional",
    issuer: "Offensive Security",
    year: "2023",
  },
  {
    name: "CEH",
    fullName: "Certified Ethical Hacker",
    issuer: "EC-Council",
    year: "2022",
  },
  {
    name: "CISSP",
    fullName: "Certified Information Systems Security Professional",
    issuer: "ISC²",
    year: "2023",
  },
  {
    name: "AWS Security",
    fullName: "AWS Certified Security - Specialty",
    issuer: "Amazon Web Services",
    year: "2024",
  },
]

export function Certifications() {
  return (
    <section id="about" className="px-6 lg:px-16 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="h-px w-12 bg-primary" />
          <span className="text-primary font-mono text-sm tracking-wider">CERTIFICATIONS</span>
          <div className="h-px w-12 bg-primary" />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <div className="p-2 bg-primary/10 rounded-lg">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {cert.name}
                </h3>
                <p className="text-sm text-muted-foreground">{cert.fullName}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {cert.issuer} · {cert.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
