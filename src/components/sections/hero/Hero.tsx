import Image from 'next/image'
import Picture from '/public/img/picture.jpg'

import { Download } from 'lucide-react'
import { socialMediaLinks } from '@/constants/socials'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex items-center gap-8'>
        <div className='relative flex w-1/3 items-center justify-center'>
          <Image
            className='rounded-full'
            src={Picture}
            alt='my picture'
            quality={90}
            priority
            placeholder='blur'
          />
        </div>

        <div className='flex flex-col gap-3'>
          <h1 className='title no-underline'>
            Hey, I'm{' '}
            <span className='transition hover:text-orange-500'>Berthony</span>
          </h1>
          <h2 className='subtitle text-xl'>
            I'm a Data Analyst based in Montreal, Canada 🇨🇦
          </h2>
          <p className='max-w-[500px] text-sm text-muted-foreground'>
            Welcome to my data portfolio where I share what I've been working on
            recently, things i've learned along the way and my hobbies.
          </p>
          {/* add tag for download functionality */}
          <div className='flex items-center gap-4'>
            <div className='cursor-pointer'>
              <Button
                variant='default'
                size='lg'
                className='hover:bg-orange-500 hover:text-white'
              >
                <a href='/cv/cvbs_en.pdf' className='flex gap-2' download>
                  <span className='capitalize'>download resume</span>
                  <Download size={18} />
                </a>
              </Button>
            </div>
            <div className='flex'>
              <ul className='flex gap-3'>
                {socialMediaLinks.slice(0, 2).map(link => (
                  <li
                    key={link.name}
                    className='flex text-3xl transition hover:scale-[115%] hover:text-orange-500'
                  >
                    {/* TODO : add social media icons */}
                    <a href={link.link} target='_blank'>
                      {link.icon && <link.icon />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='title mt-8 flex justify-center'>
        Tools and stacks I've mastered along the way.
      </div>
    </div>
  )
}

export default Hero
