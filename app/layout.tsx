import NavBar from '@/components/Hero';
import './globals.css'
import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google';

const work_sans = Work_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-work_sans',
})

export const metadata: Metadata = {
  title: 'Ysl Ron Hepos Portfolio',
  description: 'Ysl Ron Hepos is a designer specializing in UI/UX and Graphic Design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={work_sans.className}>
        {children}
      </body>
    </html>
  )
}