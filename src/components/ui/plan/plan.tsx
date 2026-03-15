'use client'

import { BillingCycle, pricingPlans } from '@/constant/plan/plan'
import { useState } from 'react'
import { PricingCard } from './pricingCard'
import PricingToggle from './pricingToggle'
import SectionHeader from '../header/section.header'
import WrapperDark from '../wrapper/wrapper.dark'

export default function PricingSection() {
  const [billing, setBilling] = useState<BillingCycle>('annually')

  return (
    <WrapperDark>
      <div className="flex flex-col items-center justify-center gap-16">
        {/* section details and toogle */}
        <div className="flex flex-col items-center space-y-10">
          {/* section details */}
          <SectionHeader
            semiTitle="Pricing"
            title="Why Verve AI Interview Copilot"
            svg={
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_7180_6196)">
                  <path
                    opacity="0.2"
                    d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                    fill="#FE7F28"
                  />
                  <path
                    d="M10 5.625V6.875"
                    stroke="#FE7F28"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 13.125V14.375"
                    stroke="#FE7F28"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                    stroke="#FE7F28"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.125 13.125H10.9375C11.3519 13.125 11.7493 12.9604 12.0424 12.6674C12.3354 12.3743 12.5 11.9769 12.5 11.5625C12.5 11.1481 12.3354 10.7507 12.0424 10.4576C11.7493 10.1646 11.3519 10 10.9375 10H9.0625C8.6481 10 8.25067 9.83538 7.95765 9.54235C7.66462 9.24933 7.5 8.8519 7.5 8.4375C7.5 8.0231 7.66462 7.62567 7.95765 7.33265C8.25067 7.03962 8.6481 6.875 9.0625 6.875H11.875"
                    stroke="#FE7F28"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_7180_6196">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
          />

          {/* toogle bar */}
          <PricingToggle onChange={setBilling} value={billing} />
        </div>

        {/* pricing cards */}
        <div className="flex w-full items-start gap-6">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} billing={billing} />
          ))}
        </div>
      </div>
    </WrapperDark>
  )
}
