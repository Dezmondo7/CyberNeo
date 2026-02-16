"use client"

import { useEffect } from "react"
import { X, Github, ExternalLink } from "lucide-react"

export function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown)
    }
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen || !project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-background border border-border rounded-lg shadow-2xl shadow-primary/5">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-background border-b border-border">
          <div className="flex items-center gap-4">
            <project.icon className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono bg-secondary text-primary rounded-md border border-border"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 mb-8">
            <a
              href={project.github}
              className="flex items-center gap-2 px-4 py-2 text-sm bg-secondary text-foreground rounded-md border border-border hover:border-primary/50 transition-colors"
            >
              <Github className="w-4 h-4" />
              View Source
            </a>
          </div>

          {/* Sections */}
          {project.sections.map((section, index) => (
            <div key={index} className="mb-10 last:mb-0">
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="text-primary font-mono text-sm">{"0" + (index + 1) + "."}</span>
                {section.heading}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {section.text}
              </p>

              {/* Screenshot */}
              <div className="rounded-lg border border-border overflow-hidden bg-secondary">
                <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-card">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-chart-4/60" />
                  <div className="w-3 h-3 rounded-full bg-primary/60" />
                  <span className="ml-2 text-xs text-muted-foreground font-mono">
                    {section.screenshotLabel || project.title}
                  </span>
                </div>
                {section.screenshot ? (
                  <img
                    src={section.screenshot || "/placeholder.svg"}
                    alt={section.heading + " screenshot"}
                    className="w-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-56 text-muted-foreground">
                    <div className="text-center">
                      <project.icon className="w-12 h-12 mx-auto mb-3 text-border" />
                      <p className="text-sm font-mono">Screenshot coming soon</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
