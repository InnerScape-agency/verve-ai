'use client'

import { useState } from 'react'
import Image from 'next/image'
import { specialized } from '@/constant/home/home.specialized'
import Link from 'next/link'
import GradientImage from '@/assets/gradient/specialized-bg.png'

export default function SpecalizedContent() {
  const [active, setActive] = useState(specialized[0])

  return (
    <section className="grid grid-cols-2 items-center gap-12">
      {/* LEFT SIDE */}
      <div className="w-full space-y-2">
        {specialized.map((item) => (
          <div
            key={item.id}
            className={`items-center rounded-md transition-all duration-300 ${active.id === item.id && 'bg-linear-to-tr from-white via-[#FC632F] via-75% to-white p-px'}`}
          >
            <div
              onClick={() => setActive(item)}
              className={`cursor-pointer rounded-lg px-5 py-6 transition ${active.id === item.id ? 'bg-white' : 'opacity-60'} `}
            >
              <h3 className="font-jakarta text-dark flex items-center gap-2 text-2xl font-medium">
                <span className={`${active.id === item.id && 'text-[#FE7F28]'}`}>{item.icon}</span>
                {item.title}
              </h3>

              {active.id === item.id && (
                <p className="text-dark-800 font-inter mt-3 text-base font-normal">
                  {item.description}
                </p>
              )}

              {active.id === item.id && (
                <Link
                  href={item.link}
                  className="font-inter mt-3.5 flex items-center gap-1 text-base font-medium text-[#FE7F28]"
                >
                  Learn More{' '}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.66699 8H13.3337M13.3337 8L9.33366 4M13.3337 8L9.33366 12"
                      stroke="#FE7F28"
                      strokeWidth="1.5"
                      strokeLinecap="square"
                      strokeLinejoin="bevel"
                    />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE */}
      <div
        style={{ backgroundImage: `url(${GradientImage.src})` }}
        className="w-full max-w-145 rounded-lg bg-cover p-10"
      >
        <Image src={active.image} alt={active.title} className="h-full w-full rounded-lg" />
      </div>
    </section>
  )
}
