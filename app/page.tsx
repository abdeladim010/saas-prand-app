"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
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

      {/* Footer Sections */}
      <FooterSections />

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 text-center text-sm text-muted-foreground">
        <p>PromptStore - Premium AI Prompts for Product Photography</p>
      </footer>
    </div>
  )
}
