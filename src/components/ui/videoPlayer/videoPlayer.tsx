'use client'

import { useRef, useState } from 'react'
import PlayIcon from '@/assets/icons/play-color.svg'
import Image from 'next/image'

type Props = {
  src: string
  poster: string
}

export default function VideoPlayer({ src, poster }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const handlePlay = () => {
    videoRef.current?.play()
    setPlaying(true)
  }

  return (
    <div className="relative w-full overflow-hidden rounded-xl">
      {/* Video */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="aspect-video h-full w-full object-cover"
        controls={playing}
      />

      {/* Play Button Overlay */}
      {!playing && (
        <button
          onClick={handlePlay}
          className="absolute inset-0 flex cursor-pointer items-center justify-center"
        >
          <Image src={PlayIcon} alt="play icon" />
        </button>
      )}
    </div>
  )
}
