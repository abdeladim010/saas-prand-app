"use client"

import { Search, Sparkles } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"

interface HeaderProps {
  searchQuery: string
  onSearchChange: (query: string) => void
}

export function Header({ searchQuery, onSearchChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground">
            <Sparkles className="h-5 w-5 text-background" />
          </div>
          <span className="text-xl font-semibold tracking-tight">PromptStore</span>
        </Link>

        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search prompts..."
            className="pl-10 bg-secondary/50 border-0 focus-visible:ring-1"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>
    </header>
  )
}
