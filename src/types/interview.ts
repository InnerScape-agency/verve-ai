import { StaticImageData } from 'next/image'

export interface Interview {
  image: StaticImageData
  title: string
  description: string
  link: string
}
