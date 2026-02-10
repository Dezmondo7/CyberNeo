"use client"

import { useEffect } from "react"
import { X, Award, Calendar, Building } from "lucide-react"

export function CertificationModal({ cert, isOpen, onClose }) {
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

  if (!isOpen || !cert) return null

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
            <div className="p-2 bg-primary/10 rounded-lg">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">{cert.name}</h2>
              <p className="text-sm text-muted-foreground">{cert.fullName}</p>
            </div>
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
          {/* Meta info */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-md border border-border">
              <Building className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">{cert.issuer}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-md border border-border">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">Awarded {cert.year}</span>
            </div>
          </div>

          {/* Sections */}
          {cert.sections.map((section, index) => (
            <div key={index} className="mb-10 last:mb-0">
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="text-primary font-mono text-sm">{"0" + (index + 1) + "."}</span>
                {section.heading}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {section.text}
              </p>

              {/* Certificate Screenshot */}
              {section.image && (
                <div className="rounded-lg border border-border overflow-hidden bg-secondary">
                  <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-card">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-chart-4/60" />
                    <div className="w-3 h-3 rounded-full bg-primary/60" />
                    <span className="ml-2 text-xs text-muted-foreground font-mono">
                      {section.imageLabel || cert.name}
                    </span>
                  </div>
                  <img
                    src={section.image || "/placeholder.svg"}
                    alt={section.heading}
                    className="w-full object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
