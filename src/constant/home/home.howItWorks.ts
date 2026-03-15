import HowItWorks1 from '@/assets/home/how-it-works/how-it-works-1.png'
import HowItWorks2 from '@/assets/home/how-it-works/how-it-works-2.png'
import HowItWorks3 from '@/assets/home/how-it-works/how-it-works-3.png'
import { CardType } from '@/types/card.type'

export const howItWorks: CardType[] = [
  {
    title: 'Before Interview',
    description:
      'Run unlimited mock sessions to master your delivery and boost confidence instantly.',
    image: HowItWorks1,
  },
  {
    title: 'During Interview',
    description: 'Get real-time AI support while answering interview questions confidently.',
    image: HowItWorks2,
  },
  {
    title: 'After Interview',
    description: 'Access detailed interview reports to improve performance and future outcomes.',
    image: HowItWorks3,
  },
]
