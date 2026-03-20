import { interviews, interviewsLight } from '@/constant/feature/interview'
import InterviewCard from './interview.card'
import Badge from '../ui/badge/badge'
import WrapperDark from '../ui/wrapper/wrapper.dark'

export default function FeatureInterviewMadeEasy({
  varient = 'light',
}: {
  varient?: 'light' | 'dark'
}) {
  switch (varient) {
    case 'light':
      return (
        <section className="flex w-full max-w-350 items-center justify-center rounded-xl pt-6 pb-24">
          <div className="container">
            <div className="flex flex-col items-center justify-center gap-16">
              <header className="flex flex-col items-center justify-center gap-5">
                <Badge
                  varient="light"
                  title={'Interview Made Easy'}
                  icon={
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_7745_28696)">
                        <path
                          opacity="0.3"
                          d="M12.5 6.25C11.837 6.25 11.2011 6.51339 10.7322 6.98223C10.2634 7.45107 10 8.08696 10 8.75C10 8.08696 9.73661 7.45107 9.26777 6.98223C8.79893 6.51339 8.16304 6.25 7.5 6.25H1.875V15.625H7.5C8.16304 15.625 8.79893 15.8884 9.26777 16.3572C9.73661 16.8261 10 17.462 10 18.125C10 17.462 10.2634 16.8261 10.7322 16.3572C11.2011 15.8884 11.837 15.625 12.5 15.625H18.125V6.25H12.5Z"
                          fill="#FE7F28"
                        />
                        <path
                          d="M10 8.75C10 8.08696 10.2634 7.45107 10.7322 6.98223C11.2011 6.51339 11.837 6.25 12.5 6.25H18.125V15.625H12.5C11.837 15.625 11.2011 15.8884 10.7322 16.3572C10.2634 16.8261 10 17.462 10 18.125"
                          stroke="#FE7F28"
                          stroke-width="1.4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M1.875 15.625H7.5C8.16304 15.625 8.79893 15.8884 9.26777 16.3572C9.73661 16.8261 10 17.462 10 18.125V8.75C10 8.08696 9.73661 7.45107 9.26777 6.98223C8.79893 6.51339 8.16304 6.25 7.5 6.25H1.875V15.625Z"
                          stroke="#FE7F28"
                          stroke-width="1.4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.5 3.75C7.79108 3.36189 8.16853 3.04688 8.60246 2.82991C9.03638 2.61295 9.51486 2.5 10 2.5C10.4851 2.5 10.9636 2.61295 11.3975 2.82991C11.8315 3.04688 12.2089 3.36189 12.5 3.75"
                          stroke="#FE7F28"
                          stroke-width="1.4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_7745_28696">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                />

                <h2 className="h1 text-dark max-w-170 text-center">
                  Explore Specialized Tools For Every Interview Stage
                </h2>
              </header>

              {/* contents */}
              <div className="grid grid-cols-3 gap-8">
                {interviews.map((interview) => (
                  <InterviewCard
                    key={interview.title.split(' ').join('-').toLowerCase()}
                    interview={interview}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )

    case 'dark':
      return (
        <WrapperDark>
          <div className="flex flex-col items-center justify-center gap-16">
            <header className="flex flex-col items-center justify-center gap-5">
              <Badge
                varient="dark"
                title={'Interview Made Easy'}
                icon={
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_7760_42992)">
                      <path
                        opacity="0.3"
                        d="M12.5 6.25C11.837 6.25 11.2011 6.51339 10.7322 6.98223C10.2634 7.45107 10 8.08696 10 8.75C10 8.08696 9.73661 7.45107 9.26777 6.98223C8.79893 6.51339 8.16304 6.25 7.5 6.25H1.875V15.625H7.5C8.16304 15.625 8.79893 15.8884 9.26777 16.3572C9.73661 16.8261 10 17.462 10 18.125C10 17.462 10.2634 16.8261 10.7322 16.3572C11.2011 15.8884 11.837 15.625 12.5 15.625H18.125V6.25H12.5Z"
                        fill="#FE7F28"
                      />
                      <path
                        d="M10 8.75C10 8.08696 10.2634 7.45107 10.7322 6.98223C11.2011 6.51339 11.837 6.25 12.5 6.25H18.125V15.625H12.5C11.837 15.625 11.2011 15.8884 10.7322 16.3572C10.2634 16.8261 10 17.462 10 18.125"
                        stroke="#FE7F28"
                        stroke-width="1.4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.875 15.625H7.5C8.16304 15.625 8.79893 15.8884 9.26777 16.3572C9.73661 16.8261 10 17.462 10 18.125V8.75C10 8.08696 9.73661 7.45107 9.26777 6.98223C8.79893 6.51339 8.16304 6.25 7.5 6.25H1.875V15.625Z"
                        stroke="#FE7F28"
                        stroke-width="1.4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.5 3.75C7.79108 3.36189 8.16853 3.04688 8.60246 2.82991C9.03638 2.61295 9.51486 2.5 10 2.5C10.4851 2.5 10.9636 2.61295 11.3975 2.82991C11.8315 3.04688 12.2089 3.36189 12.5 3.75"
                        stroke="#FE7F28"
                        stroke-width="1.4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_7760_42992">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                }
              />

              <h2 className="h1 max-w-160 text-center text-white">
                Prepare For Your Upcoming Interviews Now
              </h2>
            </header>

            {/* contents */}
            <div className="grid grid-cols-3 gap-8">
              {interviewsLight.map((interview) => (
                <InterviewCard
                  key={interview.title.split(' ').join('-').toLowerCase()}
                  interview={interview}
                  varient="dark"
                />
              ))}
            </div>
          </div>
        </WrapperDark>
      )
  }
}
