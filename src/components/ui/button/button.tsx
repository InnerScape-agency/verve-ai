import Link from 'next/link'
import { ReactNode } from 'react'

interface IButton {
  varient?: 'light' | 'dark' | 'transparent'
  children: ReactNode
  link?: string
  className?: string
}

export default function Button({ varient = 'light', children, link = '/', className }: IButton) {
  switch (varient) {
    case 'dark':
      return (
        <Link href={link}>
          <button
            className={`font-inter bg-dark hover:border-dark-200 hover:text-dark flex cursor-pointer items-center gap-1.5 rounded-lg px-5 py-4 text-base font-medium text-white transition-all hover:bg-white ${className}`}
          >
            {children}
          </button>
        </Link>
      )
    case 'light':
      return (
        <Link href={link}>
          <button
            className={`font-inter text-dark hover:bg-dark border-dark-200 flex cursor-pointer items-center gap-1.5 rounded-lg border bg-white px-5 py-4 text-base font-medium transition-all hover:border-transparent hover:text-white ${className}`}
          >
            {children}
          </button>
        </Link>
      )
    case 'transparent':
      return (
        <Link href={link}>
          <button
            className={
              'font-inter border-dark-200 hover:text-dark flex cursor-pointer items-center gap-1.5 rounded-lg border bg-transparent px-5 py-4 text-base font-medium text-white transition-all hover:border-transparent hover:bg-white ' +
              className
            }
          >
            {children}
          </button>
        </Link>
      )
  }
}
