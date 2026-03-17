import { StaticImageData } from 'next/image'
import SectionHeader from '../ui/header/section.header'
import WrapperLight from '../ui/wrapper/wrapper.light'
import IntS1 from '@/assets/feature-pages/interview/int-s-1.png'
import IntS2 from '@/assets/feature-pages/interview/int-s-2.png'
import CareerAgentCard from './careerAgentCard'

interface CareerCard {
  image: StaticImageData
  title: string
  description: string
  link: string
}

const supportDatas: CareerCard[] = [
  {
    image: IntS1,
    title: 'Save time with 24/7 automated job hunting',
    description: 'Automatically finds the best-matching roles based on your resume and goal',
    link: '#',
  },
  {
    image: IntS2,
    title: 'More opportunities with better matches',
    description: 'Finds hidden roles across 30+ sites, with match scores based on your experience.',
    link: '#',
  },
]

export default function FeatureCareerAgent() {
  return (
    <WrapperLight>
      <div className="space-y-16">
        <SectionHeader
          varient="light"
          semiTitle="Your Career Agent"
          title="Automate Search To Land Offers 5x Faster"
          svg={
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                d="M17.5 4.375V15.625C17.5 15.7908 17.4342 15.9497 17.3169 16.0669C17.1997 16.1842 17.0408 16.25 16.875 16.25H3.125C2.95924 16.25 2.80027 16.1842 2.68306 16.0669C2.56585 15.9497 2.5 15.7908 2.5 15.625V4.375C2.5 4.20924 2.56585 4.05027 2.68306 3.93306C2.80027 3.81585 2.95924 3.75 3.125 3.75H16.875C17.0408 3.75 17.1997 3.81585 17.3169 3.93306C17.4342 4.05027 17.5 4.20924 17.5 4.375Z"
                fill="#FE7F28"
              />
              <path
                d="M16.875 3.125H3.125C2.79348 3.125 2.47554 3.2567 2.24112 3.49112C2.0067 3.72554 1.875 4.04348 1.875 4.375V15.625C1.875 15.9565 2.0067 16.2745 2.24112 16.5089C2.47554 16.7433 2.79348 16.875 3.125 16.875H16.875C17.2065 16.875 17.5245 16.7433 17.7589 16.5089C17.9933 16.2745 18.125 15.9565 18.125 15.625V4.375C18.125 4.04348 17.9933 3.72554 17.7589 3.49112C17.5245 3.2567 17.2065 3.125 16.875 3.125ZM16.875 15.625H3.125V4.375H16.875V15.625ZM13.75 6.875C13.75 7.86956 13.3549 8.82339 12.6517 9.52665C11.9484 10.2299 10.9946 10.625 10 10.625C9.00544 10.625 8.05161 10.2299 7.34835 9.52665C6.64509 8.82339 6.25 7.86956 6.25 6.875C6.25 6.70924 6.31585 6.55027 6.43306 6.43306C6.55027 6.31585 6.70924 6.25 6.875 6.25C7.04076 6.25 7.19973 6.31585 7.31694 6.43306C7.43415 6.55027 7.5 6.70924 7.5 6.875C7.5 7.53804 7.76339 8.17393 8.23223 8.64277C8.70107 9.11161 9.33696 9.375 10 9.375C10.663 9.375 11.2989 9.11161 11.7678 8.64277C12.2366 8.17393 12.5 7.53804 12.5 6.875C12.5 6.70924 12.5658 6.55027 12.6831 6.43306C12.8003 6.31585 12.9592 6.25 13.125 6.25C13.2908 6.25 13.4497 6.31585 13.5669 6.43306C13.6842 6.55027 13.75 6.70924 13.75 6.875Z"
                fill="#FE7F28"
              />
            </svg>
          }
        />

        {/* contents */}
        <div className="flex items-center gap-4">
          {supportDatas.map((data) => (
            <CareerAgentCard key={data.title.split(' ').join('-').toLowerCase()} data={data} />
          ))}
        </div>
      </div>
    </WrapperLight>
  )
}
