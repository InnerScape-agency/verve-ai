'use client'

import { ChevronRight } from 'lucide-react'
import FormBG from '@/assets/gradient/contact-form-bg.png'
import { FormEvent } from 'react'

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const number = formData.get('number') as string
    const date = formData.get('date') as string
    const message = formData.get('message') as string

    console.log({ name, email, number, date, message })
  }

  return (
    <div
      style={{ backgroundImage: `url(${FormBG.src})` }}
      className="rounded-lg bg-cover bg-no-repeat p-8"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* name */}
        <div className="bg-dark-50 border-dark-200 flex items-center justify-between gap-0 rounded border p-4">
          <input
            className="font-inter placeholder:text-dark-800 text-dark-900 flex-1 text-lg outline-none focus-within:outline-none focus:outline-none"
            placeholder="Nguyen Shane"
            type="text"
            name="name"
            id="name"
            required
          />

          <span className="w-fit">
            <svg
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5625 10.6875C12.9727 10.6875 15.75 13.4648 15.75 16.875C15.75 17.5078 15.2227 18 14.625 18H1.125C0.492188 18 0 17.5078 0 16.875C0 13.4648 2.74219 10.6875 6.1875 10.6875H9.5625ZM1.6875 16.3125H14.0273C13.7461 14.0977 11.8477 12.375 9.5625 12.375H6.1875C3.86719 12.375 1.96875 14.0977 1.6875 16.3125ZM7.875 9C5.37891 9 3.375 6.99609 3.375 4.5C3.375 2.03906 5.37891 0 7.875 0C10.3359 0 12.375 2.03906 12.375 4.5C12.375 6.99609 10.3359 9 7.875 9ZM7.875 1.6875C6.29297 1.6875 5.0625 2.95312 5.0625 4.5C5.0625 6.08203 6.29297 7.3125 7.875 7.3125C9.42188 7.3125 10.6875 6.08203 10.6875 4.5C10.6875 2.95312 9.42188 1.6875 7.875 1.6875Z"
                fill="black"
              />
            </svg>
          </span>
        </div>

        {/* email */}
        <div className="bg-dark-50 border-dark-200 flex items-center justify-between gap-0 rounded border p-4">
          <input
            className="font-inter placeholder:text-dark-800 text-dark-900 flex-1 text-lg outline-none focus-within:outline-none focus:outline-none"
            placeholder="example@gmail.com"
            type="email"
            name="email"
            id="email"
            required
          />

          <span className="w-fit">
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 2.25C0 1.01953 0.984375 0 2.25 0H15.75C16.9805 0 18 1.01953 18 2.25V11.25C18 12.5156 16.9805 13.5 15.75 13.5H2.25C0.984375 13.5 0 12.5156 0 11.25V2.25ZM1.6875 2.25V3.05859L7.73438 8.01562C8.47266 8.61328 9.49219 8.61328 10.2305 8.01562L16.3125 3.05859V2.25C16.3125 1.96875 16.0312 1.6875 15.75 1.6875H2.25C1.93359 1.6875 1.6875 1.96875 1.6875 2.25ZM1.6875 5.23828V11.25C1.6875 11.5664 1.93359 11.8125 2.25 11.8125H15.75C16.0312 11.8125 16.3125 11.5664 16.3125 11.25V5.23828L11.3203 9.31641C9.94922 10.4414 8.01562 10.4414 6.64453 9.31641L1.6875 5.23828Z"
                fill="black"
              />
            </svg>
          </span>
        </div>

        {/* number */}
        <div className="bg-dark-50 border-dark-200 flex items-center justify-between gap-0 rounded border p-4">
          <input
            className="font-inter placeholder:text-dark-800 text-dark-900 flex-1 text-lg outline-none focus-within:outline-none focus:outline-none"
            placeholder="+880 1234567899"
            type="text"
            name="number"
            id="number"
            required
          />

          <span className="w-fit">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.87166 12.1283C4.25871 10.5122 3.01829 8.56325 2.23716 6.41777C1.80741 5.24477 2.20116 3.95627 3.08466 3.07277L3.63141 2.52677C3.7784 2.37948 3.95299 2.26263 4.1452 2.1829C4.3374 2.10317 4.54345 2.06213 4.75153 2.06213C4.95962 2.06213 5.16566 2.10317 5.35787 2.1829C5.55007 2.26263 5.72467 2.37948 5.87166 2.52677L7.15191 3.80702C7.29919 3.95401 7.41605 4.1286 7.49577 4.32081C7.5755 4.51301 7.61654 4.71906 7.61654 4.92714C7.61654 5.13523 7.5755 5.34127 7.49577 5.53348C7.41605 5.72568 7.29919 5.90028 7.15191 6.04727L6.83691 6.36227C6.71082 6.48833 6.6108 6.63799 6.54256 6.80271C6.47432 6.96743 6.4392 7.14397 6.4392 7.32227C6.4392 7.50056 6.47432 7.67711 6.54256 7.84183C6.6108 8.00655 6.71082 8.15621 6.83691 8.28227L9.71691 11.163C9.84297 11.2891 9.99263 11.3891 10.1573 11.4574C10.3221 11.5256 10.4986 11.5607 10.6769 11.5607C10.8552 11.5607 11.0317 11.5256 11.1965 11.4574C11.3612 11.3891 11.5108 11.2891 11.6369 11.163L11.9527 10.848C12.0996 10.7007 12.2742 10.5839 12.4664 10.5042C12.6587 10.4244 12.8647 10.3834 13.0728 10.3834C13.2809 10.3834 13.4869 10.4244 13.6791 10.5042C13.8713 10.5839 14.0459 10.7007 14.1929 10.848L15.4732 12.1283C15.6204 12.2753 15.7373 12.4499 15.817 12.6421C15.8968 12.8343 15.9378 13.0403 15.9378 13.2484C15.9378 13.4565 15.8968 13.6625 15.817 13.8547C15.7373 14.0469 15.6204 14.2215 15.4732 14.3685L14.9272 14.9145C14.0437 15.7988 12.7552 16.1925 11.5822 15.7628C9.43667 14.9816 7.48773 13.7412 5.87166 12.1283Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>

        {/* date */}
        <div className="bg-dark-50 border-dark-200 flex items-center justify-between gap-0 rounded border p-4">
          <input
            className="font-inter placeholder:text-dark-800 text-dark-800 font-inter flex-1 text-lg outline-none focus-within:outline-none focus:outline-none"
            placeholder="mm/dd/yyyy"
            type="date"
            name="date"
            id="date"
            required
          />
        </div>

        {/* message */}
        <div className="bg-dark-50 border-dark-200 flex items-start justify-between gap-0 rounded border p-4">
          <textarea
            className="font-inter placeholder:text-dark-800 text-dark-900 h-30 flex-1 resize-none text-lg outline-none focus-within:outline-none focus:outline-none"
            placeholder="Write Message"
            name="message"
            id="message"
            required
          />
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" name="isSecure" id="isSecure" className="h-4 w-4" required />

          <p className="text-dark-900 font-inter text-lg leading-tight">
            By submitting, you agree to our secure data processing.
          </p>
        </div>

        <button
          type="submit"
          className="font-inter text-dark bg-primary mt-8 flex cursor-pointer items-center gap-1.5 rounded-lg px-6 py-4 text-base font-medium"
        >
          Submit Massage <ChevronRight width={16} height={16} />
        </button>
      </form>
    </div>
  )
}
