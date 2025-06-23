import BlockContainer from '@/app/components/BlockContainer'
import Block from '@/app/components/Block'

export default function Page() {
  return (
    <BlockContainer>
      <Block color="#34d399" hover="#ffde00" src="/vercel.svg" />
      <Block color="#f87171" hover="#60a5fa" src="/vercel.svg" />
      <Block color="#60a5fa" hover="#f87171" src="/vercel.svg" />
      <Block color="#ffde00" hover="#f87171" src="/vercel.svg" />
      <Block color="#ffde00" hover="#f87171" src="/vercel.svg" />
      <Block color="#60a5fa" hover="#f87171" src="/vercel.svg" />
      <Block color="#34d399" hover="#ffde00" src="/vercel.svg" />
      <Block color="#f87171" hover="#60a5fa" src="/vercel.svg" />
    </BlockContainer>
  )
}
