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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const awaitedParams = await params
  const t = get_string(awaitedParams.locale)
  return {
    title: t.title,
    description: t.description,
  }
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const awaitedParams = await params

  return (
    <html lang={awaitedParams.locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
