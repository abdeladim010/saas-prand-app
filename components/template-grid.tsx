"use client"

import { TemplateCard } from "@/components/template-card"
import type { Template } from "@/lib/templates"

interface TemplateGridProps {
  templates: Template[]
}

export function TemplateGrid({ templates }: TemplateGridProps) {
  if (templates.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-xl font-semibold">No templates found</h3>
        <p className="mt-2 text-muted-foreground">
          Try adjusting your search or category filter
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-4 px-4 pb-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {templates.map((template) => (
        <TemplateCard key={template.id} template={template} />
      ))}
    </div>
  )
}
