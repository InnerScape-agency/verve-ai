import { InterviewSupport } from '@/types/interviewSupport.type'
import Image from 'next/image'

export default function InterviewSupportCard({ data }: { data: InterviewSupport }) {
  return (
    <div className="border-dark-900 flex h-59.5 w-76.25 flex-col items-start rounded-lg border bg-[#0E0E0E] p-5">
      <figure className="w-full flex-1">
        <Image src={data.image} alt={data.title} className="h-6 w-fit" />
      </figure>

      <div className="h-fit w-full space-y-1.5">
        <h3 className="font-inter text-lg font-medium text-white">{data.title}</h3>

        <p className="font-inter text-dark-500 text-sm leading-5">{data.description}</p>
      </div>
    </div>
  )
}
