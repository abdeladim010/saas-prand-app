import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { ArrowLeft, ShoppingBag, Users, Building2, Zap, Clock, Target } from "lucide-react"

export default function TrustPage() {
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

        <Badge variant="secondary" className="mb-4">Built For You</Badge>
        <h1 className="text-3xl font-bold tracking-tight mb-4">
          Trusted by Creators Who Care About Quality
        </h1>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Whether you sell on Amazon, run a Shopify store, or create content, these prompts are designed for you.
        </p>

        <div className="grid gap-6 md:grid-cols-3 mb-12">
          <div className="flex items-start gap-4 rounded-2xl border border-border bg-secondary/20 p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-foreground/5">
              <ShoppingBag className="h-6 w-6 text-foreground/70" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">E-commerce Sellers</h3>
              <p className="text-sm text-muted-foreground">Amazon, Shopify, Etsy, and marketplace sellers.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-border bg-secondary/20 p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-foreground/5">
              <Users className="h-6 w-6 text-foreground/70" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Content Creators</h3>
              <p className="text-sm text-muted-foreground">Influencers, social media managers, and marketers.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-border bg-secondary/20 p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-foreground/5">
              <Building2 className="h-6 w-6 text-foreground/70" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Agencies</h3>
              <p className="text-sm text-muted-foreground">Design studios and marketing agencies.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 rounded-full bg-secondary/50 border border-border px-4 py-2">
            <Zap className="h-4 w-4 text-foreground/70" />
            <span className="text-sm">No design skills needed</span>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-secondary/50 border border-border px-4 py-2">
            <Clock className="h-4 w-4 text-foreground/70" />
            <span className="text-sm">Fast and reliable</span>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-secondary/50 border border-border px-4 py-2">
            <Target className="h-4 w-4 text-foreground/70" />
            <span className="text-sm">Consistent results</span>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-secondary/30 p-8 text-center">
          <p className="text-muted-foreground mb-4">
            Join thousands of creators using consistent AI prompts.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-foreground px-6 py-3 font-medium text-background transition-colors hover:bg-foreground/90"
          >
            Browse Templates
          </Link>
        </div>
      </main>
    </div>
  )
}
