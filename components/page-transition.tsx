"use client"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

interface PageTransitionProps {
    children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
    const pathname = usePathname()
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        // Start fade out
        setIsVisible(false)

        // After brief fade out, fade back in
        const timeout = setTimeout(() => {
            setIsVisible(true)
        }, 100)

        return () => clearTimeout(timeout)
    }, [pathname])

    return (
        <div
            style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 200ms ease-out'
            }}
        >
            {children}
        </div>
    )
}
