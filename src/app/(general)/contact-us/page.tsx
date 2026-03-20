import { ChevronRight } from 'lucide-react'
import HeroBg from '@/assets/gradient/Hero.png'
import SectionHeader from '@/components/ui/header/section.header'
import { clients } from '@/components/ui/clients/clients'
import Image from 'next/image'
import Contact from '@/components/ui/contact/contact'
import Cta from '@/components/ui/cta/cta'

export default function page() {
  return (
    <>
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
                {/* text */}
                <p className="font-inter text-dark text-sm font-normal">Contact Us</p>
              </div>
            </div>

            {/* content */}
            <div className="mt-5 mb-8 flex flex-col items-center gap-4">
              {/* title */}
              <h1 className="d2 max-w-180 text-center">Get In Touch With Our Support Team</h1>

              {/* description */}
              <p className="body-lg max-w-130.5 text-center">
                We are building the ultimate companion to turn your interview nerves into
                confidence.
              </p>
            </div>

            {/* actions */}
            {/* top */}
            <div className="flex items-center gap-4">
              <button className="font-inter text-dark bg-primary flex cursor-pointer items-center gap-1.5 rounded-lg px-6 py-4 text-base font-medium">
                Chat with Support <ChevronRight width={16} height={16} />
              </button>
            </div>
          </div>

          {/* mid content */}
          <div className="flex w-full items-stretch gap-11 rounded-xl bg-white p-16">
            {/* left */}
            <div className="flex max-w-136 flex-col justify-between">
              {/* top */}
              <div className="h-fit">
                <SectionHeader
                  varient="light"
                  alingMent="left"
                  semiTitle="Contact Us"
                  title="How Can We Help You?"
                  svg={
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_7668_11522)">
                        <path
                          opacity="0.2"
                          d="M10 12.5C12.7614 12.5 15 10.2614 15 7.5C15 4.73858 12.7614 2.5 10 2.5C7.23858 2.5 5 4.73858 5 7.5C5 10.2614 7.23858 12.5 10 12.5Z"
                          fill="#FE7F28"
                        />
                        <path
                          d="M10 12.5C12.7614 12.5 15 10.2614 15 7.5C15 4.73858 12.7614 2.5 10 2.5C7.23858 2.5 5 4.73858 5 7.5C5 10.2614 7.23858 12.5 10 12.5Z"
                          stroke="#FE7F28"
                          stroke-width="1.4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M2.5 16.875C4.01328 14.2602 6.76172 12.5 10 12.5C13.2383 12.5 15.9867 14.2602 17.5 16.875"
                          stroke="#FE7F28"
                          stroke-width="1.4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_7668_11522">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                />

                <p className="font-inter text-dark-800 mt-5 max-w-4/5 text-base leading-6">
                  Get in touch with our team and tell us how we can support you today and beyond.
                </p>
              </div>

              {/* down */}
              <div className="h-fit">
                <p className="font-jakarta text-dark-900 mb-8 text-2xl leading-7.5">
                  Join thousands of candidates landing jobs at
                </p>

                <div className="grid grid-cols-3 gap-18 gap-y-8">
                  {clients.map((client, id) => (
                    <Image
                      key={'client-image-' + id}
                      src={client}
                      alt={'client-image-' + id}
                      className="h-8 w-fit"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* right */}
            <Contact />
          </div>
        </div>
      </section>

      <Cta />
    </>
  )
}
