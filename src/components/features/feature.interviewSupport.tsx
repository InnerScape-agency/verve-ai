import { ChevronRight } from 'lucide-react'
import SectionHeader from '../ui/header/section.header'
import background from '@/assets/gradient/interview-support.png'
import InterviewSupportCard from './interviewSupportCard'
import { interviewSupports } from '@/constant/interviewSupport/interviewSupport'
import clsx from 'clsx'

export default function FeatureInterviewSupport() {
  return (
    <section className="w-full px-5">
      <div
        style={{ backgroundImage: `url(${background?.src})`, backgroundPositionY: -220 }}
        className={clsx(
          'bg-dark-bg flex w-full items-center justify-center rounded-xl bg-cover bg-no-repeat py-24',
        )}
      >
        <div className="space-y-16 overflow-hidden">
          {/* top */}
          <div className="container flex w-full items-end justify-between">
            <div className="max-w-138">
              <SectionHeader
                alingMent="left"
                semiTitle="One-way interview support"
                title="Compatible with all video interview "
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
                      d="M6.25 11.25V14.375C6.25 14.7065 6.1183 15.0245 5.88388 15.2589C5.64946 15.4933 5.33152 15.625 5 15.625H3.75C3.41848 15.625 3.10054 15.4933 2.86612 15.2589C2.6317 15.0245 2.5 14.7065 2.5 14.375V10H5C5.33152 10 5.64946 10.1317 5.88388 10.3661C6.1183 10.6005 6.25 10.9185 6.25 11.25ZM15 10C14.6685 10 14.3505 10.1317 14.1161 10.3661C13.8817 10.6005 13.75 10.9185 13.75 11.25V14.375C13.75 14.7065 13.8817 15.0245 14.1161 15.2589C14.3505 15.4933 14.6685 15.625 15 15.625H17.5V10H15Z"
                      fill="#FE7F28"
                    />
                    <path
                      d="M15.7727 4.27021C14.6376 3.12848 13.1891 2.34941 11.6108 2.03172C10.0325 1.71402 8.39541 1.872 6.90698 2.48565C5.41856 3.09929 4.1458 4.14097 3.24999 5.47869C2.35417 6.8164 1.87563 8.38994 1.875 9.9999V14.3749C1.875 14.8722 2.07254 15.3491 2.42417 15.7007C2.77581 16.0524 3.25272 16.2499 3.75 16.2499H5C5.49728 16.2499 5.9742 16.0524 6.32583 15.7007C6.67746 15.3491 6.875 14.8722 6.875 14.3749V11.2499C6.875 10.7526 6.67746 10.2757 6.32583 9.92407C5.9742 9.57244 5.49728 9.3749 5 9.3749H3.15313C3.27366 8.07172 3.76315 6.8299 4.56424 5.79498C5.36532 4.76006 6.44481 3.97492 7.67617 3.53159C8.90753 3.08826 10.2398 3.0051 11.5167 3.29186C12.7936 3.57862 13.9624 4.22342 14.8859 5.15068C16.0148 6.28529 16.7091 7.78042 16.8477 9.3749H15C14.5027 9.3749 14.0258 9.57244 13.6742 9.92407C13.3225 10.2757 13.125 10.7526 13.125 11.2499V14.3749C13.125 14.8722 13.3225 15.3491 13.6742 15.7007C14.0258 16.0524 14.5027 16.2499 15 16.2499H16.875C16.875 16.7472 16.6775 17.2241 16.3258 17.5757C15.9742 17.9274 15.4973 18.1249 15 18.1249H10.625C10.4592 18.1249 10.3003 18.1907 10.1831 18.308C10.0658 18.4252 10 18.5841 10 18.7499C10 18.9157 10.0658 19.0746 10.1831 19.1918C10.3003 19.3091 10.4592 19.3749 10.625 19.3749H15C15.8288 19.3749 16.6237 19.0457 17.2097 18.4596C17.7958 17.8736 18.125 17.0787 18.125 16.2499V9.9999C18.1291 8.93707 17.9234 7.88388 17.5197 6.90067C17.1161 5.91747 16.5224 5.02358 15.7727 4.27021ZM5 10.6249C5.16576 10.6249 5.32473 10.6907 5.44194 10.808C5.55915 10.9252 5.625 11.0841 5.625 11.2499V14.3749C5.625 14.5407 5.55915 14.6996 5.44194 14.8168C5.32473 14.9341 5.16576 14.9999 5 14.9999H3.75C3.58424 14.9999 3.42527 14.9341 3.30806 14.8168C3.19085 14.6996 3.125 14.5407 3.125 14.3749V10.6249H5ZM15 14.9999C14.8342 14.9999 14.6753 14.9341 14.5581 14.8168C14.4408 14.6996 14.375 14.5407 14.375 14.3749V11.2499C14.375 11.0841 14.4408 10.9252 14.5581 10.808C14.6753 10.6907 14.8342 10.6249 15 10.6249H16.875V14.9999H15Z"
                      fill="#FE7F28"
                    />
                  </svg>
                }
              />
            </div>

            <div className="max-w-130">
              <p className="font-inter text-dark-200 mt-5 max-w-[80%] text-lg leading-[170%]">
                Just one click and get the answer you need fast, reliable, and right when it matters
                most.
              </p>

              <button className="font-inter text-dark bg-primary mt-10 flex cursor-pointer items-center gap-1.5 rounded-lg px-6 py-4 text-base font-medium">
                Get Started For Free <ChevronRight width={16} height={16} />
              </button>
            </div>
          </div>

          {/* down */}
          <div className="overflow-x-scroll">
            <div className="flex w-fit gap-2.5">
              {interviewSupports.map((interview) => (
                <InterviewSupportCard
                  key={interview.title.split(' ').join('-').toLowerCase()}
                  data={interview}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
