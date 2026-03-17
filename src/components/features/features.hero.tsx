import { ChevronRight } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import HeroBg from '@/assets/gradient/Hero.png'
import clsx from 'clsx'
import Clients from '../ui/clients/clients'

interface FeatureHeroProps {
  badge: string
  badgeSemiTitle: string
  heading: string
  description: string
  heroImage: StaticImageData
  width?: string
  imageHeight?: string
  isClients?: boolean
}

export default function FeatureHero({
  badge,
  badgeSemiTitle,
  heading,
  description,
  heroImage,
  width,
  imageHeight,
  isClients = false,
}: FeatureHeroProps) {
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
              <div className="animate-gradient inline-flex items-center gap-4 rounded-md bg-linear-to-r from-white via-[#FC632F] via-75% to-white p-px">
                <div className="font-inter rounded-md bg-black px-2 py-1 text-[10px] font-medium text-white">
                  {badge}
                </div>
              </div>

              {/* text */}
              <p className="font-inter text-dark text-sm font-normal">{badgeSemiTitle}</p>
            </div>
          </div>

          {/* content */}
          <div className="mt-5 mb-8 flex flex-col items-center gap-4">
            {/* title */}
            <h1 className={clsx('d2 text-center', width ? width : 'max-w-180')}>{heading}</h1>

            {/* description */}
            <p className="body-lg max-w-130.5 text-center">{description}</p>
          </div>

          {/* actios */}
          <button className="font-inter text-dark bg-primary flex cursor-pointer items-center gap-1.5 rounded-lg px-6 py-4 text-base font-medium">
            Get Started For Free <ChevronRight width={16} height={16} />
          </button>
        </div>

        {/* mid content */}
        <Image
          src={heroImage}
          alt={heading}
          className={clsx(
            'flex w-full max-w-260 items-center justify-center bg-cover',
            imageHeight ? imageHeight : 'h-134',
          )}
        />

        {isClients && <Clients />}
      </div>
    </section>
  )
}
