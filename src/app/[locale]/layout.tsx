import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import '../globals.css'

import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import Providers from '@/components/Providers'
import { cn } from '@/utils/cn'

import { Toaster } from '@/components/ui/toaster'
import Footer from '@/components/sections/footer/Footer'
import Header from '@/components/sections/header/Header'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  title: 'Berthony Sully | Portfolio',
  description: 'Modern & Minimalist Data Portfolio'
}

type RootLayoutProps = {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default async function RootLayout({
  children,
  params: { locale }
}: RootLayoutProps) {
  const messages = await getMessages()
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          inter.className,
          'flex min-h-screen flex-col font-sans antialiased',
          inter.variable,
          playfair.variable
        )}
      >
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <Header />
            <main className='grow'>{children}</main>
            <Toaster />
            <Footer />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  )
}
