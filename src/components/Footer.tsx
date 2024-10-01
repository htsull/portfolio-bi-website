import { socialMediaLinks } from '@/constants/socials'
import { useLocale } from 'next-intl'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  const locale = useLocale()

  return (
    <div className='flex max-w-3xl flex-col items-center justify-center gap-4 border-t py-16 sm:container'>
      <div className='flex'>
        <nav className='navlinks mx-auto items-center gap-16'>
          <ul className='flex gap-6 font-semibold capitalize leading-tight'>
            <li className='transition hover:text-orange-500'>
              <Link href={`/${locale}/about`}>about me</Link>
            </li>
            <li className='transition hover:text-orange-500'>
              <Link href={`/${locale}/projects`}>projects</Link>
            </li>
            <li className='transition hover:text-orange-500'>
              <Link href={`/${locale}/contact`}>contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className='flex'>
        <ul className='flex gap-7'>
          {socialMediaLinks.map(link => (
            <li key={link.name} className='flex text-3xl hover:text-orange-500'>
              {/* TODO : add social media icons */}
              <a href={link.link} target='_blank'>
                {link.icon && <link.icon />}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex flex-col items-center text-sm font-normal'>
        <p>Design with ❤️ and passion by me.</p>
        <p className='text-xs text-muted-foreground'>
          Last update Sep 15, 2024.
        </p>
      </div>
    </div>
  )
}

export default Footer
