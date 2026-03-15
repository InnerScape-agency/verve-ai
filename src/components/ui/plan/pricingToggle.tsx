import { BillingCycle } from '@/constant/plan/plan'

type Props = {
  value: BillingCycle
  onChange: (cycle: BillingCycle) => void
}

export default function PricingToggle({ value, onChange }: Props) {
  const cycles: BillingCycle[] = ['annually', 'quarterly', 'monthly']

  return (
    <div className="flex w-fit gap-1.5 rounded-full border border-neutral-700 p-1">
      {cycles.map((cycle) => (
        <button
          key={cycle}
          onClick={() => onChange(cycle)}
          className={`font-inter flex cursor-pointer items-center justify-between rounded-full px-4 py-1 text-base font-medium capitalize transition-all ${value === cycle ? 'bg-primary text-dark' : 'text-dark-500'} ${cycle.toLowerCase() === 'annually' && 'py-1 pr-1 pl-4'}`}
        >
          {cycle}

          {cycle.toLowerCase() === 'annually' && (
            <span
              className={`font-inter ml-1.5 rounded-full px-2 py-2.5 text-xs font-medium transition-all ${value === cycle ? 'bg-dark-bg text-white' : 'text-dark-bg bg-white'}`}
            >
              63% OFF
            </span>
          )}
        </button>
      ))}
    </div>
  )
}
