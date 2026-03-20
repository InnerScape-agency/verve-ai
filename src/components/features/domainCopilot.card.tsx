'use client'

import CodingBG from '@/assets/gradient/Card.png'
import { DomainCopilot } from '@/types/domainCopilot'
import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'

export default function DomainCopilotCard({ data }: { data: DomainCopilot }) {
  const [isHovered, setIsHovered] = useState(false)
  const { icon, title, description } = data

  return (
    <div
      className={clsx(
        'border-dark-900 h-80 w-76.25 space-y-18 rounded-lg border bg-transparent bg-cover bg-no-repeat p-6 transition-all duration-300',
      )}
      style={isHovered ? { backgroundImage: `url(${CodingBG.src})` } : {}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* top */}
      <div
        className={clsx(
          'flex w-fit items-center justify-between rounded-lg border p-2.5 transition-all duration-300',
          isHovered
            ? 'text-secondary border-transparent bg-white'
            : 'border-[rgba(234,234,234,0.1)] bg-[#292929] text-white',
        )}
      >
        {icon}
      </div>

      {/* down */}
      <div className="flex flex-col justify-between">
        <h3
          className={clsx(
            'font-jakarta mb-3 text-xl leading-6 font-medium text-white transition-all duration-300',
          )}
        >
          {title}
        </h3>

        <p
          className={clsx(
            'font-inter text-dark-700 mb-5 flex-1 text-sm transition-all duration-300',
          )}
        >
          {description}
        </p>

        <Link
          href={data.link}
          className="font-inter flex items-center gap-1 text-base leading-5.5 text-[#FE7F28]"
        >
          Get Started
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
  )
}
