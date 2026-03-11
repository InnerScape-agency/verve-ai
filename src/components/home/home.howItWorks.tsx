import HowItWorks1 from '@/assets/home/how-it-works-1.png'
import HowItWorks2 from '@/assets/home/how-it-works-2.png'
import HowItWorks3 from '@/assets/home/how-it-works-3.png'
import Image, { StaticImageData } from 'next/image'

const howItWorks = [
  {
    title: 'Before Interview',
    description:
      'Run unlimited mock sessions to master your delivery and boost confidence instantly.',
    image: HowItWorks1,
  },
  {
    title: 'During Interview',
    description: 'Get real-time AI support while answering interview questions confidently.',
    image: HowItWorks2,
  },
  {
    title: 'After Interview',
    description: 'Access detailed interview reports to improve performance and future outcomes.',
    image: HowItWorks3,
  },
]

export default function HomeHowItWorks() {
  return (
    <section className="bg-dark-bg flex w-full max-w-350 items-center justify-center rounded-xl py-24">
      <div className="container flex w-full flex-col items-center justify-center gap-16">
        {/* section details */}
        <div className="flex flex-col items-center justify-center gap-5">
          {/* badge */}
          <div className="animate-gradient inline-flex items-center rounded-md bg-linear-to-r from-white via-[#FC632F] via-75% to-white p-px">
            <div className="bg-dark-bg flex items-center gap-1 rounded-md p-1.5 pr-3">
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

              {/* text */}
              <p className="font-inter text-sm font-normal text-white">How It Works</p>
            </div>
          </div>

          <h2 className="h1 max-w-138 text-center text-white">
            How Verve AI Guides You Through Interviews
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {howItWorks.map((work) => (
            <HowItWorksCard
              key={work.title}
              image={work.image}
              title={work.title}
              description={work.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const HowItWorksCard = ({
  image,
  title,
  description,
}: {
  image: StaticImageData
  title: string
  description: string
}) => {
  return (
    <div className="space-y-6">
      {/* image wrapper */}
      <figure className="flex h-85 w-full items-center justify-center rounded-lg border border-[#0000000F] bg-[#161616]">
        <Image src={image} alt="How it works" />
      </figure>

      {/* content */}
      <div className="space-y-3">
        <h3 className="h4 text-white">{title}</h3>
        <p className="font-inter text-dark-200 text-base">{description}</p>
      </div>
    </div>
  )
}
