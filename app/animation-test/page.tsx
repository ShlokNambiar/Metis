"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AnimationTestPage() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        // Set canvas size
        canvas.width = 400
        canvas.height = 400

        let rotation = 0

        // Network nodes in 3D space
        const nodes = [
            { x: 0, y: -80, z: 0 },    // Top
            { x: -60, y: 0, z: 0 },    // Left
            { x: 60, y: 0, z: 0 },     // Right
            { x: 0, y: 80, z: 0 },     // Bottom
            { x: 0, y: 0, z: 0 },      // Center
            { x: 0, y: -40, z: 40 },   // Front top
            { x: -40, y: 20, z: -40 }, // Back left
            { x: 40, y: 20, z: -40 },  // Back right
        ]

        // Connections between nodes
        const connections = [
            [0, 4], [1, 4], [2, 4], [3, 4], // Center connections
            [0, 5], [1, 6], [2, 7], [3, 1], // Outer connections
            [5, 4], [6, 4], [7, 4],         // Additional connections
        ]

        function rotateY(point: { x: number; y: number; z: number }, angle: number) {
            const cos = Math.cos(angle)
            const sin = Math.sin(angle)
            return {
                x: point.x * cos - point.z * sin,
                y: point.y,
                z: point.x * sin + point.z * cos,
            }
        }

        function rotateX(point: { x: number; y: number; z: number }, angle: number) {
            const cos = Math.cos(angle)
            const sin = Math.sin(angle)
            return {
                x: point.x,
                y: point.y * cos - point.z * sin,
                z: point.y * sin + point.z * cos,
            }
        }

        function project(point: { x: number; y: number; z: number }) {
            const scale = 200 / (200 + point.z)
            return {
                x: point.x * scale + canvas.width / 2,
                y: point.y * scale + canvas.height / 2,
                scale: scale,
            }
        }

        function animate() {
            if (!ctx || !canvas) return

            ctx.clearRect(0, 0, canvas.width, canvas.height)

            rotation += 0.01

            // Rotate and project nodes
            const rotatedNodes = nodes.map((node) => {
                let rotated = rotateY(node, rotation)
                rotated = rotateX(rotated, rotation * 0.7)
                return { ...rotated, projected: project(rotated) }
            })

            // Draw connections
            ctx.strokeStyle = "#1359a0"
            ctx.lineWidth = 3
            connections.forEach(([i, j]) => {
                const node1 = rotatedNodes[i]
                const node2 = rotatedNodes[j]

                ctx.beginPath()
                ctx.moveTo(node1.projected.x, node1.projected.y)
                ctx.lineTo(node2.projected.x, node2.projected.y)
                ctx.globalAlpha = 0.6
                ctx.stroke()
                ctx.globalAlpha = 1
            })

            // Draw nodes
            rotatedNodes.forEach((node) => {
                const size = 8 * node.projected.scale
                ctx.fillStyle = "#1359a0"
                ctx.beginPath()
                ctx.arc(node.projected.x, node.projected.y, size, 0, Math.PI * 2)
                ctx.fill()
            })

            requestAnimationFrame(animate)
        }

        animate()
    }, [])

    return (
        <main className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-foreground mb-4">3D Network Animation Test</h1>
                <p className="text-muted-foreground">Rotating multi-agent network visualization</p>
            </div>

            <div className="relative">
                <canvas
                    ref={canvasRef}
                    className="border border-border rounded-lg shadow-lg"
                    style={{ background: "linear-gradient(135deg, rgba(19, 89, 160, 0.05) 0%, rgba(19, 89, 160, 0.1) 100%)" }}
                />
            </div>

            <div className="mt-8 flex gap-4">
                <Link href="/">
                    <Button variant="outline">
                        ← Back to Home
                    </Button>
                </Link>
            </div>

            <div className="mt-8 text-center text-sm text-muted-foreground max-w-md">
                <p>This is a 3D rotating visualization of the METIS multi-agent network architecture.</p>
                <p className="mt-2">Each node represents an AI agent, connected in a dynamic network.</p>
            </div>
        </main>
    )
}
