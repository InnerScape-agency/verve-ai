import Image from 'next/image'
import WrapperLight from '../ui/wrapper/wrapper.light'
import GradientImage from '@/assets/gradient/feature-tab-bg.png'
import HeroImage from '@/assets/feature-pages/sections/spe-1.png'
import { ChevronRight } from 'lucide-react'
import SectionHeader from '../ui/header/section.header'

export default function FeatureSpecialized() {
  return (
    <WrapperLight>
      <div className="flex w-full items-center justify-between">
        {/* left side */}
        <figure
          style={{ backgroundImage: `url(${GradientImage.src})` }}
          className="rounded-lg bg-cover bg-no-repeat px-14.5 py-15"
        >
          <Image src={HeroImage} alt="specialized-image" />
        </figure>

        {/* right */}
        <div className="max-w-120">
          <SectionHeader
            alingMent="left"
            varient="light"
            semiTitle="Specialized interview copilot"
            title="Expertise Across 100+ Industries"
            svg={
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_7745_28664)">
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
                  <clipPath id="clip0_7745_28664">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
          />

          <p className="font-inter text-dark-900 mt-5 max-w-[80%] text-lg leading-[170%]">
            Get real-time AI support like thousands of fellow candidates.
          </p>

          <button className="font-inter text-dark bg-primary mt-10 flex cursor-pointer items-center gap-1.5 rounded-lg px-6 py-4 text-base font-medium">
            Get Started For Free <ChevronRight width={16} height={16} />
          </button>
        </div>
      </div>
    </WrapperLight>
  )
}
