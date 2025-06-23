import type { Metadata } from "next"
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

// @ts-expect-error Ignore Next.js params typing bug
export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  // Await if params is Promise-like, else just use it
  const awaitedParams = typeof params.then === "function" ? await params : params
  const t = get_string(awaitedParams.locale)
  return {
    title: t.title,
    description: t.description,
  }
}

// @ts-expect-error Ignore Next.js params typing bug
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: any
}) {
  const awaitedParams = typeof params.then === "function" ? await params : params

  return (
    <html lang={awaitedParams.locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
