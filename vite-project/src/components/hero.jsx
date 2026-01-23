"use client"
import { useEffect, useState } from "react"
import { Shield, Terminal, Lock, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Securing digital infrastructure, one vulnerability at a time."

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 40)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 lg:px-16 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12 bg-primary" />
          <span className="text-primary font-mono text-sm tracking-wider">CYBERSECURITY SPECIALIST</span>
          <div className="h-px w-12 bg-primary" />
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-4 tracking-tight">
          Dale W.
        </h1>
        
        <p className="text-xl lg:text-2xl text-muted-foreground mb-8 font-mono min-h-[2rem]">
          <span className="text-primary">{">"}</span> {typedText}
          <span className="animate-pulse">_</span>
        </p>

        <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
          I specialize in penetration testing, threat intelligence, and building resilient security architectures. 
          With over 5 years of experience protecting enterprise systems, I help organizations identify vulnerabilities 
          before malicious actors do.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-md border border-border">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground">Penetration Testing</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-md border border-border">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground">Threat Analysis</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-md border border-border">
            <Lock className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground">Security Architecture</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a 
            href="#contact" 
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="#contact" 
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="#contact" 
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
