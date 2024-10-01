import Headline from '@/components/Headline'
import Timeline from '@/components/Timeline'

const about = () => {
  return (
    <div className='container max-w-5xl px-10 py-16'>
      <h1 className='mb-2 font-serif text-xl font-bold text-orange-500 dark:text-white sm:text-3xl'>
        About me
      </h1>
      <Headline />
      <Timeline />
    </div>
  )
}

export default about
