import Image from 'next/image'
import SectionHeader from '../ui/header/section.header'
import WrapperLight from '../ui/wrapper/wrapper.light'
import HeroImage1 from '@/assets/feature-pages/sections/undetectable-1.png'
import HeroImage2 from '@/assets/feature-pages/sections/undetectable-2.png'
import HeroImage3 from '@/assets/feature-pages/sections/undetectable-3.png'
import Link from 'next/link'

export default function Undetectable() {
  return (
    <WrapperLight>
      <div className="space-y-16">
        <SectionHeader
          varient="light"
          semiTitle="Undetectable Design"
          title="Stay Hidden During Live Interviews"
          svg={
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_7745_27645)">
                <path
                  opacity="0.2"
                  d="M10 16.875C13.797 16.875 16.875 13.797 16.875 10C16.875 6.20304 13.797 3.125 10 3.125C6.20304 3.125 3.125 6.20304 3.125 10C3.125 13.797 6.20304 16.875 10 16.875Z"
                  fill="#FE7F28"
                />
                <path
                  d="M10 6.25V10L13.125 11.875"
                  stroke="#FE7F28"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.375 8.125H17.5V5"
                  stroke="#FE7F28"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.7183 14.9998C13.7355 15.9272 12.5013 16.5444 11.1697 16.7743C9.83816 17.0042 8.46838 16.8366 7.23153 16.2925C5.99468 15.7483 4.9456 14.8518 4.21537 13.7148C3.48513 12.5779 3.10614 11.251 3.12572 9.89986C3.14531 8.54875 3.56262 7.23336 4.3255 6.11806C5.08838 5.00276 6.16301 4.137 7.41512 3.62896C8.66723 3.12091 10.0413 2.9931 11.3656 3.26151C12.6899 3.52991 13.9058 4.18263 14.8613 5.13809C15.7808 6.06934 16.5402 6.94747 17.4996 8.12481"
                  stroke="#FE7F28"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_7745_27645">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          }
        />

        <div className="space-y-8">
          {/* first row */}
          <div className="flex items-center justify-between bg-white p-10">
            {/* left side */}
            <div className="max-w-108">
              {/* icon */}
              <div className="mb-8 h-15 w-15">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="0.5" y="0.5" width="59" height="59" rx="7.5" fill="#F8F7FF" />
                  <rect x="0.5" y="0.5" width="59" height="59" rx="7.5" stroke="#D7D4FD" />
                  <g clip-path="url(#clip0_7745_27656)">
                    <path
                      opacity="0.2"
                      d="M30 19.875C18.75 19.875 14.25 30 14.25 30C14.25 30 18.75 40.125 30 40.125C41.25 40.125 45.75 30 45.75 30C45.75 30 41.25 19.875 30 19.875ZM30 35.625C28.8875 35.625 27.7999 35.2951 26.8749 34.677C25.9499 34.0589 25.2289 33.1804 24.8032 32.1526C24.3774 31.1248 24.266 29.9938 24.4831 28.9026C24.7001 27.8115 25.2359 26.8092 26.0225 26.0225C26.8092 25.2359 27.8115 24.7001 28.9026 24.4831C29.9938 24.266 31.1248 24.3774 32.1526 24.8032C33.1804 25.2289 34.0589 25.9499 34.677 26.8749C35.2951 27.7999 35.625 28.8875 35.625 30C35.625 31.4918 35.0324 32.9226 33.9775 33.9775C32.9226 35.0324 31.4918 35.625 30 35.625Z"
                      fill="#5E59CE"
                    />
                    <path
                      d="M18.75 17.625L41.25 42.375"
                      stroke="#5E59CE"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M33.7848 34.1624C32.6808 35.166 31.2234 35.69 29.7331 35.6191C28.2428 35.5481 26.8417 34.8881 25.838 33.7841C24.8344 32.6802 24.3104 31.2227 24.3814 29.7324C24.4523 28.2421 25.1124 26.841 26.2163 25.8374"
                      stroke="#5E59CE"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M31.0586 24.4749C32.2545 24.7039 33.3438 25.3147 34.1628 26.2157C34.9819 27.1166 35.4864 28.259 35.6008 29.4713"
                      stroke="#5E59CE"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M41.3357 35.7797C44.4013 33.0347 45.7499 30 45.7499 30C45.7499 30 41.2499 19.875 29.9999 19.875C29.0257 19.8737 28.053 19.9527 27.0918 20.1113"
                      stroke="#5E59CE"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22.4062 21.647C16.673 24.5495 14.25 30.0001 14.25 30.0001C14.25 30.0001 18.75 40.1251 30 40.1251C32.636 40.1458 35.2391 39.5384 37.5938 38.3532"
                      stroke="#5E59CE"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_7745_27656">
                      <rect width="36" height="36" fill="white" transform="translate(12 12)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <h3 className="font-jakarta text-dark mb-3 text-[32px] font-medium">Stealth Mode</h3>

              <p className="font-inter text-dark-800 mb-5 text-lg leading-7">
                Remains completely invisible to recruiters even when sharing your full screen during
                calls.
              </p>

              <Link
                href={'#'}
                className="font-inter flex items-center gap-1 text-sm font-medium text-[#FE7F28]"
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

            {/* right side */}
            <figure className="w-130">
              <Image src={HeroImage1} alt="Undetectable-image" />
            </figure>
          </div>

          {/* second row */}
          <div className="flex justify-between gap-8">
            <div className="flex w-full flex-col-reverse items-center justify-between gap-6 bg-white p-6">
              {/* left side */}
              <div>
                {/* icon */}
                <div className="mb-3 flex items-center gap-3">
                  <div className="h-10 w-10">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.333333"
                        y="0.333333"
                        width="39.3333"
                        height="39.3333"
                        rx="5"
                        fill="#F8F7FF"
                      />
                      <rect
                        x="0.333333"
                        y="0.333333"
                        width="39.3333"
                        height="39.3333"
                        rx="5"
                        stroke="#D7D4FD"
                        stroke-width="0.666667"
                      />
                      <g clip-path="url(#clip0_7745_27788)">
                        <path
                          opacity="0.2"
                          d="M27.5 21.5C27.5 14.75 20 9.5 20 9.5C20 9.5 12.5 14.75 12.5 21.5C12.5 23.4891 13.2902 25.3968 14.6967 26.8033C16.1032 28.2098 18.0109 29 20 29C21.9891 29 23.8968 28.2098 25.3033 26.8033C26.7098 25.3968 27.5 23.4891 27.5 21.5Z"
                          fill="#5E59CE"
                        />
                        <path
                          d="M27.5 21.5C27.5 14.75 20 9.5 20 9.5C20 9.5 12.5 14.75 12.5 21.5C12.5 23.4891 13.2902 25.3968 14.6967 26.8033C16.1032 28.2098 18.0109 29 20 29C21.9891 29 23.8968 28.2098 25.3033 26.8033C26.7098 25.3968 27.5 23.4891 27.5 21.5Z"
                          stroke="#5E59CE"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M20.75 26C22.625 25.6841 24.1822 24.125 24.5 22.25"
                          stroke="#5E59CE"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_7745_27788">
                          <rect width="24" height="24" fill="white" transform="translate(8 8)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>

                  <h3 className="font-jakarta text-dark text-[32px] font-medium">Transparent UI</h3>
                </div>

                <p className="font-inter text-dark-800 mb-5 max-w-[90%] text-lg leading-7">
                  Adjust window opacity to keep your workspace visible while reading AI suggestions
                  effortlessly.
                </p>

                <Link
                  href={'#'}
                  className="font-inter flex items-center gap-1 text-sm font-medium text-[#FE7F28]"
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

              {/* right side */}
              <figure>
                <Image src={HeroImage2} alt="Undetectable-image" />
              </figure>
            </div>

            <div className="flex w-full flex-col-reverse items-center justify-between gap-6 bg-white p-6">
              {/* left side */}
              <div>
                {/* icon */}
                <div className="mb-3 flex items-center gap-3">
                  <div className="h-10 w-10">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.333333"
                        y="0.333333"
                        width="39.3333"
                        height="39.3333"
                        rx="5"
                        fill="#F8F7FF"
                      />
                      <rect
                        x="0.333333"
                        y="0.333333"
                        width="39.3333"
                        height="39.3333"
                        rx="5"
                        stroke="#D7D4FD"
                        stroke-width="0.666667"
                      />
                      <g clip-path="url(#clip0_7745_27907)">
                        <path
                          opacity="0.2"
                          d="M29 13.25H11C10.5858 13.25 10.25 13.5858 10.25 14V26C10.25 26.4142 10.5858 26.75 11 26.75H29C29.4142 26.75 29.75 26.4142 29.75 26V14C29.75 13.5858 29.4142 13.25 29 13.25Z"
                          fill="#5E59CE"
                        />
                        <path
                          d="M29 13.25H11C10.5858 13.25 10.25 13.5858 10.25 14V26C10.25 26.4142 10.5858 26.75 11 26.75H29C29.4142 26.75 29.75 26.4142 29.75 26V14C29.75 13.5858 29.4142 13.25 29 13.25Z"
                          stroke="#5E59CE"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.25 20H26.75"
                          stroke="#5E59CE"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.25 17H26.75"
                          stroke="#5E59CE"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.25 23H14"
                          stroke="#5E59CE"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17 23H23"
                          stroke="#5E59CE"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M26 23H26.75"
                          stroke="#5E59CE"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_7745_27907">
                          <rect width="24" height="24" fill="white" transform="translate(8 8)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>

                  <h3 className="font-jakarta text-dark text-[32px] font-medium">Smart Hotkeys</h3>
                </div>

                <p className="font-inter text-dark-800 mb-5 max-w-[90%] text-lg leading-7">
                  Use global shortcuts to trigger answers instantly without clicking or moving your
                  mouse.
                </p>

                <Link
                  href={'#'}
                  className="font-inter flex items-center gap-1 text-sm font-medium text-[#FE7F28]"
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

              {/* right side */}
              <figure>
                <Image src={HeroImage3} alt="Undetectable-image" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </WrapperLight>
  )
}
