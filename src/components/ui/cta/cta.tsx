import BgImage from '@/assets/gradient/cta-bg.png'
import Button from '../button/button'

export default function Cta() {
  return (
    <section className="flex w-full max-w-350 items-center justify-center rounded-xl py-24 pb-4">
      <div
        style={{ backgroundImage: `url(${BgImage.src})` }}
        className="flex w-full items-center justify-center rounded-xl bg-cover py-29.5"
      >
        {/* content */}
        <div className="flex w-full max-w-204 flex-col items-center justify-center">
          <h2 className="font-jakarta text-center text-[72px] leading-[110%] font-semibold tracking-tight text-white capitalize">
            Ace your live interviews with AI support!
          </h2>

          <Button className="mt-10">
            Get Started For Free{' '}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 3L11 8L6 13"
                stroke="black"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>

          <p className="font-inter mt-4 text-lg font-medium text-white">
            Available on Mac, Windows and iPhone
          </p>
        </div>
      </div>
    </section>
  )
}
