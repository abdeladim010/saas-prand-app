import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { ArrowLeft, Check } from "lucide-react"

export default function PricingPage() {
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

        <Badge variant="secondary" className="mb-4">Pricing</Badge>
        <h1 className="text-3xl font-bold tracking-tight mb-4">
          Need Ready-Made AI Branding Images?
        </h1>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Let us create professional, consistent product images for your brand. Choose a package that fits your needs.
        </p>

        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {/* $29 Package */}
          <div className="rounded-2xl border border-border bg-secondary/20 p-6">
            <div className="mb-4">
              <span className="text-3xl font-bold">$29</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Starter</h3>
            <p className="text-sm text-muted-foreground mb-6">Perfect for testing or small catalogs</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-sm">
                <Check className="h-5 w-5 text-green-500 shrink-0" />
                <span>20 AI Branding Images</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Check className="h-5 w-5 text-green-500 shrink-0" />
                <span>Ready-made professional shots</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Check className="h-5 w-5 text-green-500 shrink-0" />
                <span>Consistent style across all images</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Check className="h-5 w-5 text-green-500 shrink-0" />
                <span>High resolution files</span>
              </li>
            </ul>
          </div>

          {/* $59 Package */}
          <div className="rounded-2xl border border-border bg-secondary/20 p-6">
            <div className="mb-4">
              <span className="text-3xl font-bold">$59</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Growth</h3>
            <p className="text-sm text-muted-foreground mb-6">Expanded collection for growing brands</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-sm">
                <Check className="h-5 w-5 text-green-500 shrink-0" />
                <span>40 AI Branding Images</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Check className="h-5 w-5 text-green-500 shrink-0" />
                <span>Ready-made professional shots</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Check className="h-5 w-5 text-green-500 shrink-0" />
                <span>Consistent style across all images</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Check className="h-5 w-5 text-green-500 shrink-0" />
                <span>High resolution files</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Check className="h-5 w-5 text-green-500 shrink-0" />
                <span>Multiple angles and scenes</span>
              </li>
            </ul>
          </div>

          {/* $129 Package */}
          <div className="relative rounded-2xl border-2 border-green-500 bg-green-500/5 p-6">
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white hover:bg-green-500 border-0">
              Best Value
            </Badge>
            <div className="mb-4">
              <span className="text-3xl font-bold">$129</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Complete</h3>
            <p className="text-sm text-muted-foreground mb-6">Full package with custom prompts</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-sm">
                <Check className="h-5 w-5 text-green-500 shrink-0" />
                <span>60 AI Branding Images</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Check className="h-5 w-5 text-green-500 shrink-0" />
                <span>10 Custom Prompts for your product</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Check className="h-5 w-5 text-green-500 shrink-0" />
                <span>Ready-made professional shots</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Check className="h-5 w-5 text-green-500 shrink-0" />
                <span>Consistent style across all images</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Check className="h-5 w-5 text-green-500 shrink-0" />
                <span>High resolution files</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Check className="h-5 w-5 text-green-500 shrink-0" />
                <span>Multiple angles and scenes</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Check className="h-5 w-5 text-green-500 shrink-0" />
                <span>Generate unlimited images yourself</span>
              </li>
            </ul>
          </div>
        </div>

        {/* WhatsApp Contact */}
        <div className="rounded-2xl border border-border bg-secondary/30 p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-8 w-8 text-white"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-2">Ready to Order?</h2>
          <p className="text-muted-foreground mb-6">Contact us on WhatsApp to get started with your custom AI branding images.</p>
          <a
            href="https://wa.me/212656434917"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-8 py-3 font-medium text-white transition-colors hover:bg-green-600"
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
      </main>
    </div>
  )
}
