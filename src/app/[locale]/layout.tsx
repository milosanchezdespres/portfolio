import type { Metadata } from "next"
import type { LayoutProps } from "next/app-router"
import { Geist, Geist_Mono } from "next/font/google"
import '@/app/globals.css'

import { get_string } from '@/app/lib/translation'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = get_string(params.locale)
  return {
    title: t.title,
    description: t.description,
  }
}

export default function RootLayout({ children, params }: LayoutProps) {
  return (
    <html lang={params.locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
