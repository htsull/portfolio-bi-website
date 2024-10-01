import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { cn } from '@/lib/utils'
import { timelineData } from '@/constants/timeline-data'
import Link from 'next/link'
import { Button } from './ui/button'
import { Calendar, MapPin, SquareArrowOutUpRight } from 'lucide-react'

const TimelineItem = () => {
  return (
    <div className=''>
      {timelineData.map(item => (
        <Accordion key={item.id} type='single' collapsible className='w-full'>
          <AccordionItem
            key={item.id}
            value={`item-${item.id}`}
            className={cn(
              'px-2 hover:bg-gray-100 dark:hover:bg-gray-900',
              `${item.id === 1 && 'rounded-t-lg'} ${item.id === timelineData.length && 'rounded-b-lg'}`
            )}
          >
            <AccordionTrigger className=''>
              <div className='timeline-title mr-4 flex flex-1 justify-between text-xs sm:text-base'>
                <div className='flex items-center'>
                  {item.icon && <item.icon size={24} className='mr-2' />}
                  <div className='flex flex-col items-baseline'>
                    <h1>{item.company}</h1>
                    <h2>{item.title}</h2>
                  </div>
                </div>
                <div className='hidden flex-col items-end font-serif sm:flex sm:text-base'>
                  <div className='flex items-center gap-2'>
                    <Calendar size={16} />
                    {item.period}
                  </div>
                  <div className='flex items-center gap-2'>
                    <MapPin size={16} />
                    {item.location}
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className=''>
              <ul className='timeline-detail'>
                {Object.entries(item.detail).map(([key, value]) => (
                  <li key={key} className='timeline-detail'>
                    {value}
                  </li>
                ))}
              </ul>
              {item.button && item.href && (
                <Link href={item.href} passHref legacyBehavior>
                  <a target='_blank'>
                    <Button className='ml-6 mt-2 gap-2 text-xs hover:bg-orange-500 hover:text-white'>
                      {item.buttonText} <SquareArrowOutUpRight size={16} />
                    </Button>
                  </a>
                </Link>
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  )
}

export default TimelineItem
