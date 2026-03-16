import { ReactNode } from 'react'

export default function WrapperDark({ children }: { children: ReactNode }) {
  return (
    <section className="w-full px-5">
      <div className="bg-dark-bg flex w-full items-center justify-center rounded-xl py-24">
        <div className="container w-full">{children}</div>
      </div>
    </section>
  )
}
