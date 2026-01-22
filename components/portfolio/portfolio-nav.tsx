import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MetisLogo } from "@/components/metis-logo"
import { ThemeToggle } from "@/components/theme-toggle"

interface PortfolioNavProps {
    currentPage?: string
}

export function PortfolioNav({ currentPage = "portfolio" }: PortfolioNavProps) {
    return (
        <nav className="relative w-full py-6 z-10 border-b border-border">
            <div className="max-w-6xl mx-auto px-8 flex items-center justify-between relative">
                <Link href="/" className="animate-fade-in" style={{ animationDelay: '0ms' }}>
                    <MetisLogo size={28} />
                </Link>
                {/* Absolutely centered nav links */}
                <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                    <Link
                        href="/"
                        className={`transition-all duration-300 text-sm tracking-wide animate-fade-in ${currentPage === "home"
                            ? "text-foreground font-semibold"
                            : "text-muted-foreground hover:text-foreground"
                            }`}
                        style={{ animationDelay: '50ms' }}
                    >
                        Home
                    </Link>
                    <Link
                        href="/services"
                        className={`transition-all duration-300 text-sm tracking-wide animate-fade-in ${currentPage === "services"
                            ? "text-foreground font-semibold"
                            : "text-muted-foreground hover:text-foreground"
                            }`}
                        style={{ animationDelay: '100ms' }}
                    >
                        Solutions
                    </Link>
                    <Link
                        href="/portfolio"
                        className={`transition-all duration-300 text-sm tracking-wide animate-fade-in ${currentPage === "portfolio"
                            ? "text-foreground font-semibold"
                            : "text-muted-foreground hover:text-foreground"
                            }`}
                        style={{ animationDelay: '150ms' }}
                    >
                        Portfolio
                    </Link>
                    <Link
                        href="/about"
                        className={`transition-all duration-300 text-sm tracking-wide animate-fade-in ${currentPage === "about"
                            ? "text-foreground font-semibold"
                            : "text-muted-foreground hover:text-foreground"
                            }`}
                        style={{ animationDelay: '200ms' }}
                    >
                        About
                    </Link>

                </div>
                <div className="hidden md:flex items-center gap-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
                    <ThemeToggle />
                    <Link href="https://calendly.com/shlok-nambiar/30min" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="tracking-wide bg-transparent">
                            Book a Meet
                        </Button>
                    </Link>
                </div>
                <div className="md:hidden">
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    )
}
