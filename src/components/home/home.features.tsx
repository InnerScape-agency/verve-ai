import SectionHeader from '../ui/header/section.header'
import Feature1 from '@/assets/home/featues/1.png'
import Feature2 from '@/assets/home/featues/2.png'
import Feature3 from '@/assets/home/featues/3.png'
import Feature4 from '@/assets/home/featues/4.png'
import Feature5 from '@/assets/home/featues/5.png'
import { CardType } from '@/types/card.type'
import Card from '../ui/card/card'

const featuresFirstRow: CardType[] = [
  {
    title: 'Train your Model',
    description:
      'Choose your AI model and upload past questions or notes for personalized interview help.',
    image: Feature1,
  },
  {
    title: 'Stealth Mode',
    description:
      'Keeps Copilot hidden from screen sharing available exclusively in the desktop app.',
    image: Feature2,
  },
  {
    title: 'Snap and Solve',
    description:
      'Capture any complex problem on your screen to receive instant, accurate AI solutions.',
    image: Feature3,
  },
]

const featuresSecondRow: CardType[] = [
  {
    title: 'Interview Report',
    description:
      'After each interview, make sure to gather questions, answers, and identify areas for improvement. This will help you refine your approach.',
    image: Feature4,
  },
  {
    title: 'Support 25+ Languages',
    description:
      "Are you preparing for interviews in a different language? Don't worry at all! We understand that it can be a bit daunting, but with the right approach.",
    image: Feature5,
  },
]

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
              <g clip-path="url(#clip0_7180_5278)">
                <path
                  opacity="0.2"
                  d="M4.98486 15.0148C1.24345 8.77964 6.23486 2.54449 16.8317 3.16793C17.4552 13.7679 11.22 18.7562 4.98486 15.0148Z"
                  fill="#FE7F28"
                />
                <path
                  d="M4.98486 15.0148C1.24345 8.77964 6.23486 2.54449 16.8317 3.16793C17.4552 13.7679 11.22 18.7562 4.98486 15.0148Z"
                  stroke="#FE7F28"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.5 7.5L3.125 16.875"
                  stroke="#FE7F28"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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

        <div>
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
