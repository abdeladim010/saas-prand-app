"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import Link from "next/link"
import { CategoryTabs } from "@/components/category-tabs"
import { TemplateGrid } from "@/components/template-grid"
import { FooterSections } from "@/components/footer-sections"
import { templates } from "@/lib/templates"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredTemplates = useMemo(() => {
    return templates.filter((template) => {
      const matchesCategory =
        activeCategory === "all" || template.category === activeCategory
      const matchesSearch =
        searchQuery === "" ||
        template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [searchQuery, activeCategory])

  return (
    <div className="min-h-screen bg-background">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* Hero Section */}
      <section className="border-b border-border/40 bg-gradient-to-b from-secondary/30 to-background px-4 py-12 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">
          Consistent AI Image Prompts
          <br />
          <span className="text-muted-foreground">for E-commerce</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-pretty">
          Get the same style product images every time. Browse ready-made prompt templates
          designed for consistent branding and professional product photography.
        </p>
      </section>

      {/* Category Tabs */}
      <div className="sticky top-16 z-40 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto">
          <CategoryTabs
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
      </div>

      {/* Template Grid */}
      <main className="container mx-auto py-6">
        <TemplateGrid templates={filteredTemplates} />
      </main>

      {/* Pricing Preview */}
      <section className="border-t border-border/40 px-4 py-12">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-semibold mb-3">Pricing</h2>
          <p className="text-muted-foreground mb-6">Choose a package for consistent AI product images. For the full form, visit Pricing to contact us.</p>

          <div className="grid gap-4 md:grid-cols-3 mb-6">
            <div className="rounded-2xl border border-border bg-secondary/10 p-4">
              <div className="text-2xl font-bold">$29</div>
              <div className="text-sm text-muted-foreground">Starter — 20 images</div>
            </div>
            <div className="rounded-2xl border border-border bg-secondary/10 p-4">
              <div className="text-2xl font-bold">$59</div>
              <div className="text-sm text-muted-foreground">Growth — 40 images</div>
            </div>
            <div className="rounded-2xl border border-border bg-secondary/10 p-4">
              <div className="text-2xl font-bold">$129</div>
              <div className="text-sm text-muted-foreground">Complete — 60 images + custom prompts</div>
            </div>
          </div>

          <Link
            href="/pricing"
            className="inline-block rounded-xl bg-foreground px-6 py-2 text-sm font-medium text-background transition-colors hover:opacity-90"
          >
            Open pricing form / Contact
          </Link>
        </div>
      </section>

      <FooterSections />

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 text-center text-sm text-muted-foreground">
        <p>PromptStore - Premium AI Prompts for Product Photography</p>
      </footer>
    </div>
  )
}
