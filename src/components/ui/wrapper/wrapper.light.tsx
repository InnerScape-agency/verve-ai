import { ReactNode } from 'react'

export default function WrapperLight({ children }: { children: ReactNode }) {
  return (
    <section className="flex w-full max-w-350 items-center justify-center rounded-xl py-24">
      <div className="container">{children}</div>
    </section>
  )
}
