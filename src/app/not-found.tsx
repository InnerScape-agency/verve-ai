import { ChevronLeft, ChevronRight } from 'lucide-react'
import HeroBg from '@/assets/gradient/Hero.png'
import Link from 'next/link'

export default function NotFound() {
  return (
    <section
      style={{ backgroundImage: `url(${HeroBg.src})`, backgroundSize: `100% 100%` }}
      className="h-fit w-full bg-cover bg-no-repeat py-49 pb-40"
    >
      {/* container */}
      <div className="container flex flex-col items-center justify-center">
        {/* top content */}
        <div className="mb-15 flex flex-col items-center justify-center">
          {/* badge */}
          <div className="animate-gradient inline-flex items-center rounded-md bg-linear-to-r from-white via-[#FC632F] via-75% to-white p-px">
            <div className="flex items-center gap-1 rounded-md bg-white px-3 py-1.5">
              {/* text */}
              <p className="font-inter text-dark text-sm font-normal">404</p>
            </div>
          </div>

          {/* content */}
          <div className="mt-5 mb-8 flex flex-col items-center gap-4">
            {/* title */}
            <h1 className="d2 max-w-200 text-center">Oops! This Page Doesn&apos;t Exist Anymore</h1>

            {/* description */}
            <p className="body-lg max-w-140 text-center">
              Looks like you&apos;ve wandered off the interview prep path. Don&apos;t worry
              we&apos;ll help you get back on track quickly.
            </p>
          </div>

          {/* actions */}
          <div className="flex items-center gap-4">
            <button className="font-inter text-dark flex cursor-pointer items-center gap-1.5 rounded-lg border border-[#E0E0E0] bg-white px-6 py-4 text-base font-medium">
              <ChevronLeft width={20} height={20} />
              Browse Interview Resources
            </button>

            <Link href={'/'}>
              <button className="font-inter text-dark bg-primary flex cursor-pointer items-center gap-1.5 rounded-lg px-6 py-4 text-base font-medium">
                Get Started For Free <ChevronRight width={16} height={16} />
              </button>
            </Link>
          </div>
        </div>

        {/* mid content */}
        <div className="flex items-center justify-center bg-cover">
          <svg
            width="675"
            height="262"
            viewBox="0 0 675 262"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M186.645 200.585L161.917 202.648L165.458 244.828L104.572 249.985L101.003 207.805L4.46055 215.946L0 163.228L66.239 5.4084L130.61 0L72.0655 145.441L97.3233 143.323L94.1452 105.715L153.191 100.724L156.37 138.332L181.098 136.241L186.645 200.585Z"
              fill="white"
            />
            <path
              d="M225.589 125.872C230.607 44.1889 274.99 -0.444282 333.172 3.20778C391.354 6.85984 429.993 56.4833 424.975 138.167C419.957 219.85 375.575 264.484 317.393 260.832C259.211 257.179 220.599 207.556 225.589 125.872ZM350.456 133.511C353.244 85.9786 343.57 70.534 329.101 69.6697C314.633 68.8055 302.924 82.912 300.136 130.445C297.348 177.977 306.994 193.394 321.463 194.286C335.932 195.178 347.529 181.044 350.456 133.511Z"
              fill="white"
            />
            <path
              d="M669.533 214.991L642.156 212.816L638.811 254.884L571.429 249.532L574.802 207.491L468 198.988L472.182 146.243L571.596 2L642.797 7.57567L554.033 141.001L581.911 143.204L584.894 105.596L650.213 110.781L647.23 148.417L674.579 150.592L669.533 214.991Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
