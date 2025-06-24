import BlockContainer from '@/app/components/BlockContainer'
import Block from '@/app/components/Block'
import Banner from '@/app/components/Banner'
import Footer from '@/app/components/Footer'

import { get_string } from '@/app/lib/translation'
import LocalSwitch from '@/app/components/LocalSwitch'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Page({ params }: { params: any }) {
  const awaitedParams = typeof params.then === 'function' ? await params : params
  const messages = get_string(awaitedParams.locale)

  return (
    <main>
      <header
        className="p-4 bg-[#b45309] text-white relative z-10"
        style={{ boxShadow: '0 4px 8px rgba(180, 83, 9, 0.3)' }}
      >
        <div className="flex items-center space-x-2">
          <LocalSwitch current={awaitedParams.locale} />
          <span className="text-xl uppercase ml-4">{messages.description}</span>
        </div>
      </header>

<Banner
  text={messages.presen}
  sub_text={messages.presen_sub}
  button_text={messages.action}
  buttonClassName="bg-[#fef3c7] text-[#b45309] font-semibold"
/>

      <BlockContainer>
        <Block
          color="#fef3c7"
          hover="#b45309"
          text={messages.example_project_title}
          src="/vercel.svg"
        />
        <Block
          color="#ffffff"
          hover="#b45309"
          text={messages.example_project_title}
          src="/vercel.svg"
        />
        <Block
          color="#fef3c7"
          hover="#b45309"
          text={messages.example_project_title}
          src="/vercel.svg"
        />
        <Block
          color="#ffffff"
          hover="#b45309"
          text={messages.example_project_title}
          src="/vercel.svg"
        />
        <Block
          color="#ffffff"
          hover="#b45309"
          text={messages.example_project_title}
          src="/vercel.svg"
        />
        <Block
          color="#fef3c7"
          hover="#b45309"
          text={messages.example_project_title}
          src="/vercel.svg"
        />
        <Block
          color="#ffffff"
          hover="#b45309"
          text={messages.example_project_title}
          src="/vercel.svg"
        />
        <Block
          color="#fef3c7"
          hover="#b45309"
          text={messages.example_project_title}
          src="/vercel.svg"
        />
      </BlockContainer>

      <Footer text={messages.footer} />
    </main>
  )
}
