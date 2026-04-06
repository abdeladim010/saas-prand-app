"use client"

import Link from "next/link"

const navButtons = [
  { href: "/why-this-works", label: "Why This Works" },
  { href: "/before-after", label: "Before / After" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/trust", label: "Trust" },
  { href: "/prompt-library", label: "Prompt Library" },
  { href: "/blog", label: "Blog" },
  { href: "/pricing", label: "Price" },
  { href: "/faq", label: "FAQ" },
  { href: "/start-creating", label: "Start Creating" },
]

export function FooterSections() {
  return (
    <div className="border-t border-border/40 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-2">
          {navButtons.map((btn) => (
            <Link
              key={btn.href}
              href={btn.href}
              className="rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm font-medium text-foreground/80 transition-all hover:bg-secondary hover:text-foreground hover:border-foreground/20"
            >
              {btn.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
