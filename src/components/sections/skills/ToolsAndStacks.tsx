'use client'

import { cn } from '@/lib/utils'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

export const ToolAndStacks = ({
  items,
  direction = 'left',
  speed = 'normal',
  pauseOnHover = true,
  className
}: {
  items: {
    name: string
    imageUrl: string
  }[]
  direction?: 'left' | 'right'
  speed?: 'fast' | 'normal' | 'slow'
  pauseOnHover?: boolean
  className?: string
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLUListElement>(null)

  useEffect(() => {
    addAnimation()
  }, [])
  const [start, setStart] = useState(false)
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards'
        )
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse'
        )
      }
    }
  }
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s')
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s')
      } else {
        containerRef.current.style.setProperty('--animation-duration', '150s')
      }
    }
  }
  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller dark:bg-grid-white/[0.2] bg-grid-orange-500/[.150] [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'z-20 flex w-max min-w-full shrink-0 flex-nowrap items-baseline gap-10 py-8',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {items.map((item, idx) => (
          <li className='relative gap-2' key={idx}>
            {
              //TODO : find out what happen with the height of the images
              <div className='flex flex-col items-center justify-center gap-2'>
                <Image
                  src={item.imageUrl}
                  height={60}
                  width={60}
                  alt={item.name}
                  className='items-baseline justify-center'
                />
                <p className='text-wrap text-sm font-semibold'>{item.name}</p>
              </div>
            }
          </li>
        ))}
      </ul>
    </div>
  )
}
