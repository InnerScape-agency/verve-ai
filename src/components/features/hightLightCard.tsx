'use client'

import { Highlights } from '@/constant/feature/hightlights'
import clsx from 'clsx'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'

export default function HightLightCard({
  highlight,
  setActiveId,
  activeId,
}: {
  highlight: Highlights
  setActiveId: Dispatch<SetStateAction<string>>
  activeId: string
}) {
  const { id, icon, title, description, link, last } = highlight

  return (
    <div className="space-y-8">
      <div
        role="button"
        onClick={() => setActiveId(id)}
        className="flex cursor-pointer items-start gap-2"
      >
        {/* icon */}
        <div className="h-8 w-8">{icon}</div>

        {/* content */}
        <div>
          <h3
            className={clsx(
              'font-jakarta text-2xl leading-7.5 text-white',
              activeId === id ? 'mb-2' : 'mb-0',
            )}
          >
            {title}
          </h3>

          {/* collaps */}
          <div
            className={clsx(
              'transition-all duration-300',
              activeId === id ? 'h-fit opacity-100' : 'h-0 opacity-0',
            )}
          >
            <p className="font-inter text-dark-200 mb-4 text-lg leading-7">{description}</p>

            <Link
              href={link}
              className="font-inter flex items-center gap-1 text-base leading-5.5 text-[#FE7F28]"
            >
              Learn More
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.66797 8H13.3346M13.3346 8L9.33463 4M13.3346 8L9.33463 12"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="square"
                  stroke-linejoin="bevel"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {last || <div className="bg-dark-900 h-px w-full" />}
    </div>
  )
}
