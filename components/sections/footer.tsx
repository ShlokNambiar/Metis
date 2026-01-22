import { MetisIcon } from "@/components/metis-logo"

export function Footer() {
  return (
    <footer className="py-12 px-8 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <MetisIcon size={24} />
        <nav className="flex items-center gap-8">
          <a href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide">
            About
          </a>
          <a
            href="/services"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide"
          >
            Solutions
          </a>

          <a href="/portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide">
            Portfolio
          </a>
        </nav>
        <div className="text-center md:text-right">
          <p className="text-xs text-muted-foreground">© 2025 Metis AI</p>
          <p className="text-xs text-muted-foreground/60 mt-1">formerly Vigor Labs</p>
        </div>
      </div>
    </footer>
  )
}
