import { CardType } from '@/types/card.type'
import Image, { StaticImageData } from 'next/image'

export default function Card({ image, title, description }: CardType) {
  return (
    <div className="space-y-6">
      {/* image wrapper */}
      <figure className="flex h-85 w-full items-center justify-center rounded-lg border border-[#0000000F] bg-[#161616]">
        <Image src={image} alt="How it works" className="max-w-[80%]" />
      </figure>

      {/* content */}
      <div className="space-y-3">
        <h3 className="h4 text-white">{title}</h3>
        <p className="font-inter text-dark-200 text-base">{description}</p>
      </div>
    </div>
  )
}
