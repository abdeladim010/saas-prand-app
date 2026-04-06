import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { ArrowLeft } from "lucide-react"

const blogPosts = [
  {
    title: "Why Your AI Product Images Look Different Every Time (And How to Fix It)",
    description: "Learn the science behind AI inconsistency and the simple solution.",
  },
  {
    title: "The Ultimate Guide to Consistent AI Product Photography for E-commerce",
    description: "Step-by-step methods to create branded, cohesive product visuals.",
  },
  {
    title: "5 Prompt Templates That Will Transform Your Product Branding",
    description: "Ready-to-use prompts for professional-looking images every time.",
  },
]

export default function BlogPage() {
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

        <Badge variant="secondary" className="mb-4">Latest Articles</Badge>
        <h1 className="text-3xl font-bold tracking-tight mb-4">
          Learn AI Product Photography
        </h1>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Tips, guides, and strategies to master consistent AI-generated product images.
        </p>

        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {blogPosts.map((post, idx) => (
            <article key={idx} className="rounded-2xl border border-border bg-secondary/20 p-6">
              <h3 className="font-semibold mb-2 line-clamp-2">{post.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{post.description}</p>
              <span className="text-sm font-medium text-foreground/70 hover:text-foreground cursor-pointer">
                Read more &rarr;
              </span>
            </article>
          ))}
        </div>

        <div className="rounded-2xl border border-border bg-secondary/30 p-8 text-center">
          <p className="text-muted-foreground mb-4">
            Want to see consistent prompts in action?
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
