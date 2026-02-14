import { useState } from "react"
import { Award } from "lucide-react"
import { CertificationModal } from "./certification-modal"
import cyberlevel2 from "../assets/cyber2.png"
import edxcert from "../assets/edxcertificate.png"

const certifications = [
  {
    name: "Level 2",
    fullName: "Cyber Security & Digital Forensics",
    issuer: "Codenation | Trafford & Stockport College",
    year: "2025",
      sections: [
      {
        heading: "About the Certification",
        text: "The Level 2 Cyber Security Certificate is a foundational, hands-on qualification that combines practical lab-based exercises with a formal assessment exam. It evaluates a candidate’s ability to apply core cybersecurity principles in real-world scenarios, validating both technical competence and problem-solving skills across defensive and operational security domains.",
        image: null,
        imageLabel: "OSCP Certificate",
      },
      {
        heading: "Skills Gained",
        text: "The course covered key areas including cyber legislation and regulatory requirements, the CIA triad (confidentiality, integrity, and availability), and fundamental system architecture concepts such as the LAMP stack. It also developed practical skills in hardware and software analysis, threat identification, and risk awareness, reinforcing the ability to assess and secure systems within real-world IT environments.",
        image: cyberlevel2,
        imageLabel: null,
      },
    ],
  },
  {
    name: "Level 4",
    fullName: "Cyber Security & Digital Forensics",
    issuer: "Tameside College",
    year: "2026",
    sections: [
      {
        heading: "About the Certification",
        text: "The Level 4 Cyber Security Certificate focused on advanced theoretical analysis of cyber threats, including detailed examination of technical attack methods and strategies. The course emphasized preventative measures, risk mitigation, and incident response, incorporating insights from Security Operations Center (SOC) environments.",
        image: null,
        imageLabel: "CEH Certificate",
      },
      {
        heading: "Skills Gained",
        text: "This certification strengthened my understanding of attack vectors and defensive countermeasures, covering everything from web application attacks and wireless network hacking to cryptography and cloud security fundamentals.",
        image: null,
        imageLabel: null,
      },
    ],
  },
  {
    name: "Web Development",
    fullName: "Ed-X Front End Web Development",
    issuer: "Ed-X",
    year: "2024",
     sections: [
      {
        heading: "About the Certification",
        text: "The edX Engineering Bootcamp was an intensive, industry‑aligned technical training programme designed to rapidly build practical engineering and technology skills through project‑based learning, hands‑on assignments, and real‑world scenarios.",
        image: null,
        imageLabel: "CISSP Certificate",
      },
      {
        heading: "Skills Gained",
        text: "Throughout the bootcamp I gained experience applying key engineering and computing concepts, including software development fundamentals, system design, and modern programming practices such as version control, APIs, and agile methodologies. I also developed proficiency in building, testing, and deploying functional applications, strengthened problem‑solving and analytical thinking, and completed a portfolio of work that demonstrates technical capability and readiness to contribute to engineering teams. The course incorporated expert‑led instruction, industry‑relevant tools, and career support elements that helped bridge theoretical knowledge with workplace expectations. I was awarded a 98% pass grade which was attained across various front end applications and included two group applications, one which I served as the technical design lead.",
        image: edxcert,
        imageLabel: null,
      },
    ],
  },
  {
    name: "MS SC-900 (pending)",
    fullName: "Microsoft Security, Compliance, and Identity Fundamentals",
    issuer: "Microsoft",
    year: "2024",
      sections: [
      {
        heading: "About the Certification",
        text: "This certification covers foundational knowledge of security, compliance, and identity (SCI) concepts, as well as related solutions across Microsoft Azure and Microsoft 365. ",
        image: null,
        imageLabel: "AWS Security Certificate",
      },
      {
        heading: "Skills Gained",
        text: "This certification enhanced my ability to secure cloud-native architectures using AWS services such as IAM, KMS, GuardDuty, Security Hub, WAF, and CloudTrail. I gained hands-on expertise in building secure, compliant infrastructure at scale.",
        image: null,
        imageLabel: null,
      },
    ],
  },
]

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null)

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
            <button
              key={index}
              onClick={() => setSelectedCert(cert)}
              className="group flex items-start gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors text-left cursor-pointer"
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
            </button>
          ))}
        </div>
      </div>

      <CertificationModal
        cert={selectedCert}
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  )
}
