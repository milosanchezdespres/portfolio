import BlockContainer from '@/app/components/BlockContainer'
import Block from '@/app/components/Block'
import { get_string } from '@/app/lib/translation'
import LocalSwitch from '@/app/components/LocalSwitch'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Page({ params }: { params: any }) {
  const awaitedParams = typeof params.then === 'function' ? await params : params
  const messages = get_string(awaitedParams.locale)
  
  return (
    <main>
      <header className="p-4">
        <LocalSwitch current={awaitedParams.locale} />
      </header>

      <BlockContainer>
        <Block color="#34d399" hover="#ffde00" text={messages.example_project_title} src="/vercel.svg" />
        <Block color="#f87171" hover="#60a5fa" text={messages.example_project_title} src="/vercel.svg" />
        <Block color="#60a5fa" hover="#f87171" text={messages.example_project_title} src="/vercel.svg" />
        <Block color="#ffde00" hover="#f87171" text={messages.example_project_title} src="/vercel.svg" />
        <Block color="#ffde00" hover="#f87171" text={messages.example_project_title} src="/vercel.svg" />
        <Block color="#60a5fa" hover="#f87171" text={messages.example_project_title} src="/vercel.svg" />
        <Block color="#34d399" hover="#ffde00" text={messages.example_project_title} src="/vercel.svg" />
        <Block color="#f87171" hover="#60a5fa" text={messages.example_project_title} src="/vercel.svg" />
      </BlockContainer>
    </main>
  )
}
