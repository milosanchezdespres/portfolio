import type { Metadata } from "next"
import { Geist } from "next/font/google"
import '@/app/globals.css'
import { get_string } from '@/app/lib/translation'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = get_string(params.locale)
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
  params: { locale: string }
}) {
  return (
    <html lang={params.locale}>
      <body className={geistSans.variable + " antialiased"}>
        {children}
      </body>
    </html>
  )
}
