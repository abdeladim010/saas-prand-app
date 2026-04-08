"use client"

import { use, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Copy, Lock, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { templates, categories } from "@/lib/templates"
import { cn } from "@/lib/utils"

interface TemplatePageProps {
  params: Promise<{ id: string }>
}

export default function TemplatePage({ params }: TemplatePageProps) {
  const { id } = use(params)
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [copied, setCopied] = useState(false)

  const template = templates.find((t) => t.id === id)

  if (!template) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Template not found</h1>
          <Link href="/" className="mt-4 text-primary underline">
            Go back home
          </Link>
        </div>
      </div>
    )
  }

  const category = categories.find((c) => c.id === template.category)

  const handleCopyPrompt = async () => {
    await navigator.clipboard.writeText(template.prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const blurredPrompt = template.prompt
    .split("\n")
    .slice(0, 4)
    .join("\n")
    .concat("\n\n[... prompt continues ...]")

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center px-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to templates</span>
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground">
              <Sparkles className="h-5 w-5 text-background" />
            </div>
            <span className="text-xl font-semibold tracking-tight">PromptStore</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="sticky top-24">
              <div className="relative aspect-[3/4] max-h-[70vh] w-full max-w-md mx-auto overflow-hidden rounded-3xl bg-secondary/30">
                <Image
                  src={template.image}
                  alt={template.title}
                  fill
                  className="object-cover"
                  priority
                />
                {/* Badges */}
                <div className="absolute left-4 top-4 flex flex-col gap-2">
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
              </div>
            </div>
          </div>

          {/* Right Side - Details */}
          <div className="flex flex-col gap-6">
            {/* Category Badge */}
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="gap-1.5 px-3 py-1.5">
                <span>{category?.icon}</span>
                <span>{category?.name}</span>
              </Badge>
            </div>

            {/* Title & Description */}
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {template.title}
              </h1>
              <p className="mt-3 text-lg text-muted-foreground">
                {template.description}
              </p>
            </div>

            {/* Prompt Preview */}
            <div className="relative overflow-hidden rounded-2xl border border-border bg-secondary/30">
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <span className="text-sm font-medium">AI Prompt</span>
                {!isUnlocked && (
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Lock className="h-3.5 w-3.5" />
                    <span>Locked</span>
                  </div>
                )}
              </div>
              <div className="relative p-4">
                <pre
                  className={cn(
                    "whitespace-pre-wrap font-mono text-sm leading-relaxed text-foreground/80",
                    !isUnlocked && "select-none"
                  )}
                >
                  {isUnlocked ? template.prompt : blurredPrompt}
                </pre>
                {!isUnlocked && (
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/95 to-transparent" />
                )}
              </div>
            </div>

            {/* Action Section */}
            {!isUnlocked ? (
              <div className="rounded-2xl border border-border bg-secondary/30 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold">${template.price}</p>
                    <p className="text-sm text-muted-foreground">One-time payment</p>
                  </div>
                  <Button
                    size="lg"
                    className="gap-2 rounded-xl px-6"
                    onClick={() => setIsUnlocked(true)}
                  >
                    <Lock className="h-4 w-4" />
                    Unlock Full Prompt
                  </Button>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>Pay once and copy this prompt instantly</span>
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  Payment processed via PayPal - ab.bentabka@gmail.com
                </p>
              </div>
            ) : (
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-emerald-600">Prompt Unlocked!</p>
                      <p className="text-sm text-muted-foreground">
                        Copy and use in AI One-time payment $2.99 PayPal - ab.bentabka@gmail.com
                      </p>
                    </div>
                  </div>
                  <Button
                    size="lg"
                    className="gap-2 rounded-xl bg-emerald-500 px-6 hover:bg-emerald-600"
                    onClick={handleCopyPrompt}
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        Copy Prompt
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )}

            {/* Usage Tips */}
            <div className="rounded-2xl border border-border bg-secondary/30 p-6">
              <h3 className="font-semibold">How to use this prompt</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground/50" />
                  Replace [PRODUCT] with your product name (e.g., hair oil bottle)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground/50" />
                  Replace [COLOR] with your brand hex color (e.g., #FF5733)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground/50" />
                  Keep the [SEED] number consistent for same-style results
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground/50" />
                  Works with Midjourney, DALL-E, Stable Diffusion, and more
                </li>
              </ul>
            </div>

            {/* Done-For-You Service */}
            <div className="rounded-2xl border border-border bg-gradient-to-br from-secondary/50 to-secondary/20 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6 text-white"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Need Ready-Made AI Branding Images?</h3>
                  <p className="text-sm text-muted-foreground">Let us create professional product images for you</p>
                </div>
              </div>

              <div className="space-y-3">
                {/* $29 Package */}
                <div className="flex items-center justify-between rounded-xl border border-border bg-background/50 p-4">
                  <div>
                    <p className="font-semibold">20 AI Branding Images</p>
                    <p className="text-sm text-muted-foreground">Ready-made professional product shots</p>
                  </div>
                  <span className="text-xl font-bold">$29</span>
                </div>

                {/* $59 Package */}
                <div className="flex items-center justify-between rounded-xl border border-border bg-background/50 p-4">
                  <div>
                    <p className="font-semibold">40 AI Branding Images</p>
                    <p className="text-sm text-muted-foreground">Expanded collection for your brand</p>
                  </div>
                  <span className="text-xl font-bold">$59</span>
                </div>

                {/* $129 Package */}
                <div className="relative flex items-center justify-between rounded-xl border-2 border-green-500 bg-green-500/5 p-4">
                  <Badge className="absolute -top-2.5 left-4 bg-green-500 text-white hover:bg-green-500 border-0">
                    Best Value
                  </Badge>
                  <div>
                    <p className="font-semibold">60 AI Branding Images + 10 Prompts</p>
                    <p className="text-sm text-muted-foreground">Complete package with custom prompts for your product</p>
                  </div>
                  <span className="text-xl font-bold">$129</span>
                </div>
              </div>

              {/* WhatsApp Contact */}
              <a
                href="https://wa.me/212656434917"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-green-500 px-6 py-3 font-medium text-white transition-colors hover:bg-green-600"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Contact on WhatsApp: +212 656-434917
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 text-center text-sm text-muted-foreground">
        <p>PromptStore - Premium AI Prompts for Product Photography</p>
      </footer>
    </div>
  )
}
