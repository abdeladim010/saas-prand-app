import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { ArrowLeft } from "lucide-react"

const categories = [
  { name: "Beauty", count: 24 },
  { name: "Fitness", count: 18 },
  { name: "Skincare", count: 32 },
  { name: "Food", count: 21 },
  { name: "Fashion", count: 28 },
  { name: "Tech", count: 15 },
]

export default function PromptLibraryPage() {
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

        <Badge variant="secondary" className="mb-4">Free Resource</Badge>
        <h1 className="text-3xl font-bold tracking-tight mb-4">
          Explore Our Prompt Library
        </h1>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Browse templates organized by industry. Find the perfect style for your product niche.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 mb-12">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href="/"
              className="flex items-center justify-between rounded-2xl border border-border bg-secondary/20 p-4 transition-colors hover:bg-secondary/40"
            >
              <span className="font-medium">{cat.name}</span>
              <Badge variant="secondary">{cat.count} prompts</Badge>
            </Link>
          ))}
        </div>

        <div className="rounded-2xl border border-border bg-secondary/30 p-8 text-center">
          <p className="text-muted-foreground mb-4">
            Ready to explore all our prompt templates?
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-foreground px-6 py-3 font-medium text-background transition-colors hover:bg-foreground/90"
          >
            View All Templates
          </Link>
        </div>
      </main>
    </div>
  )
}
