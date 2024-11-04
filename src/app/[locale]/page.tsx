import Hero from '@/components/sections/hero/Hero'
import { ToolAndStacks } from '@/components/sections/skills/ToolsAndStacks'
import { StackData } from '@/constants/stacksData'

export default function Home() {
  const items = StackData.map(item => ({
    name: item.name,
    imageUrl: item.imageUrl
  }))
  return (
    <section className='py-24'>
      <div className='container max-w-5xl'>
        <Hero />
        {/* <div className=''>
          <ToolAndStacks items={items} />
          <ToolAndStacks items={items} />
        </div> */}
      </div>
    </section>
  )
}
