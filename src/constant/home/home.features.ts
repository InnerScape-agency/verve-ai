import Feature1 from '@/assets/home/featues/1.png'
import Feature2 from '@/assets/home/featues/2.png'
import Feature3 from '@/assets/home/featues/3.png'
import Feature4 from '@/assets/home/featues/4.png'
import Feature5 from '@/assets/home/featues/5.png'
import { CardType } from '@/types/card.type'

export const featuresFirstRow: CardType[] = [
  {
    title: 'Train your Model',
    description:
      'Choose your AI model and upload past questions or notes for personalized interview help.',
    image: Feature1,
  },
  {
    title: 'Stealth Mode',
    description:
      'Keeps Copilot hidden from screen sharing available exclusively in the desktop app.',
    image: Feature2,
  },
  {
    title: 'Snap and Solve',
    description:
      'Capture any complex problem on your screen to receive instant, accurate AI solutions.',
    image: Feature3,
  },
]

export const featuresSecondRow: CardType[] = [
  {
    title: 'Interview Report',
    description:
      'After each interview, make sure to gather questions, answers, and identify areas for improvement. This will help you refine your approach.',
    image: Feature4,
  },
  {
    title: 'Support 25+ Languages',
    description:
      "Are you preparing for interviews in a different language? Don't worry at all! We understand that it can be a bit daunting, but with the right approach.",
    image: Feature5,
  },
]
