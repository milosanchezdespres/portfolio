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
  params: Promise<{ locale: string }> | { locale: string }
}): Promise<Metadata> {
  const awaitedParams = typeof (params as any).then === "function" ? await params : params
  const t = get_string(awaitedParams.locale)
  return {
    title: t.title,
    description: t.description,
  }
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return <>{children}</>
}
