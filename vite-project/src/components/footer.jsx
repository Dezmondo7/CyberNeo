export function Footer() {
  return (
    <footer className="px-6 lg:px-16 py-8 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Built with security in mind. © {new Date().getFullYear()} Alex Chen
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            <span className="text-primary">{">"}</span> All systems secure_
          </p>
        </div>
      </div>
    </footer>
  )
}
