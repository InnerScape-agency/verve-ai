import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import './globals.css'
import CustomLayout from '@/layout/layout'

// font family
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
})

// all meta details for SEO and website details
export const metadata: Metadata = {
  title: 'Verve AI | AI Interview Assistant for Live Interviews',
  description:
    'Prepare and perform better in live interviews with Verve AI. Real-time AI guidance, undetectable assistance, and powerful tools for job seekers.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body>
        <CustomLayout>{children}</CustomLayout>
      </body>
    </html>
  )
}
