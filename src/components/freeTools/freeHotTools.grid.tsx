import GradientImage from '@/assets/gradient/hot-tools-bg.png'
import { hotTools } from '@/constant/home/home.specialized'
import Image from 'next/image'
import Link from 'next/link'

export default function FreeHotToolsGrid() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {hotTools.map((tool) => (
        <div key={tool.title} className="space-y-6">
          <figure
            style={{ backgroundImage: `url(${GradientImage.src})` }}
            className="w-full rounded-lg bg-cover bg-no-repeat px-8 py-15"
          >
            <Image src={tool.image} alt={tool.title} className="h-55 w-full" />
          </figure>

          <div>
            <h3 className="font-jakarta text-dark text-[32px] leading-9.5 font-medium">
              {tool.title}
            </h3>

            <p className="font-inter text-dark-900 mt-4 mb-5 max-w-4/5 text-base leading-6">
              {tool.description}
            </p>

            <Link
              href={tool.link}
              className="font-inter flex items-center gap-1 text-base leading-5.5 text-[#FE7F28]"
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
        </div>
      ))}
    </div>
  )
}
