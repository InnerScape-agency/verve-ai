'use client'

import { useState } from 'react'
import { whyChooseUs } from '@/constant/home/home.whyChooseUs'

export default function WhyChooseContent() {
  const [active, setActive] = useState(whyChooseUs[0])

  return (
    <div className="w-full">
      {whyChooseUs.map((item) => (
        <div key={item.id} className="w-full space-y-8">
          <div
            className={`w-full items-center rounded-md transition-all duration-300 ${active.id === item.id && 'bg-linear-to-tr from-white via-[#FC632F] via-75% to-white p-px'}`}
          >
            <div
              onClick={() => setActive(item)}
              className={`cursor-pointer rounded-lg px-5 transition ${active.id === item.id ? 'bg-white py-6' : 'py-0 opacity-60'} `}
            >
              <h3 className="font-jakarta text-dark flex items-center gap-2 text-2xl font-medium">
                <span className={`${active.id === item.id && 'text-[#FE7F28]'}`}>{item.icon}</span>
                {item.title}
              </h3>

              {active.id === item.id && (
                <p className="text-dark-800 font-inter mt-3 text-base font-normal">
                  {item.description}
                </p>
              )}
            </div>
          </div>

          {/* bar */}
          <div className="border-dark-200 mb-8 border last:mb-0" />
        </div>
      ))}
    </div>
  )
}
