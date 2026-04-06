"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import type { Template } from "@/lib/templates"

interface TemplateCardProps {
  template: Template
}

export function TemplateCard({ template }: TemplateCardProps) {
  return (
    <Link href={`/template/${template.id}`} className="group block">
      <div className="relative overflow-hidden rounded-2xl bg-secondary/30 transition-all duration-300 hover:shadow-xl hover:shadow-black/10">
        <div className="relative aspect-[9/16] overflow-hidden">
          <Image
            src={template.image}
            alt={template.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          
          {/* Badges */}
          <div className="absolute left-3 top-3 flex flex-col gap-2">
            {template.isTrending && (
              <Badge className="bg-amber-500 text-white hover:bg-amber-500 border-0">
                Trending
              </Badge>
            )}
            {template.isNew && (
              <Badge className="bg-emerald-500 text-white hover:bg-emerald-500 border-0">
                New
              </Badge>
            )}
          </div>

          {/* Get Prompt Button */}
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
            <button className="w-full rounded-xl bg-white py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90">
              Get Prompt
            </button>
          </div>
        </div>

        {/* Card Footer */}
        <div className="p-4">
          <h3 className="font-semibold text-foreground">{template.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
            {template.description}
          </p>
        </div>
      </div>
    </Link>
  )
}
