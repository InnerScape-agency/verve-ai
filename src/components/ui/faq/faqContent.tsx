'use client'

import { Faq, faqs } from '@/constant/faq/faq'
import { useState } from 'react'

export default function FaqContent() {
  const [activeFaq, setActiveFaq] = useState<Faq>(faqs[0])

  return (
    <div className="w-full max-w-196 space-y-4 rounded-lg bg-[rgba(255,255,255,0.06)] p-6">
      {/* single faq item */}
      {faqs.map((faq) => (
        <div
          key={faq.id}
          className={`flex cursor-pointer flex-col gap-3 rounded-lg p-5 ${activeFaq.id === faq.id ? 'border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)]' : ''}`}
          onClick={() => setActiveFaq(faq)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') setActiveFaq(faq)
          }}
          role="button"
          tabIndex={0}
        >
          {/* question */}
          <div className="flex w-full items-center justify-between">
            <h3 className="font-jakarta w-full max-w-161.5 text-xl font-medium text-white">
              {faq.question}
            </h3>

            <span
              className={
                activeFaq.id === faq.id
                  ? 'rotate-45 text-[#FC632F] transition-all'
                  : 'text-[#CCC] transition-all'
              }
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.617 4.39614C11.6906 3.94949 12.3328 3.94949 12.4064 4.39614L13.3793 10.3027C13.4072 10.4719 13.5398 10.6045 13.709 10.6324L19.6156 11.6053C20.0622 11.6789 20.0622 12.3211 19.6156 12.3947L13.709 13.3676C13.5398 13.3955 13.4072 13.5281 13.3793 13.6973L12.4064 19.6039C12.3328 20.0505 11.6906 20.0505 11.617 19.6039L10.6441 13.6973C10.6163 13.5281 10.4837 13.3955 10.3145 13.3676L4.40786 12.3947C3.96121 12.3211 3.96121 11.6789 4.40786 11.6053L10.3145 10.6324C10.4836 10.6045 10.6163 10.4719 10.6441 10.3027L11.617 4.39614Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </div>

          {/* ans */}
          {activeFaq.id === faq.id && (
            <div className="w-full max-w-161.5">
              <p className="font-inter w-fit text-base font-normal text-[#CCC]">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
