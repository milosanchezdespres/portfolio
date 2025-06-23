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

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = get_string(params.locale)
  return {
    title: t.title,
    description: t.description,
  }
}

type AwaitedParams = Promise<{ locale: string }>

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: AwaitedParams
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
