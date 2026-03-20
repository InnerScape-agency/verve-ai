import Client1 from '@/assets/clients/1.png'
import Client2 from '@/assets/clients/2.png'
import Client3 from '@/assets/clients/3.png'
import Client4 from '@/assets/clients/4.png'
import Client5 from '@/assets/clients/5.png'
import Client6 from '@/assets/clients/6.png'
import Image from 'next/image'

export const clients = [Client1, Client2, Client3, Client4, Client5, Client6]

export default function Clients() {
  return (
    <div className="mt-23 flex w-full flex-col items-center justify-center gap-8">
      <p className="font-jakarta text-2xl leading-7.5 text-black">
        Join thousands of candidates landing jobs at
      </p>

      <div className="flex w-full items-center justify-between text-2xl text-black">
        {clients.map((client, id) => (
          <Image
            key={'client-image-' + id}
            src={client}
            alt={'client-image-' + id}
            className="h-8 w-fit"
          />
        ))}
      </div>
    </div>
  )
}
