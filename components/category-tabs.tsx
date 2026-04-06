"use client"

import { cn } from "@/lib/utils"
import { categories } from "@/lib/templates"

interface CategoryTabsProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex items-center gap-2 px-4 py-4 min-w-max">
        <button
          onClick={() => onCategoryChange("all")}
          className={cn(
            "rounded-full px-5 py-2.5 text-sm font-medium transition-all",
            activeCategory === "all"
              ? "bg-foreground text-background shadow-md"
              : "bg-secondary text-foreground hover:bg-secondary/80"
          )}
        >
          All Templates
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={cn(
              "flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all whitespace-nowrap",
              activeCategory === category.id
                ? "bg-foreground text-background shadow-md"
                : "bg-secondary text-foreground hover:bg-secondary/80"
            )}
          >
            <span>{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
