import GridBackground from '@/components/GridBackground'
import Hero from '@/components/Hero'
import { ToolAndStacks } from '@/components/ToolsAndStacks'
import { StackData } from '@/constants/stacksData'

export default function Home() {
  const items = StackData.map(item => ({
    name: item.name,
    imageUrl: item.imageUrl
  }))
  return (
    <section className='py-24'>
      <div className='container max-w-5xl items-center'>
        <Hero />
        <div className='h-auto'>
          {/* <GridBackground /> */}
          <ToolAndStacks items={items} />
          {/* <button className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-white'>
            <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ef4444_0%,#fb923c_50%,#fFF_100%)]' />
            <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-900 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl'>
              Border Magic
            </span>
          </button> */}
        </div>
      </div>
    </section>
  )
}
