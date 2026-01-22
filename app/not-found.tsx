"use client"

import { Button } from "@/components/ui/button"
import { MetisLogo } from "@/components/metis-logo"
import Link from "next/link"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            {/* Simple Navigation */}
            <nav className="w-full py-6 border-b border-border">
                <div className="max-w-6xl mx-auto px-8">
                    <Link href="/">
                        <MetisLogo size={28} />
                    </Link>
                </div>
            </nav>

            {/* 404 Content */}
            <div className="flex-1 flex items-center justify-center px-8">
                <div className="text-center max-w-lg animate-fade-in">
                    <p className="text-steel-blue text-sm tracking-[0.2em] uppercase mb-4">
                        Error 404
                    </p>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-foreground mb-6">
                        Page not found.
                    </h1>
                    <p className="text-xl text-muted-foreground font-light leading-relaxed mb-12">
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/">
                            <Button
                                size="lg"
                                className="bg-steel-blue hover:bg-steel-blue/90 text-white px-8 py-6 text-lg tracking-wide"
                            >
                                <Home className="w-5 h-5 mr-2" />
                                Go Home
                            </Button>
                        </Link>
                        <Button
                            variant="ghost"
                            size="lg"
                            className="text-muted-foreground hover:text-foreground px-8 py-6 text-lg tracking-wide"
                            onClick={() => window.history.back()}
                        >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Go Back
                        </Button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="py-8 px-8 border-t border-border">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-xs text-muted-foreground">© 2025 Metis AI</p>
                </div>
            </footer>
        </main>
    )
}
