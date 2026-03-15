import Image from 'next/image'
import Client from '@/assets/testimonial/testimonial-1.png'

export default function TestimonialCard() {
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
        “We provide a comprehensive collection of meticulously curated training data that has been
        rights-cleared.”
      </p>
    </div>
  )
}
