import Image from 'next/image'
import Client from '@/assets/testimonial/testimonial-1.png'

export default function TestimonialCard({ varient = 'list' }: { varient?: 'list' | 'grid' }) {
  switch (varient) {
    case 'list':
      return (
        <div className="flex w-full max-w-90 flex-col gap-10 rounded-lg border border-[#E7EAEC] p-5">
          {/* top */}
          <div className="flex items-start gap-4">
            <Image src={Client} alt="client-image" width={60} height={60} className="rounded-lg" />

            {/* client details */}
            <div>
              <h3 className="font-jakarta text-xl font-medium text-black">Albert Flores</h3>
              <p className="font-inter text-dark-500 text-sm font-normal">Software Developer</p>
            </div>
          </div>

          {/* feedback */}
          <p className="text-dark-700 text-base leading-6 font-normal">
            “We provide a comprehensive collection of meticulously curated training data that has
            been rights-cleared.”
          </p>
        </div>
      )

    case 'grid':
      return (
        <div className="space-y-6 rounded-lg border border-[rgba(255,255,255,0.05)] p-6 transition-all duration-300 hover:border-transparent hover:bg-[#161616]">
          {/* top */}
          <div className="relative flex items-start gap-4">
            <Image src={Client} alt="client-image" width={60} height={60} className="rounded-lg" />

            {/* client details */}
            <div>
              <h3 className="font-jakarta text-dark-200 text-xl font-medium">Albert Flores</h3>
              <p className="font-inter text-sm font-normal text-[#ccc]">Software Developer</p>
            </div>

            {/* icon */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_7504_26250)">
                  <path
                    d="M8.4375 11.25H3.125C2.95924 11.25 2.80027 11.1842 2.68306 11.0669C2.56585 10.9497 2.5 10.7908 2.5 10.625V5.625C2.5 5.45924 2.56585 5.30027 2.68306 5.18306C2.80027 5.06585 2.95924 5 3.125 5H7.8125C7.97826 5 8.13723 5.06585 8.25444 5.18306C8.37165 5.30027 8.4375 5.45924 8.4375 5.625V12.5C8.4375 13.3288 8.10826 14.1237 7.52221 14.7097C6.93616 15.2958 6.1413 15.625 5.3125 15.625"
                    stroke="#8F8F8F"
                    stroke-width="1.3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.5 11.25H12.1875C12.0217 11.25 11.8628 11.1842 11.7456 11.0669C11.6283 10.9497 11.5625 10.7908 11.5625 10.625V5.625C11.5625 5.45924 11.6283 5.30027 11.7456 5.18306C11.8628 5.06585 12.0217 5 12.1875 5H16.875C17.0408 5 17.1997 5.06585 17.3169 5.18306C17.4342 5.30027 17.5 5.45924 17.5 5.625V12.5C17.5 13.3288 17.1708 14.1237 16.5847 14.7097C15.9987 15.2958 15.2038 15.625 14.375 15.625"
                    stroke="#8F8F8F"
                    stroke-width="1.3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_7504_26250">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          {/* feedback */}
          <p className="text-base leading-6 font-normal text-[#ccc]">
            “We provide a comprehensive collection of meticulously curated training data that has
            been rights-cleared.”
          </p>
        </div>
      )
  }
}
