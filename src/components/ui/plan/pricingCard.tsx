import { BillingCycle, PricingPlan } from '@/constant/plan/plan'

type CardProps = {
  plan: PricingPlan
  billing: BillingCycle
}

export function PricingCard({ plan, billing }: CardProps) {
  const price = plan.price[billing]

  return (
    <div
      className={`rounded-xl border border-neutral-800 p-8 ${plan.recommended ? 'bg-linear-to-br from-orange-400 to-purple-400 text-white' : ''}`}
    >
      <h3 className="text-3xl font-semibold">{plan.name}</h3>

      <div className="mt-4 text-4xl font-bold">
        ${price}
        <span className="text-sm font-normal">/month</span>
      </div>

      <p className="mt-2 text-sm opacity-80">{plan.description}</p>

      <button className="mt-6 w-full rounded-lg bg-white py-3 text-black">Get Started →</button>

      <ul className="mt-6 space-y-2 text-sm">
        {plan.features.map((feature) => (
          <li key={feature}>✓ {feature}</li>
        ))}
      </ul>
    </div>
  )
}
