'use client'

import { ChevronRight } from 'lucide-react'
import SectionHeader from '../ui/header/section.header'
import WrapperDark from '../ui/wrapper/wrapper.dark'
import { highlights } from '@/constant/feature/hightlights'
import HightLightCard from './hightLightCard'
import { useState } from 'react'
import GradientImage from '@/assets/gradient/hightlights-bg.png'

export default function FeatureHightLights() {
  const [activeId, setActiveId] = useState<string>(highlights[0].id)

  return (
    <WrapperDark background={GradientImage}>
      <div className="flex items-start justify-between">
        {/* left */}
        <div className="max-w-146">
          <SectionHeader
            alingMent="left"
            semiTitle="Features Highlights"
            title="Your Interview Advantage Across Browser And Desktop"
            svg={
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_7745_28110)">
                  <path
                    opacity="0.2"
                    d="M6.25 13.125H3.75C3.40482 13.125 3.125 13.4048 3.125 13.75V16.25C3.125 16.5952 3.40482 16.875 3.75 16.875H6.25C6.59518 16.875 6.875 16.5952 6.875 16.25V13.75C6.875 13.4048 6.59518 13.125 6.25 13.125Z"
                    fill="#F0661D"
                  />
                  <path
                    opacity="0.2"
                    d="M11.25 2.5H8.75C8.40482 2.5 8.125 2.77982 8.125 3.125V5.625C8.125 5.97018 8.40482 6.25 8.75 6.25H11.25C11.5952 6.25 11.875 5.97018 11.875 5.625V3.125C11.875 2.77982 11.5952 2.5 11.25 2.5Z"
                    fill="#F0661D"
                  />
                  <path
                    d="M6.25 13.125H3.75C3.40482 13.125 3.125 13.4048 3.125 13.75V16.25C3.125 16.5952 3.40482 16.875 3.75 16.875H6.25C6.59518 16.875 6.875 16.5952 6.875 16.25V13.75C6.875 13.4048 6.59518 13.125 6.25 13.125Z"
                    stroke="#F0661D"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5 13.125V9.375"
                    stroke="#F0661D"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.125 4.21875V3.125C8.125 2.95924 8.19085 2.80027 8.30806 2.68306C8.42527 2.56585 8.58424 2.5 8.75 2.5H11.25C11.4158 2.5 11.5747 2.56585 11.6919 2.68306C11.8092 2.80027 11.875 2.95924 11.875 3.125V5.625C11.875 5.79076 11.8092 5.94973 11.6919 6.06694C11.5747 6.18415 11.4158 6.25 11.25 6.25H9.96953"
                    stroke="#F0661D"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.75 3.125L16.25 16.875"
                    stroke="#F0661D"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.8105 9.375H18.1254"
                    stroke="#F0661D"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.875 9.375H9.43203"
                    stroke="#F0661D"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15 9.375V11.7836"
                    stroke="#F0661D"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_7745_28110">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
          />

          <button className="font-inter text-dark bg-primary mt-10 flex cursor-pointer items-center gap-1.5 rounded-lg px-6 py-4 text-base font-medium">
            Get Started For Free <ChevronRight width={16} height={16} />
          </button>
        </div>

        {/* right */}
        <div className="max-w-xl space-y-8">
          {highlights.map((highlight) => (
            <HightLightCard
              key={highlight.id}
              highlight={highlight}
              setActiveId={setActiveId}
              activeId={activeId}
            />
          ))}
        </div>
      </div>
    </WrapperDark>
  )
}
