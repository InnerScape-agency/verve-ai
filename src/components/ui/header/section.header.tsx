import { ReactNode } from 'react'
import Badge from '../badge/badge'

export default function SectionHeader({
  svg,
  semiTitle,
  title,
}: {
  svg: ReactNode
  semiTitle: string
  title: string
}) {
  return (
    <header className="flex flex-col items-center justify-center gap-5">
      <Badge title={semiTitle} icon={svg} />

      <h2 className="h1 max-w-138 text-center text-white">{title}</h2>
    </header>
  )
}
