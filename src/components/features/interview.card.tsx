import GradientImage from '@/assets/gradient/interview-bg.png'
import { Interview } from '@/types/interview'
import Image from 'next/image'
import Link from 'next/link'

export default function InterviewCard({ interview }: { interview: Interview }) {
  return (
    <div className="space-y-6">
      <figure className="w-full rounded-lg bg-[#161616] px-6.5 py-12">
        <Image src={interview.image} alt={interview.title} className="h-full w-full" />
      </figure>

      <div>
        <h3 className="font-jakarta text-dark-200 text-2xl leading-7.5 font-medium">
          {interview.title}
        </h3>

        <p className="font-inter text-dark-600 mt-3 mb-6 max-w-82.5 text-base leading-6">
          {interview.description}
        </p>

        <Link
          href={interview.link}
          className="font-inter flex items-center gap-1 text-base leading-5.5 text-[#FE7F28]"
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
        </Link>
      </div>
    </div>
  )
}
