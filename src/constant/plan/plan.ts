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
    features: ['Interview copilot x 3', 'Mock interview x 5', '15-min session limit'],
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
    features: ['Unlimited interview copilot', 'Unlimited mock interview', 'Coding copilot'],
  },
  {
    name: 'Standard',
    description: 'Perfect for individuals and small teams getting started',
    price: {
      monthly: 299,
      quarterly: 249,
      annually: 199,
    },
    features: ['Interview copilot x 5', 'Unlimited mock interview', 'Live chat support'],
  },
]
