import { ReactNode } from 'react'

export interface Highlights {
  id: string
  icon: ReactNode
  title: string
  description: string
  link: string
  last?: boolean
}

export const highlights: Highlights[] = [
  {
    id: 'ai-interview-copilot',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_7745_28128)">
          <path
            opacity="0.2"
            d="M27.9378 23.2499C28.6527 21.9152 29.0194 20.4217 29.0038 18.9076C28.9882 17.3936 28.5908 15.9079 27.8485 14.5882C27.1062 13.2685 26.043 12.1574 24.7572 11.3578C23.4714 10.5582 22.0047 10.0959 20.4928 10.0137C20.9702 11.371 21.1152 12.8229 20.9158 14.2478C20.7163 15.6727 20.1781 17.029 19.3463 18.203C18.5145 19.377 17.4133 20.3344 16.1352 20.9951C14.857 21.6557 13.4391 22.0003 12.0003 21.9999C11.8353 21.9999 11.6716 21.9999 11.5078 21.9862C11.939 23.211 12.6299 24.3281 13.5332 25.2608C14.4365 26.1936 15.5308 26.9201 16.7411 27.3904C17.9515 27.8606 19.2492 28.0637 20.5453 27.9855C21.8414 27.9073 23.1053 27.5498 24.2503 26.9374L27.7203 27.9574C27.8926 28.008 28.0754 28.0113 28.2494 27.9669C28.4234 27.9225 28.5822 27.832 28.7092 27.705C28.8362 27.5781 28.9266 27.4192 28.971 27.2452C29.0154 27.0712 29.0122 26.8885 28.9616 26.7162L27.9378 23.2499Z"
            fill="white"
          />
          <path
            d="M4.06329 17.2502C3.04461 15.3471 2.74385 13.1413 3.21587 11.0349C3.68788 8.92859 4.90121 7.06205 6.63463 5.77566C8.36804 4.48928 10.5061 3.86875 12.6588 4.02723C14.8116 4.18571 16.8357 5.11263 18.362 6.63898C19.8884 8.16533 20.8153 10.1894 20.9738 12.3422C21.1323 14.495 20.5117 16.633 19.2253 18.3664C17.939 20.0998 16.0724 21.3131 13.9661 21.7851C11.8597 22.2571 9.65389 21.9564 7.75079 20.9377L4.28079 21.9577C4.10848 22.0083 3.92573 22.0116 3.75173 21.9672C3.57773 21.9228 3.4189 21.8323 3.29191 21.7053C3.16493 21.5784 3.07449 21.4195 3.03008 21.2455C2.98567 21.0715 2.98894 20.8888 3.03954 20.7165L4.06329 17.2502Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.4928 10.0137C22.0047 10.0959 23.4714 10.5582 24.7572 11.3578C26.043 12.1574 27.1062 13.2685 27.8485 14.5882C28.5908 15.9079 28.9882 17.3936 29.0038 18.9076C29.0194 20.4217 28.6527 21.9152 27.9378 23.2499L28.9578 26.7199C29.0084 26.8922 29.0117 27.075 28.9673 27.249C28.9229 27.423 28.8324 27.5818 28.7054 27.7088C28.5785 27.8358 28.4196 27.9262 28.2456 27.9706C28.0716 28.015 27.8889 28.0118 27.7166 27.9612L24.2503 26.9374C23.1053 27.5498 21.8414 27.9073 20.5453 27.9855C19.2492 28.0637 17.9515 27.8606 16.7411 27.3904C15.5308 26.9201 14.4365 26.1936 13.5332 25.2608C12.6299 24.3281 11.939 23.211 11.5078 21.9862"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_7745_28128">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    title: 'AI Interview Copilot',
    description:
      'Practice realistic interview questions with an AI recruiter designed to simulate real hiring conversations.',
    link: '#',
  },
  {
    id: 'coding-copilot',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_7745_28143)">
          <path opacity="0.2" d="M24 21L30 16L24 11H8L2 16L8 21H24Z" fill="#CCCCCC" />
          <path
            d="M8 11L2 16L8 21"
            stroke="#CCCCCC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M24 11L30 16L24 21"
            stroke="#CCCCCC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 5L12 27"
            stroke="#CCCCCC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_7745_28143">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    title: 'Coding Copilot',
    description:
      'Practice realistic interview questions with an AI recruiter designed to simulate real hiring conversations.',
    link: '#',
  },
  {
    id: 'software-engineer-copilot',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_7745_28154)">
          <path
            opacity="0.2"
            d="M25 6H7C6.73478 6 6.48043 6.10536 6.29289 6.29289C6.10536 6.48043 6 6.73478 6 7V25C6 25.2652 6.10536 25.5196 6.29289 25.7071C6.48043 25.8946 6.73478 26 7 26H25C25.2652 26 25.5196 25.8946 25.7071 25.7071C25.8946 25.5196 26 25.2652 26 25V7C26 6.73478 25.8946 6.48043 25.7071 6.29289C25.5196 6.10536 25.2652 6 25 6ZM19 19H13V13H19V19Z"
            fill="#CCCCCC"
          />
          <path
            d="M19 13H13V19H19V13Z"
            stroke="#CCCCCC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M25 6H7C6.44772 6 6 6.44772 6 7V25C6 25.5523 6.44772 26 7 26H25C25.5523 26 26 25.5523 26 25V7C26 6.44772 25.5523 6 25 6Z"
            stroke="#CCCCCC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M26 13H29"
            stroke="#CCCCCC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M26 19H29"
            stroke="#CCCCCC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3 13H6"
            stroke="#CCCCCC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3 19H6"
            stroke="#CCCCCC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19 26V29"
            stroke="#CCCCCC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13 26V29"
            stroke="#CCCCCC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19 3V6"
            stroke="#CCCCCC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13 3V6"
            stroke="#CCCCCC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_7745_28154">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    title: 'Software Engineer Copilot',
    description:
      'Practice realistic interview questions with an AI recruiter designed to simulate real hiring conversations.',
    link: '#',
  },
  {
    id: 'online-assessment-copilot',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_7745_28172)">
          <path
            opacity="0.2"
            d="M20 5C20.6505 5.86476 21.0015 6.9179 21 8V9H11V8C10.9985 6.9179 11.3495 5.86476 12 5H7C6.73478 5 6.48043 5.10536 6.29289 5.29289C6.10536 5.48043 6 5.73478 6 6V27C6 27.2652 6.10536 27.5196 6.29289 27.7071C6.48043 27.8946 6.73478 28 7 28H25C25.2652 28 25.5196 27.8946 25.7071 27.7071C25.8946 27.5196 26 27.2652 26 27V6C26 5.73478 25.8946 5.48043 25.7071 5.29289C25.5196 5.10536 25.2652 5 25 5H20Z"
            fill="#CCCCCC"
          />
          <path
            d="M12 19H20"
            stroke="#CCCCCC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 15H20"
            stroke="#CCCCCC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 5H25C25.2652 5 25.5196 5.10536 25.7071 5.29289C25.8946 5.48043 26 5.73478 26 6V27C26 27.2652 25.8946 27.5196 25.7071 27.7071C25.5196 27.8946 25.2652 28 25 28H7C6.73478 28 6.48043 27.8946 6.29289 27.7071C6.10536 27.5196 6 27.2652 6 27V6C6 5.73478 6.10536 5.48043 6.29289 5.29289C6.48043 5.10536 6.73478 5 7 5H12"
            stroke="#CCCCCC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11 9V8C11 6.67392 11.5268 5.40215 12.4645 4.46447C13.4021 3.52678 14.6739 3 16 3C17.3261 3 18.5979 3.52678 19.5355 4.46447C20.4732 5.40215 21 6.67392 21 8V9H11Z"
            stroke="#CCCCCC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_7745_28172">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    title: 'Online Assessment Copilot',
    description:
      'Practice realistic interview questions with an AI recruiter designed to simulate real hiring conversations.',
    link: '#',
  },
  {
    id: 'ai-screening-interviews',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_7745_28184)">
          <path
            opacity="0.2"
            d="M16 4C14.22 4 12.4799 4.52784 10.9999 5.51677C9.51983 6.50571 8.36628 7.91131 7.68509 9.55585C7.0039 11.2004 6.82567 13.01 7.17294 14.7558C7.5202 16.5016 8.37737 18.1053 9.63604 19.364C10.8947 20.6226 12.4984 21.4798 14.2442 21.8271C15.99 22.1743 17.7996 21.9961 19.4442 21.3149C21.0887 20.6337 22.4943 19.4802 23.4832 18.0001C24.4722 16.5201 25 14.78 25 13C25 10.6131 24.0518 8.32387 22.364 6.63604C20.6761 4.94821 18.387 4 16 4ZM16 17C15.2089 17 14.4355 16.7654 13.7777 16.3259C13.1199 15.8864 12.6072 15.2616 12.3045 14.5307C12.0017 13.7998 11.9225 12.9956 12.0769 12.2196C12.2312 11.4437 12.6122 10.731 13.1716 10.1716C13.731 9.61216 14.4437 9.2312 15.2196 9.07686C15.9956 8.92252 16.7998 9.00173 17.5307 9.30448C18.2616 9.60723 18.8864 10.1199 19.3259 10.7777C19.7654 11.4355 20 12.2089 20 13C20 14.0609 19.5786 15.0783 18.8284 15.8284C18.0783 16.5786 17.0609 17 16 17Z"
            fill="#CCCCCC"
          />
          <path
            d="M16 22C20.9706 22 25 17.9706 25 13C25 8.02944 20.9706 4 16 4C11.0294 4 7 8.02944 7 13C7 17.9706 11.0294 22 16 22Z"
            stroke="#CCCCCC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 17C18.2091 17 20 15.2091 20 13C20 10.7909 18.2091 9 16 9C13.7909 9 12 10.7909 12 13C12 15.2091 13.7909 17 16 17Z"
            stroke="#CCCCCC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 22V26"
            stroke="#CCCCCC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4 26H28"
            stroke="#CCCCCC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_7745_28184">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    title: 'AI Screening Interviews',
    description:
      'Practice realistic interview questions with an AI recruiter designed to simulate real hiring conversations.',
    link: '#',
  },
  {
    id: 'data-science-analytics',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_7745_28196)">
          <path opacity="0.2" d="M26 5H19V26H26V5Z" fill="#CCCCCC" />
          <path
            d="M6 26V17H12"
            stroke="#CCCCCC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M28 26H4"
            stroke="#CCCCCC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 26V11H19"
            stroke="#CCCCCC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19 26V5H26V26"
            stroke="#CCCCCC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_7745_28196">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    title: 'Data Science & Analytics',
    description:
      'Practice realistic interview questions with an AI recruiter designed to simulate real hiring conversations.',
    link: '#',
  },
  {
    id: 'explore-all-domains',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_7745_28208)">
          <path
            opacity="0.2"
            d="M13 6H7C6.44772 6 6 6.44772 6 7V13C6 13.5523 6.44772 14 7 14H13C13.5523 14 14 13.5523 14 13V7C14 6.44772 13.5523 6 13 6Z"
            fill="#CCCCCC"
          />
          <path
            opacity="0.2"
            d="M25 6H19C18.4477 6 18 6.44772 18 7V13C18 13.5523 18.4477 14 19 14H25C25.5523 14 26 13.5523 26 13V7C26 6.44772 25.5523 6 25 6Z"
            fill="#CCCCCC"
          />
          <path
            opacity="0.2"
            d="M13 18H7C6.44772 18 6 18.4477 6 19V25C6 25.5523 6.44772 26 7 26H13C13.5523 26 14 25.5523 14 25V19C14 18.4477 13.5523 18 13 18Z"
            fill="#CCCCCC"
          />
          <path
            opacity="0.2"
            d="M25 18H19C18.4477 18 18 18.4477 18 19V25C18 25.5523 18.4477 26 19 26H25C25.5523 26 26 25.5523 26 25V19C26 18.4477 25.5523 18 25 18Z"
            fill="#CCCCCC"
          />
          <path
            d="M25 18H19C18.4477 18 18 18.4477 18 19V25C18 25.5523 18.4477 26 19 26H25C25.5523 26 26 25.5523 26 25V19C26 18.4477 25.5523 18 25 18Z"
            stroke="#CCCCCC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13 6H7C6.44772 6 6 6.44772 6 7V13C6 13.5523 6.44772 14 7 14H13C13.5523 14 14 13.5523 14 13V7C14 6.44772 13.5523 6 13 6Z"
            stroke="#CCCCCC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M25 6H19C18.4477 6 18 6.44772 18 7V13C18 13.5523 18.4477 14 19 14H25C25.5523 14 26 13.5523 26 13V7C26 6.44772 25.5523 6 25 6Z"
            stroke="#CCCCCC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13 18H7C6.44772 18 6 18.4477 6 19V25C6 25.5523 6.44772 26 7 26H13C13.5523 26 14 25.5523 14 25V19C14 18.4477 13.5523 18 13 18Z"
            stroke="#CCCCCC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_7745_28208">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    title: 'Explore All Domains',
    description:
      'Practice realistic interview questions with an AI recruiter designed to simulate real hiring conversations.',
    link: '#',
    last: true,
  },
]
