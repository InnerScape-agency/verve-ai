import { questions } from '@/constant/questions/questions'
import SectionHeader from '../ui/header/section.header'
import GradientImage from '@/assets/gradient/workflow-bg.png'
import QuestionCard from './question.card'

export default function FeatureQuestionBank() {
  return (
    <section
      style={{
        backgroundImage: `url(${GradientImage.src})`,
        backgroundPositionX: -1000,
        backgroundPositionY: -500,
      }}
      className="flex w-full items-center justify-center rounded-xl bg-cover bg-no-repeat py-24"
    >
      <div className="space-y-16 overflow-hidden">
        <SectionHeader
          varient="light"
          semiTitle="Find Your Question Bank"
          title="Mock Interviews for your role and industry"
          svg={
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_7635_45097)">
                <path
                  opacity="0.2"
                  d="M4.25469 15.7453C3.53594 15.0266 4.0125 13.5164 3.64688 12.632C3.26719 11.7188 1.875 10.9766 1.875 10C1.875 9.02344 3.26719 8.28125 3.64688 7.36797C4.0125 6.48438 3.53594 4.97344 4.25469 4.25469C4.97344 3.53594 6.48438 4.0125 7.36797 3.64688C8.28516 3.26719 9.02344 1.875 10 1.875C10.9766 1.875 11.7188 3.26719 12.632 3.64688C13.5164 4.0125 15.0266 3.53594 15.7453 4.25469C16.4641 4.97344 15.9875 6.48359 16.3531 7.36797C16.7328 8.28516 18.125 9.02344 18.125 10C18.125 10.9766 16.7328 11.7188 16.3531 12.632C15.9875 13.5164 16.4641 15.0266 15.7453 15.7453C15.0266 16.4641 13.5164 15.9875 12.632 16.3531C11.7188 16.7328 10.9766 18.125 10 18.125C9.02344 18.125 8.28125 16.7328 7.36797 16.3531C6.48438 15.9875 4.97344 16.4641 4.25469 15.7453Z"
                  fill="#FE7F28"
                />
                <path
                  d="M4.25469 15.7453C3.53594 15.0266 4.0125 13.5164 3.64688 12.632C3.26719 11.7188 1.875 10.9766 1.875 10C1.875 9.02344 3.26719 8.28125 3.64688 7.36797C4.0125 6.48437 3.53594 4.97344 4.25469 4.25469C4.97344 3.53594 6.48437 4.0125 7.36797 3.64688C8.28516 3.26719 9.02344 1.875 10 1.875C10.9766 1.875 11.7188 3.26719 12.632 3.64688C13.5164 4.0125 15.0266 3.53594 15.7453 4.25469C16.4641 4.97344 15.9875 6.48359 16.3531 7.36797C16.7328 8.28516 18.125 9.02344 18.125 10C18.125 10.9766 16.7328 11.7188 16.3531 12.632C15.9875 13.5164 16.4641 15.0266 15.7453 15.7453C15.0266 16.4641 13.5164 15.9875 12.632 16.3531C11.7188 16.7328 10.9766 18.125 10 18.125C9.02344 18.125 8.28125 16.7328 7.36797 16.3531C6.48437 15.9875 4.97344 16.4641 4.25469 15.7453Z"
                  stroke="#FE7F28"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 15C10.5178 15 10.9375 14.5803 10.9375 14.0625C10.9375 13.5447 10.5178 13.125 10 13.125C9.48223 13.125 9.0625 13.5447 9.0625 14.0625C9.0625 14.5803 9.48223 15 10 15Z"
                  fill="#FE7F28"
                />
                <path
                  d="M10 11.25V10.625C11.3805 10.625 12.5 9.64531 12.5 8.4375C12.5 7.22969 11.3805 6.25 10 6.25C8.61953 6.25 7.5 7.22969 7.5 8.4375V8.75"
                  stroke="#FE7F28"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_7635_45097">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          }
        />

        {/* contents */}
        <div className="overflow-x-scroll">
          <div className="flex w-fit items-center justify-center gap-4">
            {questions.map((question) => (
              <QuestionCard
                key={question.title.split(' ').join('-').toLowerCase()}
                data={question}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
