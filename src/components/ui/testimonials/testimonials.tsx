import SectionHeader from '../header/section.header'
import VideoPlayer from '../videoPlayer/videoPlayer'
import WrapperLight from '../wrapper/wrapper.light'
import PosterImage from '@/assets/poster/poster.png'
import TestimonialCard from './testimonialCard'
import WrapperDark from '../wrapper/wrapper.dark'

export default function Testimonials({ varient = 'list' }: { varient?: 'list' | 'grid' }) {
  switch (varient) {
    case 'list':
      return (
        <WrapperLight>
          <div className="flex w-full items-center justify-between">
            {/* left side */}
            <div className="max-w-117 space-y-4">
              <SectionHeader
                semiTitle="Testimonials"
                title="Trusted By Interview Candidates"
                alingMent="left"
                varient="light"
                svg={
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_7180_6434)">
                      <path
                        opacity="0.2"
                        d="M11.5625 8.75H16.875C17.0408 8.75 17.1997 8.81585 17.3169 8.93306C17.4342 9.05027 17.5 9.20924 17.5 9.375V14.375C17.5 14.5408 17.4342 14.6997 17.3169 14.8169C17.1997 14.9342 17.0408 15 16.875 15H12.1875C12.0217 15 11.8628 14.9342 11.7456 14.8169C11.6283 14.6997 11.5625 14.5408 11.5625 14.375V8.75Z"
                        fill="#FE7F28"
                      />
                      <path
                        opacity="0.2"
                        d="M2.5 8.75H7.8125C7.97826 8.75 8.13723 8.81585 8.25444 8.93306C8.37165 9.05027 8.4375 9.20924 8.4375 9.375V14.375C8.4375 14.5408 8.37165 14.6997 8.25444 14.8169C8.13723 14.9342 7.97826 15 7.8125 15H3.125C2.95924 15 2.80027 14.9342 2.68306 14.8169C2.56585 14.6997 2.5 14.5408 2.5 14.375V8.75Z"
                        fill="#FE7F28"
                      />
                      <path
                        d="M11.5625 8.75H16.875C17.0408 8.75 17.1997 8.81585 17.3169 8.93306C17.4342 9.05027 17.5 9.20924 17.5 9.375V14.375C17.5 14.5408 17.4342 14.6997 17.3169 14.8169C17.1997 14.9342 17.0408 15 16.875 15H12.1875C12.0217 15 11.8628 14.9342 11.7456 14.8169C11.6283 14.6997 11.5625 14.5408 11.5625 14.375V7.5C11.5625 6.6712 11.8917 5.87634 12.4778 5.29029C13.0638 4.70424 13.8587 4.375 14.6875 4.375"
                        stroke="#FE7F28"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.5 8.75H7.8125C7.97826 8.75 8.13723 8.81585 8.25444 8.93306C8.37165 9.05027 8.4375 9.20924 8.4375 9.375V14.375C8.4375 14.5408 8.37165 14.6997 8.25444 14.8169C8.13723 14.9342 7.97826 15 7.8125 15H3.125C2.95924 15 2.80027 14.9342 2.68306 14.8169C2.56585 14.6997 2.5 14.5408 2.5 14.375V7.5C2.5 6.6712 2.82924 5.87634 3.41529 5.29029C4.00134 4.70424 4.7962 4.375 5.625 4.375"
                        stroke="#FE7F28"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_7180_6434">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="matrix(-1 0 0 -1 20 20)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                }
              />

              <p className="font-inter text-dark-800 text-lg leading-7">
                Real users share how Verve AI helped them perform confidently in real interviews.
              </p>

              {/* video */}
              <div className="pt-6">
                <VideoPlayer poster={PosterImage.src} src="/video/video.mp4" />
              </div>
            </div>

            {/* right side */}
            <div className="relative max-h-171 w-full max-w-184 overflow-hidden">
              {/* linear color */}
              <div className="absolute top-0 z-10 h-28 w-full bg-linear-to-b from-[#FDF8EE] to-[#fdf8ee00]" />

              {/* main content */}
              <div className="flex items-start gap-3">
                {/* left col */}
                <div className="flex flex-col gap-3">
                  <TestimonialCard />
                  <TestimonialCard />
                  <TestimonialCard />
                  <TestimonialCard />
                  <TestimonialCard />
                </div>

                {/* right col */}
                <div className="flex flex-col gap-3">
                  <TestimonialCard />
                  <TestimonialCard />
                  <TestimonialCard />
                  <TestimonialCard />
                  <TestimonialCard />
                </div>
              </div>

              {/* linear color */}
              <div className="absolute bottom-0 z-10 h-28 w-full bg-linear-to-b from-[#fdf8ee00] to-[#FDF8EE]" />
            </div>
          </div>
        </WrapperLight>
      )

    case 'grid':
      return (
        <WrapperDark>
          <div className="flex w-full flex-col gap-16">
            {/* left side */}
            <div className="flex items-center justify-between space-y-4">
              <div className="space-y-4">
                <SectionHeader
                  semiTitle="Testimonials"
                  title="Trusted By Interview Candidates"
                  alingMent="left"
                  svg={
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_7180_6434)">
                        <path
                          opacity="0.2"
                          d="M11.5625 8.75H16.875C17.0408 8.75 17.1997 8.81585 17.3169 8.93306C17.4342 9.05027 17.5 9.20924 17.5 9.375V14.375C17.5 14.5408 17.4342 14.6997 17.3169 14.8169C17.1997 14.9342 17.0408 15 16.875 15H12.1875C12.0217 15 11.8628 14.9342 11.7456 14.8169C11.6283 14.6997 11.5625 14.5408 11.5625 14.375V8.75Z"
                          fill="#FE7F28"
                        />
                        <path
                          opacity="0.2"
                          d="M2.5 8.75H7.8125C7.97826 8.75 8.13723 8.81585 8.25444 8.93306C8.37165 9.05027 8.4375 9.20924 8.4375 9.375V14.375C8.4375 14.5408 8.37165 14.6997 8.25444 14.8169C8.13723 14.9342 7.97826 15 7.8125 15H3.125C2.95924 15 2.80027 14.9342 2.68306 14.8169C2.56585 14.6997 2.5 14.5408 2.5 14.375V8.75Z"
                          fill="#FE7F28"
                        />
                        <path
                          d="M11.5625 8.75H16.875C17.0408 8.75 17.1997 8.81585 17.3169 8.93306C17.4342 9.05027 17.5 9.20924 17.5 9.375V14.375C17.5 14.5408 17.4342 14.6997 17.3169 14.8169C17.1997 14.9342 17.0408 15 16.875 15H12.1875C12.0217 15 11.8628 14.9342 11.7456 14.8169C11.6283 14.6997 11.5625 14.5408 11.5625 14.375V7.5C11.5625 6.6712 11.8917 5.87634 12.4778 5.29029C13.0638 4.70424 13.8587 4.375 14.6875 4.375"
                          stroke="#FE7F28"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.5 8.75H7.8125C7.97826 8.75 8.13723 8.81585 8.25444 8.93306C8.37165 9.05027 8.4375 9.20924 8.4375 9.375V14.375C8.4375 14.5408 8.37165 14.6997 8.25444 14.8169C8.13723 14.9342 7.97826 15 7.8125 15H3.125C2.95924 15 2.80027 14.9342 2.68306 14.8169C2.56585 14.6997 2.5 14.5408 2.5 14.375V7.5C2.5 6.6712 2.82924 5.87634 3.41529 5.29029C4.00134 4.70424 4.7962 4.375 5.625 4.375"
                          stroke="#FE7F28"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_7180_6434">
                          <rect
                            width="20"
                            height="20"
                            fill="white"
                            transform="matrix(-1 0 0 -1 20 20)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                />

                <p className="font-inter text-dark-200 max-w-120 text-lg leading-7">
                  Real users share how Verve AI helped them perform confidently in real interviews.
                </p>
              </div>

              {/* video */}
              <div className="aspect-video w-115 pt-6">
                <VideoPlayer poster={PosterImage.src} src="/video/video.mp4" />
              </div>
            </div>

            {/* right side */}
            {/* main content */}
            <div className="grid w-full grid-cols-3 gap-3 gap-y-6">
              <TestimonialCard varient="grid" />
              <TestimonialCard varient="grid" />
              <TestimonialCard varient="grid" />
              <TestimonialCard varient="grid" />
              <TestimonialCard varient="grid" />
              <TestimonialCard varient="grid" />
              <TestimonialCard varient="grid" />
              <TestimonialCard varient="grid" />
              <TestimonialCard varient="grid" />
            </div>
          </div>
        </WrapperDark>
      )
  }
}
