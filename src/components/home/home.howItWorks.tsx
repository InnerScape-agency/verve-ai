import Card from '../ui/card/card'
import SectionHeader from '../ui/header/section.header'
import { howItWorks } from '@/constant/home/home.howItWorks'
import WrapperDark from '../ui/wrapper/wrapper.dark'

export default function HomeHowItWorks() {
  return (
    <WrapperDark>
      <div className="flex w-full flex-col items-center justify-center gap-16">
        {/* section header */}
        <SectionHeader
          semiTitle="How It Works"
          title="How Verve AI Guides You Through Interviews"
          svg={
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_7531_11294)">
                <path
                  opacity="0.2"
                  d="M2.5 6.25L10 10.625L17.5 6.25L10 1.875L2.5 6.25Z"
                  fill="#FE7F28"
                />
                <path
                  d="M2.5 13.75L10 18.125L17.5 13.75"
                  stroke="#FE7F28"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.5 10L10 14.375L17.5 10"
                  stroke="#FE7F28"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.5 6.25L10 10.625L17.5 6.25L10 1.875L2.5 6.25Z"
                  stroke="#FE7F28"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_7531_11294">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          }
        />

        <div className="grid grid-cols-3 gap-8">
          {howItWorks.map((work) => (
            <Card
              key={work.title}
              image={work.image}
              title={work.title}
              description={work.description}
            />
          ))}
        </div>
      </div>
    </WrapperDark>
  )
}
