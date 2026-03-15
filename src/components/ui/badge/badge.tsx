import { ReactNode } from 'react'

export default function Badge({ title, icon }: { title: string; icon: ReactNode }) {
  return (
    <div className="animate-gradient inline-flex items-center rounded-md bg-linear-to-r from-white via-[#FC632F] via-75% to-white p-px">
      <div className="bg-dark-bg flex items-center gap-1 rounded-md p-1.5 pr-3">
        {icon}

        {/* text */}
        <p className="font-inter text-sm font-normal text-white">{title}</p>
      </div>
    </div>
  )
}
