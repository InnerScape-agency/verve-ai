import CtaBG from '@/assets/gradient/feature-cta-1.png'
import Badge from '../ui/badge/badge'

export default function FeatureCTA() {
  return (
    <section className="w-full px-5">
      <div
        style={{ backgroundImage: `url(${CtaBG.src})` }}
        className="w-full rounded-xl bg-cover px-5 py-24"
      >
        <div className="container flex h-fit w-full items-center justify-between">
          {/* left */}
          <div>
            <header className="flex flex-col items-start justify-start gap-5">
              <Badge
                varient="light"
                title={'Available Everywhere'}
                icon={
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_7745_27956)">
                      <path
                        d="M10 2.5C14.1421 2.5 17.5 5.85786 17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5Z"
                        stroke="#FE7F28"
                        stroke-width="1.4"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M10 9.375V13.75"
                        stroke="#FE7F28"
                        stroke-width="1.4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10 5.625C10.5178 5.625 10.9375 6.04473 10.9375 6.5625C10.9375 7.08027 10.5178 7.5 10 7.5C9.48223 7.5 9.0625 7.08027 9.0625 6.5625C9.0625 6.04473 9.48223 5.625 10 5.625Z"
                        fill="#FE7F28"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_7745_27956">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="matrix(1 0 0 -1 0 20)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                }
              />

              <h2 className="h1 max-w-160 text-left text-white">
                Get Interview Confidence On All Your Devices
              </h2>
            </header>
          </div>

          {/* right */}
          <div className="flex flex-col items-end justify-end gap-8">
            {/* top */}
            <div>
              <Badge
                varient="dark"
                title="Browser"
                icon={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_7918_13102)">
                      <path
                        d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
                        stroke="white"
                        stroke-width="1.3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.5 8C10.5 12 8 14 8 14C8 14 5.5 12 5.5 8C5.5 4 8 2 8 2C8 2 10.5 4 10.5 8Z"
                        stroke="white"
                        stroke-width="1.3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2.3418 6H13.6593"
                        stroke="white"
                        stroke-width="1.3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2.3418 10H13.6593"
                        stroke="white"
                        stroke-width="1.3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_7918_13102">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                }
              />
              <Badge
                varient="dark"
                title="MacOS"
                icon={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_7894_16989)">
                      <path
                        d="M8.01598 1.875C8.15465 1.33794 8.46798 0.862253 8.90665 0.522809C9.34533 0.183364 9.88443 -0.000555646 10.4391 1.26101e-06H10.5016C10.6342 1.26101e-06 10.7614 0.0526797 10.8552 0.146448C10.9489 0.240216 11.0016 0.367393 11.0016 0.500001C11.0016 0.632609 10.9489 0.759786 10.8552 0.853555C10.7614 0.947323 10.6342 1 10.5016 1H10.4391C10.1065 0.999972 9.78339 1.11046 9.52047 1.31411C9.25754 1.51775 9.06975 1.803 8.9866 2.125C8.95345 2.25347 8.87063 2.3635 8.75635 2.43089C8.64207 2.49829 8.50569 2.51753 8.37723 2.48438C8.24876 2.45122 8.13873 2.3684 8.07134 2.25412C8.00394 2.13984 7.9847 2.00347 8.01785 1.875H8.01598ZM13.9579 10.5994C13.9204 10.5137 13.8598 10.4401 13.7829 10.3869C12.7222 9.65813 12.5016 8.415 12.5016 7.5C12.5016 6.39563 13.3435 5.43375 13.8454 4.95813C13.8947 4.9114 13.934 4.8551 13.9609 4.79267C13.9878 4.73023 14.0016 4.66297 14.0016 4.595C14.0016 4.52703 13.9878 4.45977 13.9609 4.39734C13.934 4.3349 13.8947 4.2786 13.8454 4.23188C13.0529 3.48375 11.7404 3 10.5016 3C9.61176 3.0008 8.74201 3.26455 8.0016 3.75813C7.13793 3.17898 6.09944 2.91888 5.06474 3.02256C4.03004 3.12625 3.06381 3.58724 2.33223 4.32625C1.89488 4.77275 1.55172 5.30258 1.32314 5.88429C1.09456 6.466 0.985213 7.08771 1.0016 7.7125C1.02614 8.76709 1.26064 9.80621 1.69139 10.7691C2.12214 11.732 2.74051 12.5994 3.51035 13.3206C3.97398 13.7587 4.58815 14.0019 5.22598 14H10.706C11.047 14.0006 11.3845 13.9313 11.6975 13.7961C12.0106 13.661 12.2926 13.463 12.526 13.2144C12.9584 12.7491 13.3324 12.2327 13.6397 11.6769C14.0785 10.875 14.0222 10.75 13.9579 10.5994Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_7894_16989">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                }
              />
              <Badge
                varient="dark"
                title="Window"
                icon={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_7894_16995)">
                      <path
                        d="M6.5 8.99996V12.2275C6.5 12.3601 6.44732 12.4872 6.35355 12.581C6.25979 12.6748 6.13261 12.7275 6 12.7275C5.97003 12.7273 5.94014 12.7245 5.91062 12.7193L1.91062 11.9918C1.79542 11.9709 1.69121 11.9102 1.61617 11.8203C1.54113 11.7304 1.50002 11.6171 1.5 11.5V8.99996C1.5 8.86735 1.55268 8.74017 1.64645 8.6464C1.74021 8.55263 1.86739 8.49996 2 8.49996H6C6.13261 8.49996 6.25979 8.55263 6.35355 8.6464C6.44732 8.74017 6.5 8.86735 6.5 8.99996ZM6.32062 3.38871C6.26438 3.34174 6.1985 3.30771 6.12765 3.28903C6.0568 3.27035 5.98271 3.26746 5.91062 3.28058L1.91062 4.00808C1.79542 4.02901 1.69121 4.08971 1.61617 4.1796C1.54113 4.26949 1.50002 4.38286 1.5 4.49996V6.99996C1.5 7.13256 1.55268 7.25974 1.64645 7.35351C1.74021 7.44728 1.86739 7.49996 2 7.49996H6C6.13261 7.49996 6.25979 7.44728 6.35355 7.35351C6.44732 7.25974 6.5 7.13256 6.5 6.99996V3.77246C6.50001 3.69926 6.48395 3.62696 6.45296 3.56065C6.42197 3.49434 6.37679 3.43564 6.32062 3.38871ZM13 8.49996H8C7.86739 8.49996 7.74021 8.55263 7.64645 8.6464C7.55268 8.74017 7.5 8.86735 7.5 8.99996V12.5906C7.49987 12.7078 7.54092 12.8213 7.61597 12.9113C7.69102 13.0013 7.79531 13.0621 7.91062 13.0831L12.9106 13.9918C12.9401 13.9973 12.97 14.0001 13 14C13.1326 14 13.2598 13.9473 13.3536 13.8535C13.4473 13.7597 13.5 13.6326 13.5 13.5V8.99996C13.5 8.86735 13.4473 8.74017 13.3536 8.6464C13.2598 8.55263 13.1326 8.49996 13 8.49996ZM13.3206 2.11621C13.2644 2.06924 13.1985 2.03521 13.1277 2.01653C13.0568 1.99785 12.9827 1.99496 12.9106 2.00808L7.91062 2.91746C7.79542 2.93839 7.69121 2.99909 7.61617 3.08897C7.54113 3.17886 7.50002 3.29224 7.5 3.40933V6.99996C7.5 7.13256 7.55268 7.25974 7.64645 7.35351C7.74021 7.44728 7.86739 7.49996 8 7.49996H13C13.1326 7.49996 13.2598 7.44728 13.3536 7.35351C13.4473 7.25974 13.5 7.13256 13.5 6.99996V2.49996C13.5 2.42676 13.484 2.35446 13.453 2.28815C13.422 2.22184 13.3768 2.16314 13.3206 2.11621Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_7894_16995">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                }
              />
              <Badge
                varient="dark"
                title="Mobile"
                icon={
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_7894_17008)">
                      <path
                        d="M10.4688 1.25H4.21875C3.52937 1.25 2.96875 1.81062 2.96875 2.5V12.5C2.96875 13.1894 3.52937 13.75 4.21875 13.75H10.4688C11.1581 13.75 11.7188 13.1894 11.7188 12.5V2.5C11.7188 1.81062 11.1581 1.25 10.4688 1.25ZM4.21875 12.5V2.5H10.4688L10.47 12.5H4.21875Z"
                        fill="white"
                      />
                      <path
                        d="M7.34375 11.875C7.68893 11.875 7.96875 11.5952 7.96875 11.25C7.96875 10.9048 7.68893 10.625 7.34375 10.625C6.99857 10.625 6.71875 10.9048 6.71875 11.25C6.71875 11.5952 6.99857 11.875 7.34375 11.875Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_7894_17008">
                        <rect width="15" height="15" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                }
              />
            </div>

            <button className="font-inter text-dark bg-primary flex cursor-pointer items-center gap-1.5 rounded-lg px-6 py-4 text-base font-medium">
              Download{' '}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_7894_19132)">
                  <path
                    d="M10 11.25V2.5"
                    stroke="black"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.875 11.25V16.25H3.125V11.25"
                    stroke="black"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.125 8.125L10 11.25L6.875 8.125"
                    stroke="black"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_7894_19132">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
