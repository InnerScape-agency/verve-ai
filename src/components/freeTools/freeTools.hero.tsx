import { ChevronRight } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import HeroBg from '@/assets/gradient/Hero.png'
import clsx from 'clsx'
import Link from 'next/link'

interface FreeToolsHero {
  badgeSemiTitle: string
  heading: string
  description: string
  heroImage: StaticImageData
  width?: string
  desWidth?: string
  imageHeight?: string
  btnText: string
  btnLink: string
}

export default function FreeToolsHero({
  badgeSemiTitle,
  heading,
  description,
  heroImage,
  width,
  desWidth,
  imageHeight,
  btnText,
  btnLink,
}: FreeToolsHero) {
  return (
    <section
      style={{ backgroundImage: `url(${HeroBg.src})`, backgroundSize: `100% 100%` }}
      className="h-fit w-full bg-cover bg-no-repeat py-49 pb-20"
    >
      {/* container */}
      <div className="container flex flex-col items-center justify-center">
        {/* top content */}
        <div className="mb-15 flex flex-col items-center justify-center">
          {/* badge */}
          <div className="animate-gradient inline-flex items-center rounded-md bg-linear-to-r from-white via-[#FC632F] via-75% to-white p-px">
            <div className="flex items-center gap-1 rounded-md bg-white p-1.5 pr-3">
              {/* text */}
              <p className="font-inter text-dark text-sm font-normal">{badgeSemiTitle}</p>
            </div>
          </div>

          {/* content */}
          <div className="mt-5 mb-8 flex flex-col items-center gap-4">
            {/* title */}
            <h1 className={clsx('d2 text-center', width ? width : 'max-w-180')}>{heading}</h1>

            {/* description */}
            <p className={clsx('body-lg text-center', desWidth ? desWidth : 'max-w-130.5')}>
              {description}
            </p>
          </div>

          {/* actios */}
          <Link href={btnLink}>
            <button className="font-inter text-dark bg-primary flex cursor-pointer items-center gap-1.5 rounded-lg px-6 py-4 text-base font-medium">
              {btnText} <ChevronRight width={16} height={16} />
            </button>
          </Link>
        </div>

        {/* mid content */}
        {heroImage && (
          <Image
            src={heroImage}
            alt={heading}
            className={clsx('flex h-fit w-214 items-center justify-center bg-cover')}
          />
        )}
      </div>
    </section>
  )
}
