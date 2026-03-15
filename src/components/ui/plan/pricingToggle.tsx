import { BillingCycle } from '@/constant/plan/plan'

type Props = {
  value: BillingCycle
  onChange: (cycle: BillingCycle) => void
}

export default function PricingToggle({ value, onChange }: Props) {
  const cycles: BillingCycle[] = ['annually', 'quarterly', 'monthly']

  return (
    <div className="flex rounded-full border border-neutral-700 p-1">
      {cycles.map((cycle) => (
        <button
          key={cycle}
          onClick={() => onChange(cycle)}
          className={`rounded-full px-4 py-2 text-sm capitalize ${value === cycle ? 'bg-purple-500 text-white' : 'text-gray-400'}`}
        >
          {cycle}
        </button>
      ))}
    </div>
  )
}
