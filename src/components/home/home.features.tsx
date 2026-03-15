import SectionHeader from '../ui/header/section.header'

import Card from '../ui/card/card'
import { featuresFirstRow, featuresSecondRow } from '@/constant/home/home.features'

export default function HomeFeatures() {
  return (
    <section className="bg-dark-bg flex w-full max-w-350 items-center justify-center rounded-xl py-24">
      <div className="container flex w-full flex-col items-center justify-center gap-16">
        {/* section details */}
        <SectionHeader
          semiTitle="Features"
          title="What Verve AI offers?"
          svg={
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_7180_5278)">
                <path
                  opacity="0.2"
                  d="M4.98486 15.0148C1.24345 8.77964 6.23486 2.54449 16.8317 3.16793C17.4552 13.7679 11.22 18.7562 4.98486 15.0148Z"
                  fill="#FE7F28"
                />
                <path
                  d="M4.98486 15.0148C1.24345 8.77964 6.23486 2.54449 16.8317 3.16793C17.4552 13.7679 11.22 18.7562 4.98486 15.0148Z"
                  stroke="#FE7F28"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.5 7.5L3.125 16.875"
                  stroke="#FE7F28"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_7180_5278">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          }
        />

        <div className="space-y-10">
          <div className="grid grid-cols-3 gap-8">
            {featuresFirstRow.map((feature) => (
              <Card
                key={feature.title}
                image={feature.image}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-8">
            {featuresSecondRow.map((feature) => (
              <Card
                key={feature.title}
                image={feature.image}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
