import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { ArrowLeft, CheckCircle2 } from "lucide-react"

export default function BeforeAfterPage() {
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

        <Badge variant="secondary" className="mb-4">Visual Comparison</Badge>
        <h1 className="text-3xl font-bold tracking-tight mb-4">
          From Random Chaos to Branded Excellence
        </h1>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          See the difference consistent prompts make for your product photography.
        </p>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          {/* Before */}
          <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-6">
            <h3 className="font-semibold text-red-600 mb-4 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/20 text-xs">X</span>
              Without PromptStore
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                Every image looks different
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                Inconsistent lighting and shadows
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                Brand colors shift randomly
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                Unprofessional, scattered aesthetic
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                Confuses customers, hurts trust
              </li>
            </ul>
          </div>

          {/* After */}
          <div className="rounded-2xl border border-green-500/30 bg-green-500/5 p-6">
            <h3 className="font-semibold text-green-600 mb-4 flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6" />
              With PromptStore
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-green-500" />
                Every image follows the same style
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-green-500" />
                Controlled, professional lighting
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-green-500" />
                Brand colors stay locked
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-green-500" />
                Cohesive, premium brand look
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-green-500" />
                Builds trust, increases conversions
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Your brand deserves consistency. Your customers expect it.
          </p>
          <Link
            href="/how-it-works"
            className="inline-flex items-center justify-center rounded-xl bg-foreground px-6 py-3 font-medium text-background transition-colors hover:bg-foreground/90"
          >
            See How It Works
          </Link>
        </div>
      </main>
    </div>
  )
}
