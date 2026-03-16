'use client'

import tab1 from '@/assets/feature-pages/tab/tab-1.png'
import tab2 from '@/assets/feature-pages/tab/tab-2.png'
import tab3 from '@/assets/feature-pages/tab/tab-3.png'
import { useState } from 'react'
import Badge from '../ui/badge/badge'
import WrapperLight from '../ui/wrapper/wrapper.light'
import clsx from 'clsx'
import OurAiFeatureTabContent from './ourAiFeatureTabContent'
import { StaticImageData } from 'next/image'

const contents: {
  tab: string
  content: { title: string; description: string; link: string; image: StaticImageData }
}[] = [
  {
    tab: 'personalization',
    content: {
      title: 'Smart Persona Builder',
      description:
        'Automatically creates a unique interview persona by analyzing your Resume, Job Description, and Company Culture.',
      link: '#',
      image: tab1,
    },
  },
  {
    tab: 'resume',
    content: {
      title: 'Tailored Responses',
      description:
        'Train the Copilot with your own instructions. Take full control over the AI’s response style, format, length, and tone to match your natural speech.',
      link: '#',
      image: tab2,
    },
  },
  {
    tab: 'job',
    content: {
      title: 'Doc Intelligence',
      description:
        'Upload your own documents and pre-determined Q&A sets to train your Copilot. The Copilot uses your specific data to deliver tailored answers.',
      link: '#',
      image: tab3,
    },
  },
]

export default function OurFeature() {
  const [active, setActive] = useState<{
    tab: string
    content: { title: string; description: string; link: string; image: StaticImageData }
  }>(contents[0])

  return (
    <WrapperLight>
      <div className="space-y-16">
        <div className="flex flex-col items-center justify-center gap-8">
          <header className="flex flex-col items-center justify-center gap-5">
            <Badge
              varient="light"
              title={'Our AI Feature'}
              icon={
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_7745_29302)">
                    <path
                      d="M10 16.25C13.4518 16.25 16.25 13.4518 16.25 10C16.25 6.54822 13.4518 3.75 10 3.75C6.54822 3.75 3.75 6.54822 3.75 10C3.75 13.4518 6.54822 16.25 10 16.25Z"
                      stroke="#FE7F28"
                      stroke-width="1.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 10H18.125"
                      stroke="#FE7F28"
                      stroke-width="1.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 10.0001L5.9375 2.96338"
                      stroke="#FE7F28"
                      stroke-width="1.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 10L5.9375 17.0367"
                      stroke="#FE7F28"
                      stroke-width="1.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 3.75V1.875"
                      stroke="#FE7F28"
                      stroke-width="1.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.58711 6.875L2.96289 5.9375"
                      stroke="#FE7F28"
                      stroke-width="1.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.75 10H1.875"
                      stroke="#FE7F28"
                      stroke-width="1.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.58711 13.125L2.96289 14.0625"
                      stroke="#FE7F28"
                      stroke-width="1.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 16.25V18.125"
                      stroke="#FE7F28"
                      stroke-width="1.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.125 15.4126L14.0625 17.0368"
                      stroke="#FE7F28"
                      stroke-width="1.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.4121 13.125L17.0363 14.0625"
                      stroke="#FE7F28"
                      stroke-width="1.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.4121 6.875L17.0363 5.9375"
                      stroke="#FE7F28"
                      stroke-width="1.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.125 4.5876L14.0625 2.96338"
                      stroke="#FE7F28"
                      stroke-width="1.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_7745_29302">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              }
            />

            <h2 className="h1 text-dark max-w-200 text-center"> Copilot that adapts to you.</h2>

            <p className="font-inter text-dark max-w-[62%] text-center text-lg leading-7 font-normal">
              Your background, your style, and your documents. Train the AI to represent the best
              version of you
            </p>
          </header>

          {/* tabs */}
          <div className="flex w-fit items-stretch gap-12 rounded-lg bg-white p-2">
            {/* tab button's */}
            <button
              onClick={() => setActive(contents[0])}
              className={clsx(
                'font-inter text-dark cursor-pointer rounded-sm border px-6 py-3 text-base leading-5.5 font-medium transition-all',
                active === contents[0]
                  ? 'border-[rgba(0,0,0,0.08)] bg-[#FDF8EE]'
                  : 'border-transparent bg-transparent hover:border-[rgba(0,0,0,0.08)] hover:bg-[#FDF8EE]',
              )}
            >
              Personalization
            </button>

            {/* bar */}
            <div className="h-12 w-px bg-linear-to-b from-white via-gray-400 via-45% to-white" />

            <button
              onClick={() => setActive(contents[1])}
              className={clsx(
                'font-inter text-dark cursor-pointer rounded-sm border px-6 py-3 text-base leading-5.5 font-medium transition-all',
                active === contents[1]
                  ? 'border-[rgba(0,0,0,0.08)] bg-[#FDF8EE]'
                  : 'border-transparent bg-transparent hover:border-[rgba(0,0,0,0.08)] hover:bg-[#FDF8EE]',
              )}
            >
              Resume + Company
            </button>

            {/* bar */}
            <div className="h-12 w-px bg-linear-to-b from-white via-gray-400 via-45% to-white" />

            <button
              onClick={() => setActive(contents[2])}
              className={clsx(
                'font-inter text-dark cursor-pointer rounded-sm border px-6 py-3 text-base leading-5.5 font-medium transition-all',
                active === contents[2]
                  ? 'border-[rgba(0,0,0,0.08)] bg-[#FDF8EE]'
                  : 'border-transparent bg-transparent hover:border-[rgba(0,0,0,0.08)] hover:bg-[#FDF8EE]',
              )}
            >
              Job description
            </button>
          </div>
        </div>

        {/* content */}
        <OurAiFeatureTabContent active={active} />
      </div>
    </WrapperLight>
  )
}
