import BgImage from '@/assets/gradient/cta-bg.png'
import Button from '../button/button'
import Image from 'next/image'
import CtaImage from '@/assets/poster/cta.png'

export default function Cta({
  varient = 'withOutImage',
  title,
}: {
  varient?: 'withOutImage' | 'withImage' | 'customContent'
  title?: string
}) {
  switch (varient) {
    case 'withOutImage':
      return (
        <section className="w-full px-5 py-24 pb-4">
          <div
            style={{ backgroundImage: `url(${BgImage.src})` }}
            className="w-full rounded-xl bg-cover py-29.5"
          >
            <div className="flex w-full items-center justify-center">
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
                      stroke="currentColor"
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
          </div>
        </section>
      )

    case 'withImage':
      return (
        <section className="w-full px-5 py-24 pb-4">
          <div
            style={{ backgroundImage: `url(${BgImage.src})` }}
            className="w-full rounded-xl bg-cover py-29.5"
          >
            <div className="container flex w-full items-center justify-between">
              {/* content */}
              <div className="flex w-full max-w-150 flex-col items-start justify-start">
                <h2 className="font-jakarta text-left text-[72px] leading-[110%] font-semibold tracking-tight text-white capitalize">
                  Give Yourself An Unfair Advantage In Interviews.
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
                      stroke="currentColor"
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

              {/* figure */}
              <figure className="w-full max-w-130">
                <Image src={CtaImage} alt="cta-image" />
              </figure>
            </div>
          </div>
        </section>
      )
    case 'customContent':
      return (
        <section className="w-full px-5 py-24 pb-4">
          <div
            style={{ backgroundImage: `url(${BgImage.src})` }}
            className="w-full rounded-xl bg-cover py-29.5"
          >
            <div className="flex w-full items-center justify-center">
              {/* content */}
              <div className="flex w-full max-w-204 flex-col items-center justify-center">
                <h2 className="font-jakarta text-center text-[72px] leading-[110%] font-semibold tracking-tight text-white capitalize">
                  {title}
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
                      stroke="currentColor"
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
          </div>
        </section>
      )
  }
}
