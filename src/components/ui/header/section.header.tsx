import { ReactNode } from 'react'
import Badge from '../badge/badge'

export default function SectionHeader({
  varient = 'dark',
  svg,
  semiTitle,
  title,
  alingMent = 'center',
}: {
  varient?: 'dark' | 'light'
  svg: ReactNode
  semiTitle: string
  title: string
  alingMent?: 'left' | 'center' | 'right'
}) {
  switch (varient) {
    case 'dark':
      switch (alingMent) {
        case 'left':
          return (
            <header className="flex flex-col items-start justify-start gap-5">
              <Badge varient="dark" title={semiTitle} icon={svg} />

              <h2 className="h1 max-w-138 text-left text-white">{title}</h2>
            </header>
          )
        case 'center':
          return (
            <header className="flex flex-col items-center justify-center gap-5">
              <Badge varient="dark" title={semiTitle} icon={svg} />

              <h2 className="h1 max-w-138 text-center text-white">{title}</h2>
            </header>
          )
        case 'right':
          return (
            <header className="flex flex-col items-end justify-end gap-5">
              <Badge varient="dark" title={semiTitle} icon={svg} />

              <h2 className="h1 max-w-138 text-end text-white">{title}</h2>
            </header>
          )
      }

    case 'light':
      switch (alingMent) {
        case 'left':
          return (
            <header className="flex flex-col items-start justify-start gap-5">
              <Badge varient="light" title={semiTitle} icon={svg} />

              <h2 className="h1 text-dark max-w-138 text-left">{title}</h2>
            </header>
          )
        case 'center':
          return (
            <header className="flex flex-col items-center justify-center gap-5">
              <Badge varient="light" title={semiTitle} icon={svg} />

              <h2 className="h1 text-dark max-w-138 text-center">{title}</h2>
            </header>
          )
        case 'right':
          return (
            <header className="flex flex-col items-end justify-end gap-5">
              <Badge varient="light" title={semiTitle} icon={svg} />

              <h2 className="h1 text-dark max-w-138 text-end">{title}</h2>
            </header>
          )
      }
  }
}
