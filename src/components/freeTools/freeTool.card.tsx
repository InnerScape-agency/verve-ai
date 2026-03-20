import Image, { StaticImageData } from 'next/image'
import FreeTolsBG from '@/assets/gradient/freeTools-card-bg.png'

interface FreeToolsCard {
  title: string
  description: string
  image: StaticImageData
  isWrong: boolean
  badges: string[]
}

export default function FreeToolCard({
  image,
  title,
  isWrong,
  badges,
  description,
}: FreeToolsCard) {
  return (
    <div className="w-full space-y-6 rounded-lg bg-white p-6">
      {/* image */}
      <figure
        style={{ backgroundImage: `url(${FreeTolsBG.src})` }}
        className="rounded-lg bg-cover bg-no-repeat px-7.5 py-8"
      >
        <Image src={image} alt={title} className="h-fit w-full rounded-lg" />
      </figure>

      {/* content */}
      <div className="space-y-4">
        <h3 className="font-jakarta text-dark text-[32px] leading-9.5">{title}</h3>
        <p className="font-inter text-dark-900 text-base leading-6">{description}</p>

        {/* badges */}
        {badges.map((badge) => (
          <div
            key={badge}
            className="font-inter text-dark-900 flex items-center gap-1.5 text-base leading-6"
          >
            <span>
              {isWrong ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_7504_20135)">
                    <path
                      opacity="0.2"
                      d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                      fill="#EF4444"
                    />
                    <path
                      d="M12.5 7.5L7.5 12.5"
                      stroke="#EF4444"
                      stroke-width="1.3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.5 7.5L12.5 12.5"
                      stroke="#EF4444"
                      stroke-width="1.3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                      stroke="#EF4444"
                      stroke-width="1.3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_7504_20135">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_7504_20466)">
                    <path
                      opacity="0.2"
                      d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                      fill="#29C979"
                    />
                    <path
                      d="M6.875 10.625L8.75 12.5L13.125 8.125"
                      stroke="#29C979"
                      stroke-width="1.3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                      stroke="#29C979"
                      stroke-width="1.3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_7504_20466">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              )}
            </span>

            <h4 className="font-inter text-dark-900 text-base leading-6">{badge}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}
