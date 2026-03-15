export type BillingCycle = 'monthly' | 'quarterly' | 'annually'

export type PricingPlan = {
  name: string
  description: string
  price: {
    monthly: number
    quarterly: number
    annually: number
  }
  features: string[]
  recommended?: boolean
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Free',
    description: 'Perfect for individuals and small teams getting started',
    price: {
      monthly: 0,
      quarterly: 0,
      annually: 0,
    },
    features: [
      'Interview copilot x 3',
      'Mock interview x 5',
      '15-min session limit',
      'Stealth mode',
      'AI job agent',
      'AI resume builder',
      '15+ AI career tools',
    ],
  },
  {
    name: 'Pro',
    description: 'Perfect for individuals and small teams getting started',
    recommended: true,
    price: {
      monthly: 99,
      quarterly: 79,
      annually: 59,
    },
    features: [
      'Unlimited interview copilot',
      'Unlimited mock interview',
      'Coding copilot',
      'Online assessment copilot',
      'Software engineer copilot',
      'Phone interview copilot',
      'Job-based copilot',
      'Everything in standard',
    ],
  },
  {
    name: 'Standard',
    description: 'Perfect for individuals and small teams getting started',
    price: {
      monthly: 299,
      quarterly: 249,
      annually: 199,
    },
    features: [
      'Interview copilot x 5',
      'Unlimited mock interview',
      '60-min session limit',
      'Interview report',
      'Question banks',
      'Live chat support',
      'Everything in free',
    ],
  },
]
