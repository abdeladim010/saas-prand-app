"use client"

import { useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { ArrowLeft } from "lucide-react"

const faqs = [
  {
    question: "Why do my AI-generated images look different every time?",
    answer: "AI models introduce randomness by default. Without locked parameters like seed values, lighting settings, and style anchors, each generation varies. Our prompts lock these variables so every image follows the same visual rules.",
  },
  {
    question: "How does PromptStore fix this inconsistency?",
    answer: "Our prompts include pre-configured style locks, color anchors, lighting presets, and seed values. Simply replace placeholders with your product and brand color, and the AI produces consistent results.",
  },
  {
    question: "Do I need design skills to use these prompts?",
    answer: "Not at all. Our prompts are plug-and-play. Just copy, paste, replace two variables (product name and brand color), and generate. No design experience required.",
  },
  {
    question: "Can I use these prompts for my e-commerce store?",
    answer: "Absolutely. Our prompts are specifically designed for e-commerce sellers, Amazon listings, Shopify stores, social media ads, and product catalogs. Full commercial use is included.",
  },
]

const pageLinks = [
  { href: "/why-this-works", label: "Why This Works", description: "Learn why consistent AI prompts matter for your brand" },
  { href: "/before-after", label: "Before / After", description: "See the visual difference our prompts make" },
  { href: "/how-it-works", label: "How It Works", description: "Simple 3-step process to consistent images" },
  { href: "/trust", label: "Trust", description: "Built for creators who care about quality" },
  { href: "/prompt-library", label: "Prompt Library", description: "Browse templates by industry" },
  { href: "/blog", label: "Blog", description: "Tips and guides for AI product photography" },
  { href: "/pricing", label: "Price", description: "Done-for-you AI branding image packages" },
  { href: "/start-creating", label: "Start Creating", description: "Begin your consistent branding journey" },
]

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

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

        <Badge variant="secondary" className="mb-4">FAQ</Badge>
        <h1 className="text-3xl font-bold tracking-tight mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-muted-foreground mb-8">
          Everything you need to know about consistent AI product images.
        </p>

        <div className="space-y-4 mb-16">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-border bg-secondary/20 overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between p-4 text-left font-medium"
              >
                {faq.question}
                <span className="ml-4 shrink-0 text-xl">
                  {openFaq === idx ? "−" : "+"}
                </span>
              </button>
              {openFaq === idx && (
                <div className="px-4 pb-4 text-sm text-muted-foreground">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Links to Other Pages */}
        <div className="border-t border-border pt-12">
          <h2 className="text-xl font-semibold mb-6">Explore More</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {pageLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl border border-border bg-secondary/20 p-4 transition-colors hover:bg-secondary/40"
              >
                <h3 className="font-medium mb-1">{link.label}</h3>
                <p className="text-sm text-muted-foreground">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
