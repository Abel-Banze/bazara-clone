import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Bottombar, Headbar } from '@/components'
import Provider from '@/context/Provider'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bazara Clone',
  description: 'Vodacom Bazara clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Headbar />
          {children}
          <Bottombar />
        </Provider>
      </body>
    </html>
  )
}
