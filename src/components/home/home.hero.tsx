import { ChevronRight, Download, Globe, Info } from 'lucide-react'
import VideoOverlayImage from '@/assets/home/hero-video-overlay.webp'
import PlayIcon from '@/assets/icons/play.svg'
import Image from 'next/image'
import HeroBg from '@/assets/gradient/Hero.png'
import Clients from '../ui/clients/clients'

export default function HomeHero() {
  return (
    <section
      style={{ backgroundImage: `url(${HeroBg.src})`, backgroundSize: `100% 100%` }}
      className="h-fit w-full bg-cover bg-no-repeat py-49 pb-20"
    >
      {/* container */}
      <div className="container flex flex-col items-center justify-center">
        {/* top content */}
        <div className="mb-15 flex flex-col items-center justify-center">
          {/* badge */}
          <div className="animate-gradient inline-flex items-center rounded-md bg-linear-to-r from-white via-[#FC632F] via-75% to-white p-px">
            <div className="flex items-center gap-1 rounded-md bg-white p-1.5 pr-3">
              <div className="animate-gradient inline-flex items-center gap-4 rounded-md bg-linear-to-r from-white via-[#FC632F] via-75% to-white p-px">
                <div className="font-inter rounded-md bg-black px-2 py-1 text-[10px] font-medium text-white">
                  100%
                </div>
              </div>

              {/* text */}
              <p className="font-inter text-dark text-sm font-normal">
                It&apos;s undetectable. Here&apos;s why!
              </p>
            </div>
          </div>

          {/* content */}
          <div className="mt-5 mb-8 flex flex-col items-center gap-4">
            {/* title */}
            <h1 className="d2 max-w-180 text-center">Smarter Live Interviews With Verve AI</h1>

            {/* description */}
            <p className="body-lg max-w-130.5 text-center">
              We provide a curated collection of rights-cleared training data sourced from verified
              contributors.
            </p>
          </div>

          {/* actions */}
          <div className="space-y-6">
            {/* top */}
            <div className="flex items-center gap-4">
              <button className="font-inter text-dark bg-primary flex cursor-pointer items-center gap-1.5 rounded-lg px-6 py-4 text-base font-medium">
                Get Started For Free <ChevronRight width={16} height={16} />
              </button>

              <button className="font-inter text-dark flex cursor-pointer items-center gap-1.5 rounded-lg border border-[#E0E0E0] bg-white px-6 py-4 text-base font-medium">
                Download Desktop App
                <Download width={20} height={20} />
              </button>
            </div>

            {/* down */}
            <div className="flex items-center justify-center gap-4">
              <p className="font-inter text-dark flex items-center justify-center gap-1 text-base font-medium">
                <Info width={20} height={20} /> Available For
              </p>

              {/* badges */}
              <div className="flex items-center justify-center">
                <p className="font-inter text-dark border-dark flex cursor-default items-center justify-center gap-1.5 rounded-lg border px-2 py-1 text-base font-medium">
                  <Globe width={20} height={20} /> Browser
                </p>

                <p className="font-inter text-dark border-dark flex cursor-default items-center justify-center gap-1.5 rounded-lg border px-2 py-1 text-base font-medium">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_7861_17446)">
                      <path
                        d="M8.01598 1.875C8.15465 1.33794 8.46798 0.862253 8.90665 0.522809C9.34533 0.183364 9.88443 -0.000555646 10.4391 1.26101e-06H10.5016C10.6342 1.26101e-06 10.7614 0.0526797 10.8552 0.146448C10.9489 0.240216 11.0016 0.367393 11.0016 0.500001C11.0016 0.632609 10.9489 0.759786 10.8552 0.853555C10.7614 0.947323 10.6342 1 10.5016 1H10.4391C10.1065 0.999972 9.78339 1.11046 9.52047 1.31411C9.25754 1.51775 9.06975 1.803 8.9866 2.125C8.95345 2.25347 8.87063 2.3635 8.75635 2.43089C8.64207 2.49829 8.50569 2.51753 8.37723 2.48438C8.24876 2.45122 8.13873 2.3684 8.07134 2.25412C8.00394 2.13984 7.9847 2.00347 8.01785 1.875H8.01598ZM13.9579 10.5994C13.9204 10.5137 13.8598 10.4401 13.7829 10.3869C12.7222 9.65813 12.5016 8.415 12.5016 7.5C12.5016 6.39563 13.3435 5.43375 13.8454 4.95813C13.8947 4.9114 13.934 4.8551 13.9609 4.79267C13.9878 4.73023 14.0016 4.66297 14.0016 4.595C14.0016 4.52703 13.9878 4.45977 13.9609 4.39734C13.934 4.3349 13.8947 4.2786 13.8454 4.23188C13.0529 3.48375 11.7404 3 10.5016 3C9.61176 3.0008 8.74201 3.26455 8.0016 3.75813C7.13793 3.17898 6.09944 2.91888 5.06474 3.02256C4.03004 3.12625 3.06381 3.58724 2.33223 4.32625C1.89488 4.77275 1.55172 5.30258 1.32314 5.88429C1.09456 6.466 0.985213 7.08771 1.0016 7.7125C1.02614 8.76709 1.26064 9.80621 1.69139 10.7691C2.12214 11.732 2.74051 12.5994 3.51035 13.3206C3.97398 13.7587 4.58815 14.0019 5.22598 14H10.706C11.047 14.0006 11.3845 13.9313 11.6975 13.7961C12.0106 13.661 12.2926 13.463 12.526 13.2144C12.9584 12.7491 13.3324 12.2327 13.6397 11.6769C14.0785 10.875 14.0222 10.75 13.9579 10.5994Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_7861_17446">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  MacOS
                </p>

                <p className="font-inter text-dark border-dark flex cursor-default items-center justify-center gap-1.5 rounded-lg border px-2 py-1 text-base font-medium">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_7180_4908)">
                      <path
                        d="M6.5 9.00002V12.2275C6.5 12.3601 6.44732 12.4873 6.35355 12.5811C6.25979 12.6748 6.13261 12.7275 6 12.7275C5.97003 12.7273 5.94014 12.7246 5.91062 12.7194L1.91062 11.9919C1.79542 11.971 1.69121 11.9103 1.61617 11.8204C1.54113 11.7305 1.50002 11.6171 1.5 11.5V9.00002C1.5 8.86741 1.55268 8.74023 1.64645 8.64646C1.74021 8.55269 1.86739 8.50002 2 8.50002H6C6.13261 8.50002 6.25979 8.55269 6.35355 8.64646C6.44732 8.74023 6.5 8.86741 6.5 9.00002ZM6.32062 3.38877C6.26438 3.3418 6.1985 3.30778 6.12765 3.28909C6.0568 3.27041 5.98271 3.26752 5.91062 3.28064L1.91062 4.00814C1.79542 4.02907 1.69121 4.08977 1.61617 4.17966C1.54113 4.26955 1.50002 4.38292 1.5 4.50002V7.00002C1.5 7.13263 1.55268 7.2598 1.64645 7.35357C1.74021 7.44734 1.86739 7.50002 2 7.50002H6C6.13261 7.50002 6.25979 7.44734 6.35355 7.35357C6.44732 7.2598 6.5 7.13263 6.5 7.00002V3.77252C6.50001 3.69932 6.48395 3.62702 6.45296 3.56071C6.42197 3.4944 6.37679 3.4357 6.32062 3.38877ZM13 8.50002H8C7.86739 8.50002 7.74021 8.55269 7.64645 8.64646C7.55268 8.74023 7.5 8.86741 7.5 9.00002V12.5906C7.49987 12.7078 7.54092 12.8214 7.61597 12.9114C7.69102 13.0014 7.79531 13.0622 7.91062 13.0831L12.9106 13.9919C12.9401 13.9974 12.97 14.0001 13 14C13.1326 14 13.2598 13.9473 13.3536 13.8536C13.4473 13.7598 13.5 13.6326 13.5 13.5V9.00002C13.5 8.86741 13.4473 8.74023 13.3536 8.64646C13.2598 8.55269 13.1326 8.50002 13 8.50002ZM13.3206 2.11627C13.2644 2.0693 13.1985 2.03528 13.1277 2.01659C13.0568 1.99791 12.9827 1.99502 12.9106 2.00814L7.91062 2.91752C7.79542 2.93845 7.69121 2.99915 7.61617 3.08904C7.54113 3.17892 7.50002 3.2923 7.5 3.40939V7.00002C7.5 7.13263 7.55268 7.2598 7.64645 7.35357C7.74021 7.44734 7.86739 7.50002 8 7.50002H13C13.1326 7.50002 13.2598 7.44734 13.3536 7.35357C13.4473 7.2598 13.5 7.13263 13.5 7.00002V2.50002C13.5 2.42682 13.484 2.35452 13.453 2.28821C13.422 2.2219 13.3768 2.1632 13.3206 2.11627Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_7180_4908">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Window
                </p>

                <p className="font-inter text-dark border-dark flex cursor-default items-center justify-center gap-1.5 rounded-lg border px-2 py-1 text-base font-medium">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_7180_4921)">
                      <path
                        d="M10.4688 1.25H4.21875C3.52937 1.25 2.96875 1.81062 2.96875 2.5V12.5C2.96875 13.1894 3.52937 13.75 4.21875 13.75H10.4688C11.1581 13.75 11.7188 13.1894 11.7188 12.5V2.5C11.7188 1.81062 11.1581 1.25 10.4688 1.25ZM4.21875 12.5V2.5H10.4688L10.47 12.5H4.21875Z"
                        fill="black"
                      />
                      <path
                        d="M7.34375 11.875C7.68893 11.875 7.96875 11.5952 7.96875 11.25C7.96875 10.9048 7.68893 10.625 7.34375 10.625C6.99857 10.625 6.71875 10.9048 6.71875 11.25C6.71875 11.5952 6.99857 11.875 7.34375 11.875Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_7180_4921">
                        <rect width="15" height="15" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Mobile
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* mid content */}
        <div>
          <div
            style={{ backgroundImage: `url(${VideoOverlayImage.src})` }}
            className="flex h-134 w-233.5 items-center justify-center bg-cover"
          >
            <Image src={PlayIcon} alt="play icon" className="cursor-pointer" />
          </div>
        </div>

        {/* bottom logos */}
        <Clients />
      </div>
    </section>
  )
}
