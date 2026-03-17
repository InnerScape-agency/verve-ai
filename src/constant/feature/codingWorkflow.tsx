import { CodingWorkflow } from '@/types/workflow.type'

export const codingWorkflows: CodingWorkflow[] = [
  {
    num: '01',
    title: 'Setup & Start',
    description:
      'Install Chrome extension, launch coding copilot, and join your interview platform to start immediately.',
    icon: (
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_7730_15621)">
          <path
            opacity="0.2"
            d="M43.125 28.125V42.5742C43.1248 43.0708 42.9275 43.5471 42.5766 43.8984L34.5258 51.9492C34.2794 52.195 33.9695 52.3674 33.6308 52.4471C33.292 52.5268 32.9378 52.5107 32.6077 52.4005C32.2776 52.2903 31.9847 52.0904 31.7617 51.8232C31.5388 51.556 31.3946 51.232 31.3453 50.8875L30 41.25L43.125 28.125Z"
            fill="currentColor"
          />
          <path
            opacity="0.2"
            d="M31.8758 16.875H17.4266C16.93 16.8752 16.4538 17.0725 16.1024 17.4234L8.05163 25.4742C7.80582 25.7206 7.63343 26.0305 7.55373 26.3692C7.47404 26.708 7.49019 27.0622 7.60039 27.3923C7.71058 27.7224 7.91047 28.0153 8.17767 28.2383C8.44487 28.4612 8.76885 28.6054 9.11335 28.6547L18.7508 30L31.8758 16.875Z"
            fill="currentColor"
          />
          <path
            opacity="0.2"
            d="M22.1625 44.0202C21.2555 46.0101 18.1992 50.6249 9.375 50.6249C9.375 41.8007 13.9898 38.7444 15.9797 37.8374L22.1625 44.0202Z"
            fill="currentColor"
          />
          <path
            d="M44.7914 26.4585C50.4164 20.8335 50.768 14.1421 50.5922 11.1585C50.5629 10.7038 50.3691 10.2752 50.0469 9.95302C49.7247 9.6308 49.2961 9.43696 48.8414 9.40771C45.8578 9.23193 39.1711 9.5788 33.5414 15.2085L18.75 29.9999L30 41.2499L44.7914 26.4585Z"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M31.8758 16.875H17.4266C16.93 16.8752 16.4538 17.0725 16.1024 17.4234L8.05163 25.4742C7.80582 25.7206 7.63343 26.0305 7.55373 26.3692C7.47404 26.708 7.49019 27.0622 7.60039 27.3923C7.71058 27.7224 7.91047 28.0153 8.17767 28.2383C8.44487 28.4612 8.76885 28.6054 9.11335 28.6547L18.7508 30"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M43.125 28.125V42.5742C43.1248 43.0708 42.9275 43.5471 42.5766 43.8984L34.5258 51.9492C34.2794 52.195 33.9695 52.3674 33.6308 52.4471C33.292 52.5268 32.9378 52.5107 32.6077 52.4005C32.2776 52.2903 31.9847 52.0904 31.7617 51.8232C31.5388 51.556 31.3946 51.232 31.3453 50.8875L30 41.25"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.1625 44.0202C21.2555 46.0101 18.1992 50.6249 9.375 50.6249C9.375 41.8007 13.9898 38.7444 15.9797 37.8374"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_7730_15621">
            <rect width="60" height="60" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Snap & Solve Instantly',
    description:
      'Click plugin button or use screenshot hotkey—AI captures and solves any coding question immediately.',
    icon: (
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_7730_15647)">
          <path
            opacity="0.2"
            d="M18.4456 39.1403C16.2166 37.399 14.4112 35.1753 13.165 32.6362C11.9188 30.0971 11.2641 27.3085 11.2503 24.4801C11.194 14.3176 19.3878 5.85902 29.5479 5.62464C33.4855 5.52927 37.353 6.67628 40.6019 8.90294C43.8508 11.1296 46.316 14.3228 47.6477 18.0295C48.9794 21.7362 49.11 25.7682 48.021 29.5533C46.932 33.3385 44.6787 36.6846 41.5808 39.1168C40.8974 39.6466 40.3437 40.3251 39.9616 41.1007C39.5795 41.8763 39.379 42.7288 39.3753 43.5934V44.9996C39.3753 45.4969 39.1777 45.9738 38.8261 46.3255C38.4745 46.6771 37.9976 46.8746 37.5003 46.8746H22.5003C22.003 46.8746 21.5261 46.6771 21.1745 46.3255C20.8228 45.9738 20.6253 45.4969 20.6253 44.9996V43.5934C20.6244 42.7343 20.4276 41.8867 20.0499 41.115C19.6722 40.3434 19.1235 39.668 18.4456 39.1403Z"
            fill="white"
          />
          <path
            d="M20.625 54.375H39.375"
            stroke="white"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M30 46.875V33.75"
            stroke="white"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.5 26.25L30 33.75L37.5 26.25"
            stroke="white"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.4456 39.1403C16.2166 37.399 14.4112 35.1753 13.165 32.6362C11.9188 30.0971 11.2641 27.3085 11.2503 24.4801C11.194 14.3176 19.3878 5.85902 29.5479 5.62464C33.4855 5.52927 37.353 6.67628 40.6019 8.90294C43.8508 11.1296 46.316 14.3228 47.6477 18.0295C48.9794 21.7362 49.11 25.7682 48.021 29.5533C46.932 33.3385 44.6787 36.6846 41.5808 39.1168C40.8974 39.6466 40.3437 40.3251 39.9616 41.1007C39.5795 41.8763 39.379 42.7288 39.3753 43.5934V44.9996C39.3753 45.4969 39.1777 45.9738 38.8261 46.3255C38.4745 46.6771 37.9976 46.8746 37.5003 46.8746H22.5003C22.003 46.8746 21.5261 46.6771 21.1745 46.3255C20.8228 45.9738 20.6253 45.4969 20.6253 44.9996V43.5934C20.6244 42.7343 20.4276 41.8867 20.0499 41.115C19.6722 40.3434 19.1235 39.668 18.4456 39.1403Z"
            stroke="white"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_7730_15647">
            <rect width="60" height="60" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Improve and optimize',
    description:
      'Optionally optimize code, handle edge cases, or simplify logic with AI-powered follow-up suggestions.',
    icon: (
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_7730_15659)">
          <path
            d="M20.625 31.875L26.25 37.5L39.375 24.375"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M30 52.5C42.4264 52.5 52.5 42.4264 52.5 30C52.5 17.5736 42.4264 7.5 30 7.5C17.5736 7.5 7.5 17.5736 7.5 30C7.5 42.4264 17.5736 52.5 30 52.5Z"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_7730_15659">
            <rect width="60" height="60" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
]
