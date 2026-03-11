'use client'

// import { selectMenuState } from '@/redux/features/megaMenu/megaMenuSlice'
import { Activity } from 'react'
// import { useSelector } from 'react-redux'
import MenuImage from '@/assets/gradient/menu.png'
import Image from 'next/image'
import BezierIcon from '@/assets/icons/BezierCurve.svg'

export default function FeatureMenu() {
  // const { isFeaturesOpen } = useSelector(selectMenuState)

  let renderCount = 1

  const handleRenderCount = () => {
    console.log(`FeatureMenu rendered ${renderCount} times`)
    renderCount++
  }

  handleRenderCount()

  return (
    <Activity mode="visible">
      <div className="flex h-full w-full items-center">
        {/* left side */}
        <div className="grid h-full w-full grid-cols-4">
          {/* first col */}
          <div>
            {/* title */}
            <div className="flex items-center justify-between">
              <p>Core Features</p>

              <figure className="rounded-lg border-[0.5px] border-[#0000001F] p-1.5">
                <Image src={BezierIcon} alt="core features icon" />
              </figure>
            </div>
          </div>
        </div>

        {/* right side */}
        <div
          style={{
            backgroundImage: `url(${MenuImage.src})`,
          }}
          className="h-full w-full max-w-82.5 bg-cover bg-center"
        ></div>
      </div>
    </Activity>
  )
}
