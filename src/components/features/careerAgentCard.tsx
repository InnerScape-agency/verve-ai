import { ChevronRight } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'

interface CareerCard {
  image: StaticImageData
  title: string
  description: string
  link: string
}

export default function CareerAgentCard({ data }: { data: CareerCard }) {
  return (
    <div className="space-y-10">
      {/* image */}
      <figure className="w-full">
        <Image src={data.image} alt={data.title} className="max-h-105 w-full" />
      </figure>

      {/* content */}
      <div className="max-w-130.5">
        <h3 className="font-jakarta text-dark text-[32px] leading-9.5 font-medium">{data.title}</h3>

        <p className="font-inter text-dark-800 mt-4 mb-6 text-base leading-6">{data.description}</p>

        <button className="font-inter text-dark bg-primary flex cursor-pointer items-center gap-1.5 rounded-lg px-6 py-4 text-base font-medium">
          Get Started <ChevronRight width={16} height={16} />
        </button>
      </div>
    </div>
  )
}
