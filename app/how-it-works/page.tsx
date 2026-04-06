import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { ArrowLeft } from "lucide-react"

export default function HowItWorksPage() {
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

        <Badge variant="secondary" className="mb-4">Simple Process</Badge>
        <h1 className="text-3xl font-bold tracking-tight mb-4">
          Three Steps to Consistent Product Images
        </h1>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          No design skills needed. No complex settings. Just copy, paste, and generate.
        </p>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-foreground text-background text-2xl font-bold">
              1
            </div>
            <h3 className="font-semibold mb-2">Choose a Template</h3>
            <p className="text-sm text-muted-foreground">
              Browse our library and select a style that fits your brand aesthetic.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-foreground text-background text-2xl font-bold">
              2
            </div>
            <h3 className="font-semibold mb-2">Add Your Details</h3>
            <p className="text-sm text-muted-foreground">
              Replace [PRODUCT] with your item and [COLOR] with your brand hex code.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-foreground text-background text-2xl font-bold">
              3
            </div>
            <h3 className="font-semibold mb-2">Generate Images</h3>
            <p className="text-sm text-muted-foreground">
              Paste into any AI tool and get consistent, branded results every time.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-secondary/30 p-8 text-center">
          <p className="text-muted-foreground mb-4">
            Ready to start creating consistent product images?
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
