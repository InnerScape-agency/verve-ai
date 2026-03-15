'use client'

import { BillingCycle, pricingPlans } from '@/constant/plan/plan'
import { useState } from 'react'
import { PricingCard } from './pricingCard'
import PricingToggle from './pricingToggle'

export default function PricingSection() {
  const [billing, setBilling] = useState<BillingCycle>('annually')

  return (
    <section className="mx-auto max-w-6xl py-20">
      <div className="mb-10 flex justify-center">
        <PricingToggle value={billing} onChange={setBilling} />
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} billing={billing} />
        ))}
      </div>
    </section>
  )
}
