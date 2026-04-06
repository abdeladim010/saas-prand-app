import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { ArrowLeft, Sparkles, Sun, Palette } from "lucide-react"

export default function WhyThisWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto max-w-4xl px-4 py-12">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Templates
        </Link>

        <Badge variant="secondary" className="mb-4">The Problem & Solution</Badge>
        <h1 className="text-3xl font-bold tracking-tight mb-4">
          Why Random AI Results Hurt Your Brand
        </h1>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Every time you generate an AI product image, you get a different style. Different lighting. Different mood. 
          This inconsistency makes your brand look unprofessional and confuses customers.
        </p>

        <div className="grid gap-6 md:grid-cols-3 mb-12">
          <div className="rounded-2xl border border-border bg-secondary/20 p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-foreground/5">
              <Sparkles className="h-6 w-6 text-foreground/70" />
            </div>
            <h3 className="font-semibold mb-2">Style Consistency</h3>
            <p className="text-sm text-muted-foreground">
              Every prompt locks the visual style so your product images share the same aesthetic across all generations.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-secondary/20 p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-foreground/5">
              <Sun className="h-6 w-6 text-foreground/70" />
            </div>
            <h3 className="font-semibold mb-2">Lighting Control</h3>
            <p className="text-sm text-muted-foreground">
              Pre-set lighting parameters ensure shadows, highlights, and mood remain identical every time.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-secondary/20 p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-foreground/5">
              <Palette className="h-6 w-6 text-foreground/70" />
            </div>
            <h3 className="font-semibold mb-2">Brand Color Locking</h3>
            <p className="text-sm text-muted-foreground">
              Your brand hex color is embedded into the prompt, keeping your visual identity consistent.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-secondary/30 p-8 text-center">
          <p className="text-muted-foreground mb-4">
            Ready to see the difference consistent prompts can make?
          </p>
          <Link
            href="/before-after"
            className="inline-flex items-center justify-center rounded-xl bg-foreground px-6 py-3 font-medium text-background transition-colors hover:bg-foreground/90"
          >
            View Before / After Examples
          </Link>
        </div>
      </main>
    </div>
  )
}
