import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'PromptStore - Consistent AI Image Prompts for E-commerce',
  description: 'Get the same style product images every time. Premium AI prompt templates for consistent branding and professional product photography.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/prand-ready-prompt-AI-generated-image-product.webp',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/prand-ready-prompt-AI-generated-image-product.webp',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/prand-ready-prompt-AI-generated-image-product.webp',
        type: 'image/svg+xml',
      },
    ],
    apple: '/prand-ready-prompt-AI-generated-image-product.webp',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
