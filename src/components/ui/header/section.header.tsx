import { ReactNode } from 'react'
import Badge from '../badge/badge'

export default function SectionHeader({
  varient = 'dark',
  svg,
  semiTitle,
  title,
}: {
  varient?: 'dark' | 'light'
  svg: ReactNode
  semiTitle: string
  title: string
}) {
  switch (varient) {
    case 'dark':
      return (
        <header className="flex flex-col items-center justify-center gap-5">
          <Badge varient="dark" title={semiTitle} icon={svg} />

          <h2 className="h1 max-w-138 text-center text-white">{title}</h2>
        </header>
      )
    case 'light':
      return (
        <header className="flex flex-col items-center justify-center gap-5">
          <Badge varient="light" title={semiTitle} icon={svg} />

          <h2 className="h1 max-w-138 text-center text-black">{title}</h2>
        </header>
      )
  }
}
