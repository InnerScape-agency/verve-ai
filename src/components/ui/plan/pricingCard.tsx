import { BillingCycle, PricingPlan } from '@/constant/plan/plan'
import Button from '../button/button'
import { CircleCheck } from 'lucide-react'
import CardBG from '@/assets/gradient/price-card.png'

type CardProps = {
  plan: PricingPlan
  billing: BillingCycle
}

export function PricingCard({ plan, billing }: CardProps) {
  const price = plan.price[billing]

  return (
    <div
      className={`w-full max-w-106 rounded-lg border border-[#2D2A25] bg-linear-0 from-[#030200] via-[#19140E] via-45% to-[#1E170F] p-4 ${plan.recommended && '-mt-4.5 bg-linear-to-br from-[#691601] via-[#19140E] via-40% to-[#030200]'}`}
    >
      {/* pricing */}
      <div
        style={{
          backgroundImage: `url(${plan.recommended && CardBG.src})`,
        }}
        className={`space-y-8 rounded-lg border border-[rgba(147,137,121,0.1)] bg-linear-to-b from-[#221C18] to-[#16130E] p-6 ${plan.recommended && `bg-cover`}`}
      >
        {/* content */}
        <div className="space-y-5">
          <h3 className="font-jakarta text-dark-200 flex items-center justify-between text-5xl leading-14 font-semibold capitalize">
            {plan.name}

            {plan.recommended && (
              <span className="font-inter text-dark rounded-full bg-white px-3 py-1.5 text-base leading-5 font-medium">
                Recommended
              </span>
            )}
          </h3>

          <div className="flex items-end">
            <h4 className="font-jakarta text-[40px] leading-12 font-semibold text-white">
              ${price}
            </h4>
            <sub className="font-inter text-dark-200 text-base leading-8 font-medium">
              {billing === 'annually' ? '/year' : billing === 'monthly' ? '/month' : ' /quarter'}
            </sub>
          </div>

          <p className="font-inter text-dark-200 text-base font-normal">{plan.description}</p>
        </div>

        <Button varient="transparent" className="flex w-full items-center justify-center">
          Get Started{' '}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 3L11 8L6 13"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </div>

      {/* features */}
      <div className="space-y-5 px-6 pt-8 pb-5">
        <h3 className="font-inter text-base leading-6 font-medium text-[#F5F5F5]">
          {plan.name.toLowerCase() === 'free'
            ? 'For Job Hunters'
            : plan.name.toLowerCase() === 'Pro'
              ? 'For Offer Seekers'
              : 'For Active Interviewees'}
        </h3>

        <ul className="space-y-3">
          {plan.features.map((feature) => (
            <li
              key={feature}
              className="font-inter text-dark-200 flex items-center gap-2 text-base leading-6 font-normal"
            >
              <CircleCheck width={24} height={24} color="#E0E0E0" fill="#221D19" strokeWidth={1} />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
