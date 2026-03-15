import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

export interface Sepcialized {
  id: string
  title: string
  description: string
  image: StaticImageData
  link: string
  icon: ReactNode
}
