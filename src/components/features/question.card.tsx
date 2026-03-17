import { Question } from '@/types/question.type'
import clsx from 'clsx'
import Link from 'next/link'

export default function QuestionCard({ data }: { data: Question }) {
  return (
    <Link
      role=""
      href={data.link}
      className="group flex h-87.5 w-76.5 flex-col rounded-lg bg-white"
    >
      {/* top */}
      <div className="flex h-fit w-full items-center gap-2 rounded-lg rounded-b-none border-2 border-b border-[rgba(61,61,61,0.1)] px-6 py-4">
        <span>{data.svg}</span>

        <h3 className="font-jakarta text-dark text-2xl">{data.category}</h3>
      </div>

      {/* botom */}
      <div className="flex w-full flex-1 flex-col justify-between p-6">
        <h3 className="font-jakarta text-dark text-[32px] leading-9.5 font-medium">
          {data.title.split(' ').map((word, index) => (
            <span key={index} className="block">
              {word}
            </span>
          ))}
        </h3>

        <button
          className={clsx(
            'font-inter text-dark flex items-center justify-between gap-1 text-sm font-medium transition-all duration-300 group-hover:justify-start group-hover:text-[#FE7F28]',
          )}
        >
          Start Now
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
        </button>
      </div>
    </Link>
  )
}
