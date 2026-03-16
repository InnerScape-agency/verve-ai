import Image, { StaticImageData } from 'next/image'
import tabBG from '@/assets/gradient/feature-tab-bg.png'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface Content {
  tab: string
  content: { title: string; description: string; link: string; image: StaticImageData }
}

export default function OurAiFeatureTabContent({ active }: { active: Content }) {
  return (
    <div className="flex h-119 w-full items-center justify-between gap-6">
      {/* left */}
      <div className="h-fit w-full max-w-121">
        <h2 className="font-jakarta text-dark mb-5 text-[40px] leading-12">
          {active.content.title}
        </h2>

        <p className="font-inter text-dark-800 mb-10 max-w-4/5 text-base leading-6">
          {active.content.description}
        </p>

        <Link href={active.content.link}>
          <button className="font-inter text-dark bg-primary flex cursor-pointer items-center gap-1.5 rounded-lg px-6 py-4 text-base font-medium">
            Get Started For Free <ChevronRight width={16} height={16} />
          </button>
        </Link>
      </div>

      {/* right */}
      <div
        style={{ backgroundImage: `url(${tabBG.src})` }}
        className="h-full w-full max-w-177 rounded-lg bg-cover px-26.5 py-24"
      >
        <Image src={active.content.image} alt={active.content.title} className="h-full w-full" />
      </div>
    </div>
  )
}
