import { ChevronRight } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import HeroBg from '@/assets/gradient/Hero.png'
import clsx from 'clsx'
import Clients from '../ui/clients/clients'
import { Activity } from 'react'

interface FeatureHeroProps {
  badge: string
  badgeSemiTitle: string
  heading: string
  description: string
  heroImage: StaticImageData
  width?: string
  desWidth?: string
  imageHeight?: string
  isClients?: boolean
  isBadges?: boolean
  badges?: string[]
}

export default function FeatureHero({
  badge,
  badgeSemiTitle,
  heading,
  description,
  heroImage,
  width,
  desWidth,
  imageHeight,
  isClients = false,
  isBadges = false,
  badges,
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
            <p className={clsx('body-lg text-center', desWidth ? desWidth : 'max-w-130.5')}>
              {description}
            </p>
          </div>

          {/* actios */}
          <button className="font-inter text-dark bg-primary flex cursor-pointer items-center gap-1.5 rounded-lg px-6 py-4 text-base font-medium">
            Get Started For Free <ChevronRight width={16} height={16} />
          </button>

          {/* badges */}
          <Activity mode={isBadges ? 'visible' : 'hidden'}>
            <div className="flex items-center justify-center gap-6">
              {badges?.map((badge) => (
                <div key={badge} className="mt-15 flex items-center gap-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_7635_47034)">
                      <path
                        opacity="0.2"
                        d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                        fill="#29C979"
                      />
                      <path
                        d="M6.875 10.625L8.75 12.5L13.125 8.125"
                        stroke="#29C979"
                        stroke-width="1.3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                        stroke="#29C979"
                        stroke-width="1.3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_7635_47034">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <span className="font-inter text-base font-normal text-black">{badge}</span>
                </div>
              ))}
            </div>
          </Activity>
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
