'use client'

import CodingBG from '@/assets/gradient/workflow.png'
import { CodingWorkflow } from '@/types/workflow.type'
import clsx from 'clsx'
import { useState } from 'react'

export default function CodingWorkflowCard({ data }: { data: CodingWorkflow }) {
  const [isHovered, setIsHovered] = useState(false)
  const { icon, num, title, description } = data

  return (
    <div
      className={clsx(
        'max-w-103 space-y-18 rounded-lg border border-[#CCCCCC] bg-transparent bg-cover bg-no-repeat p-8 transition-all duration-300',
      )}
      style={isHovered ? { backgroundImage: `url(${CodingBG.src})` } : {}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* top */}
      <div
        className={clsx(
          'flex w-full items-center justify-between transition-all duration-300',
          isHovered ? 'text-white' : '',
        )}
      >
        {icon}

        <h3
          className={clsx(
            'font-jakarta text-[48px] leading-14.5 transition-all duration-300',
            isHovered ? 'text-white' : 'text-[#CCC]',
          )}
        >
          {num}
        </h3>
      </div>

      {/* down */}
      <div>
        <h3
          className={clsx(
            'font-jakarta mb-3 text-[32px] font-medium transition-all duration-300',
            isHovered ? 'text-white' : 'text-dark',
          )}
        >
          {title}
        </h3>

        <p
          className={clsx(
            'font-inter mb-5 text-lg leading-7 transition-all duration-300',
            isHovered ? 'text-dark-200' : 'text-dark-800',
          )}
        >
          {description}
        </p>
      </div>
    </div>
  )
}
