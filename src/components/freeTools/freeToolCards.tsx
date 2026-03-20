import Card1 from '@/assets/free-tools/cards/1.png'
import Card2 from '@/assets/free-tools/cards/2.png'
import WrapperLight from '../ui/wrapper/wrapper.light'
import SectionHeader from '../ui/header/section.header'
import FreeToolCard from './freeTool.card'
import Badge from '../ui/badge/badge'

export default function FreeToolCards() {
  return (
    <WrapperLight>
      <div className="space-y-16">
        <header className="flex flex-col items-center justify-center gap-5">
          <Badge
            varient="light"
            title={'The Struggle'}
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_7612_74239)">
                  <path
                    opacity="0.2"
                    d="M10 5L14.375 7.5V12.5L10 15L5.625 12.5V7.5L10 5Z"
                    fill="#FE7F28"
                  />
                  <path
                    d="M14.375 3.75H17.5V6.875"
                    stroke="#FE7F28"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.625 16.25H2.5V13.125"
                    stroke="#FE7F28"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.5 13.125V16.25H14.375"
                    stroke="#FE7F28"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.5 6.875V3.75H5.625"
                    stroke="#FE7F28"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 5L14.375 7.5V12.5L10 15L5.625 12.5V7.5L10 5Z"
                    stroke="#FE7F28"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.625 7.5L10 10L14.375 7.5"
                    stroke="#FE7F28"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 10V15"
                    stroke="#FE7F28"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_7612_74239">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
          />

          <h2 className="h1 text-dark max-w-160 text-center">
            Stop Fighting With Broken Document Formatting
          </h2>
        </header>

        {/* contents */}
        <div className="flex items-center gap-5">
          <FreeToolCard
            title="Why Manual Editing Is A Nightmare"
            description="Hours wasted fixing broken layouts and fighting with stubborn margins."
            badges={['Generic templates look unprofessional', 'One edit breaks entire layout']}
            image={Card1}
            isWrong
          />

          <FreeToolCard
            title="Create Polished Resumes Instantly"
            description="AI creates professional, interview-ready resumes in seconds."
            badges={[
              'Auto-formatting keeps layout perfect',
              'AI writes professional content instantly',
            ]}
            image={Card2}
            isWrong={false}
          />
        </div>
      </div>
    </WrapperLight>
  )
}
