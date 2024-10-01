import { CornerRightDown } from 'lucide-react'

const Headline = () => {
  return (
    <div className='flex-col justify-center text-wrap font-serif text-xs sm:text-base'>
      <div className='mb-5 flex-col'>
        <p className='text-wrap'>
          I'm a Data Analyst with over 6 years of experience in analyzing
          complex data sets, extracting and transforming data using <b>SQL</b>,{' '}
          <b>Power BI</b>, and <b>Excel</b>. I specialize in converting raw data
          into actionable insights to support informed decision-making. My
          expertise also includes relational database management, data
          visualization, and developing predictive models.
        </p>
      </div>
      <h1 className='mb-3 flex items-center gap-2 text-sm font-bold text-orange-500 dark:text-white sm:text-lg'>
        Here is my journey below...{' '}
        <CornerRightDown className='translate-y-2 transition hover:scale-110' />
      </h1>
    </div>
  )
}

export default Headline
