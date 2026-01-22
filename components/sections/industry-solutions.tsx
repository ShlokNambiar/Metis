"use client"

import { useEffect, useRef } from "react"

export function IndustrySolutions() {
    const lightCanvasRef = useRef<HTMLCanvasElement>(null)
    const darkCanvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        // Setup for both canvases
        const setupCanvas = (canvas: HTMLCanvasElement | null, isDarkMode: boolean) => {
            if (!canvas) return null

            const ctx = canvas.getContext("2d")
            if (!ctx) return null

            // Set canvas size
            const container = canvas.parentElement
            if (!container) return null

            canvas.width = Math.min(800, container.clientWidth)
            canvas.height = 500

            let rotation = 0

            // Industries with subtle variation in orbit
            const industries = [
                { name: "Legal", angle: 0, radiusOffset: 15, speed: 1.0, baseRadius: 195 },
                { name: "Tax & Audit", angle: (Math.PI * 2) / 10, radiusOffset: 10, speed: 1.1, baseRadius: 210 },
                { name: "Finance", angle: (Math.PI * 4) / 10, radiusOffset: 20, speed: 0.9, baseRadius: 185 },
                { name: "Manufacturing", angle: (Math.PI * 6) / 10, radiusOffset: 12, speed: 1.05, baseRadius: 220 },
                { name: "Hospitality", angle: (Math.PI * 8) / 10, radiusOffset: 18, speed: 0.95, baseRadius: 200 },
                { name: "Operations", angle: Math.PI, radiusOffset: 8, speed: 1.0, baseRadius: 180 },
                { name: "Compliance", angle: (Math.PI * 12) / 10, radiusOffset: 22, speed: 1.08, baseRadius: 205 },
                { name: "Real Estate", angle: (Math.PI * 14) / 10, radiusOffset: 14, speed: 0.92, baseRadius: 215 },
                { name: "Healthcare", angle: (Math.PI * 16) / 10, radiusOffset: 16, speed: 1.03, baseRadius: 190 },
                { name: "Trading", angle: (Math.PI * 18) / 10, radiusOffset: 11, speed: 0.97, baseRadius: 208 },
            ]

            // Theme-aware colors
            const bgColor = isDarkMode ? "rgba(30, 30, 30, 0.9)" : "rgba(255, 255, 255, 0.9)"
            const borderColor = isDarkMode ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.1)"
            const textColor = isDarkMode ? "rgba(255, 255, 255, 0.9)" : "rgba(0, 0, 0, 0.8)"
            const centerBgColor = isDarkMode ? "#000000" : "#FFFFFF"

            function drawLabel(text: string, x: number, y: number, alpha: number) {
                ctx.save()
                ctx.globalAlpha = alpha

                // Measure text
                ctx.font = "italic 14px Georgia, serif"
                const metrics = ctx.measureText(text)
                const padding = 12
                const width = metrics.width + padding * 2
                const height = 28

                // Draw label background
                ctx.fillStyle = bgColor
                ctx.strokeStyle = borderColor
                ctx.lineWidth = 1

                const radius = height / 2
                ctx.beginPath()
                ctx.moveTo(x - width / 2 + radius, y - height / 2)
                ctx.lineTo(x + width / 2 - radius, y - height / 2)
                ctx.arcTo(x + width / 2, y - height / 2, x + width / 2, y, radius)
                ctx.lineTo(x + width / 2, y + height / 2 - radius)
                ctx.arcTo(x + width / 2, y + height / 2, x, y + height / 2, radius)
                ctx.lineTo(x - width / 2 + radius, y + height / 2)
                ctx.arcTo(x - width / 2, y + height / 2, x - width / 2, y, radius)
                ctx.lineTo(x - width / 2, y - height / 2 + radius)
                ctx.arcTo(x - width / 2, y - height / 2, x, y - height / 2, radius)
                ctx.closePath()
                ctx.fill()
                ctx.stroke()

                // Draw text
                ctx.fillStyle = textColor
                ctx.textAlign = "center"
                ctx.textBaseline = "middle"
                ctx.fillText(text, x, y)

                ctx.restore()
            }

            function animate() {
                if (!ctx || !canvas) return

                ctx.clearRect(0, 0, canvas.width, canvas.height)

                rotation += 0.0015 // Slower rotation (50% speed)

                const centerX = canvas.width / 2
                const centerY = canvas.height / 2

                // Calculate positions for each industry
                const positions = industries.map((industry, index) => {
                    const currentAngle = industry.angle + rotation * industry.speed

                    // Add subtle radius variation using sine wave for organic movement
                    const radiusVariation = Math.sin(rotation * 2 + index) * industry.radiusOffset
                    const currentRadius = industry.baseRadius + radiusVariation

                    const x = centerX + Math.cos(currentAngle) * currentRadius
                    const y = centerY + Math.sin(currentAngle) * currentRadius

                    // Calculate opacity based on angle (fade when near horizontal center line)
                    // Labels on the sides are more visible
                    const normalizedAngle = ((currentAngle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2)
                    const distanceFromSides = Math.abs(Math.sin(normalizedAngle))
                    const alpha = 0.4 + distanceFromSides * 0.6

                    return {
                        ...industry,
                        x,
                        y,
                        alpha,
                        angle: currentAngle,
                    }
                })

                // Draw connecting lines
                ctx.strokeStyle = "rgba(19, 89, 160, 0.6)" // Steel blue with high visibility
                ctx.lineWidth = 1.5
                positions.forEach((pos) => {
                    ctx.beginPath()
                    ctx.moveTo(centerX, centerY)
                    ctx.lineTo(pos.x, pos.y)
                    ctx.globalAlpha = pos.alpha * 0.8
                    ctx.stroke()
                    ctx.globalAlpha = 1
                })

                // Draw all labels
                positions.forEach((pos) => {
                    drawLabel(pos.name, pos.x, pos.y, pos.alpha)
                })

                // Draw center icon (always on top)
                const centerSize = 50  // Restored to original
                // Opaque background based on theme
                ctx.fillStyle = centerBgColor
                ctx.strokeStyle = "#1359a0"
                ctx.lineWidth = 2  // Restored to original
                ctx.beginPath()
                ctx.arc(centerX, centerY, centerSize / 2, 0, Math.PI * 2)
                ctx.fill()
                ctx.stroke()

                // Draw METIS logo - actual website icon
                ctx.fillStyle = "#1359a0"
                ctx.strokeStyle = "#1359a0"

                const scale = 0.4  // Scale factor for the logo
                const offsetX = centerX - 20 * scale
                const offsetY = centerY - 24 * scale

                // Top circle
                ctx.beginPath()
                ctx.arc(offsetX + 20 * scale, offsetY + 6 * scale, 6 * scale, 0, Math.PI * 2)
                ctx.fill()

                // Left circle
                ctx.beginPath()
                ctx.arc(offsetX + 8 * scale, offsetY + 22 * scale, 6 * scale, 0, Math.PI * 2)
                ctx.fill()

                // Right circle
                ctx.beginPath()
                ctx.arc(offsetX + 32 * scale, offsetY + 22 * scale, 6 * scale, 0, Math.PI * 2)
                ctx.fill()

                // Bottom circle
                ctx.beginPath()
                ctx.arc(offsetX + 20 * scale, offsetY + 42 * scale, 6 * scale, 0, Math.PI * 2)
                ctx.fill()

                // Center node
                ctx.beginPath()
                ctx.arc(offsetX + 20 * scale, offsetY + 22 * scale, 4 * scale, 0, Math.PI * 2)
                ctx.fill()

                // Connecting lines
                ctx.lineWidth = 3 * scale

                // Top to center
                ctx.beginPath()
                ctx.moveTo(offsetX + 20 * scale, offsetY + 12 * scale)
                ctx.lineTo(offsetX + 20 * scale, offsetY + 18 * scale)
                ctx.stroke()

                // Horizontal line (left to right through center)
                ctx.beginPath()
                ctx.moveTo(offsetX + 14 * scale, offsetY + 22 * scale)
                ctx.lineTo(offsetX + 26 * scale, offsetY + 22 * scale)
                ctx.stroke()

                // Left diagonal (left circle to bottom)
                ctx.beginPath()
                ctx.moveTo(offsetX + 12 * scale, offsetY + 26 * scale)
                ctx.lineTo(offsetX + 18 * scale, offsetY + 36 * scale)
                ctx.stroke()

                // Right diagonal (right circle to bottom)
                ctx.beginPath()
                ctx.moveTo(offsetX + 28 * scale, offsetY + 26 * scale)
                ctx.lineTo(offsetX + 22 * scale, offsetY + 36 * scale)
                ctx.stroke()

                requestAnimationFrame(animate)
            }

            animate()

            const handleResize = () => {
                if (container) {
                    canvas.width = Math.min(800, container.clientWidth)
                    canvas.height = 500
                }
            }

            window.addEventListener("resize", handleResize)
            return () => window.removeEventListener("resize", handleResize)
        }

        // Setup both canvases
        const lightCleanup = setupCanvas(lightCanvasRef.current, false)
        const darkCleanup = setupCanvas(darkCanvasRef.current, true)

        return () => {
            lightCleanup?.()
            darkCleanup?.()
        }
    }, [])

    return (
        <section className="py-32 px-8 bg-background border-t border-border relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20 relative z-10">
                    <p className="text-sm tracking-[0.2em] uppercase mb-4 text-steel-blue">
                        Industry Solutions
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
                        Automation built for regulated work.
                    </h2>
                    <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
                        AI agents designed for compliance-critical industries where precision and reliability matter.
                    </p>
                </div>

                {/* Split Layout: Content Left, Animation Right */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side: Feature Cards */}
                    <div className="space-y-8">
                        {/* Feature 1 */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-lg bg-steel-blue/10 flex items-center justify-center">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-steel-blue">
                                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-2">Intelligent Automation</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    METIS builds on your workflows, expands your capabilities, and simplifies complex processes one step at a time.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-lg bg-steel-blue/10 flex items-center justify-center">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-steel-blue">
                                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
                                        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-2">Compliance-First</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Expert-level automation for regulated industries—from legal documentation to financial operations with full audit trails.
                                </p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-lg bg-steel-blue/10 flex items-center justify-center">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-steel-blue">
                                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                                        <path d="M9 9L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        <path d="M15 9L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-2">Industry Expertise</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Like an expert in your pocket, METIS adapts to your industry's unique requirements and scales with your team.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Canvas Animation */}
                    <div className="relative flex justify-center items-center">
                        {/* Light Mode Canvas */}
                        <canvas
                            ref={lightCanvasRef}
                            className="max-w-full dark:hidden"
                        />
                        {/* Dark Mode Canvas */}
                        <canvas
                            ref={darkCanvasRef}
                            className="max-w-full hidden dark:block"
                        />
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-20">
                    <p className="text-muted-foreground italic">
                        From legal compliance to financial operations — METIS adapts to your industry's unique requirements.
                    </p>
                </div>
            </div>
        </section>
    )
}
