/* eslint-disable @typescript-eslint/no-explicit-any */

import type { Metadata } from "next"
import '@/app/globals.css'
import { get_string } from '@/app/lib/translation'

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const awaitedParams = typeof params.then === "function" ? await params : params
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
  params: any
}) {
  const awaitedParams = typeof params.then === "function" ? await params : params

  return (
      <div lang={awaitedParams.locale}>{children}</div>
  )
}
