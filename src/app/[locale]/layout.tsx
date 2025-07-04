import type { Metadata } from "next"
import '@/app/globals.css'
import { get_string } from '@/app/lib/translation'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any
}) {
  const awaitedParams = typeof params.then === "function" ? await params : params

  return (
      <div lang={awaitedParams.locale}>{children}</div>
  )
}
