import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { Pipeline } from "@/components/sections/pipeline"
import { Stack } from "@/components/sections/stack"
import { IndustrySolutions } from "@/components/sections/industry-solutions"
import { CTA } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Features />
      <IndustrySolutions />
      <Pipeline />
      <Stack />
      <CTA />
      <Footer />
    </main>
  )
}
