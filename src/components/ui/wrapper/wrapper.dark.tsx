import clsx from 'clsx'
import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

export default function WrapperDark({
  children,
  background,
}: {
  children: ReactNode
  background?: StaticImageData
}) {
  return (
    <section className="w-full px-5">
      <div
        style={{ backgroundImage: `url(${background?.src})`, backgroundPositionY: -100 }}
        className={clsx(
          'bg-dark-bg flex w-full items-center justify-center rounded-xl bg-cover bg-no-repeat py-24',
        )}
      >
        <div className="container w-full">{children}</div>
      </div>
    </section>
  )
}
