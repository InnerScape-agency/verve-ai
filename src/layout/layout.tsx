/**
 * Layout component that wraps the entire application.
 * Provides a consistent page structure with Navbar, main content area, and Footer.
 * Can be extended with additional providers as needed.
 */

import Footer from '@/components/footer/footer'
import Navbar from '@/components/navbar/navbar'
import ReduxProvider from '@/providers/redux.provider'
import { ReactNode } from 'react'

type Children = Readonly<{
  children: ReactNode
}>

export default function CustomLayout({ children }: Children) {
  return (
    <ReduxProvider>
      <section id="page-wrapper">
        {/* navbar */}
        <Navbar />

        {/* main tag */}
        <main>{children}</main>

        {/* footer */}
        <Footer />
      </section>
    </ReduxProvider>
  )
}
