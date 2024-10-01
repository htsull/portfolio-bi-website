import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import { useLocale } from 'next-intl'

const Header = () => {
  const locale = useLocale()

  return (
    <div className='container sticky top-0 flex max-w-5xl border-b-2 bg-background px-10 dark:bg-background'>
      <div className='flex'>
        <Link
          href={`/${locale}`}
          className='font-serif text-3xl font-bold hover:text-orange-500'
        >
          BS
        </Link>
      </div>
      <nav className='mx-auto flex items-center gap-16'>
        <ul className='navlinks'>
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
      <div className='flex'>
        <ThemeToggle />
      </div>
      {/* //TODO : Add sheet for responsiveness, already installed */}
    </div>
  )
}

export default Header
