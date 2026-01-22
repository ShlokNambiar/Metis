"use client"

import { useEffect, useRef } from "react"

export function NetworkBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        // Set canvas to full size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resizeCanvas()
        window.addEventListener("resize", resizeCanvas)

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
            const scale = 300 / (300 + point.z)
            return {
                x: point.x * scale + canvas.width / 2,
                y: point.y * scale + canvas.height / 2,
                scale: scale,
            }
        }

        function animate() {
            if (!ctx || !canvas) return

            ctx.clearRect(0, 0, canvas.width, canvas.height)

            rotation += 0.005 // Slower rotation for background

            // Rotate and project nodes
            const rotatedNodes = nodes.map((node) => {
                let rotated = rotateY(node, rotation)
                rotated = rotateX(rotated, rotation * 0.7)
                return { ...rotated, projected: project(rotated) }
            })

            // Draw connections with low opacity
            ctx.strokeStyle = "#1359a0"
            ctx.lineWidth = 2
            connections.forEach(([i, j]) => {
                const node1 = rotatedNodes[i]
                const node2 = rotatedNodes[j]

                ctx.beginPath()
                ctx.moveTo(node1.projected.x, node1.projected.y)
                ctx.lineTo(node2.projected.x, node2.projected.y)
                ctx.globalAlpha = 0.15
                ctx.stroke()
            })

            // Draw nodes with low opacity
            ctx.globalAlpha = 0.2
            rotatedNodes.forEach((node) => {
                const size = 10 * node.projected.scale
                ctx.fillStyle = "#1359a0"
                ctx.beginPath()
                ctx.arc(node.projected.x, node.projected.y, size, 0, Math.PI * 2)
                ctx.fill()
            })

            ctx.globalAlpha = 1

            requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener("resize", resizeCanvas)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full opacity-40"
            style={{ pointerEvents: "none" }}
        />
    )
}
