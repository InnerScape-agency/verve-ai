'use client'

import { selectMenuState } from '@/redux/features/megaMenu/megaMenuSlice'
import { Activity } from 'react'
import { useSelector } from 'react-redux'

export default function FeatureMenu() {
  const { isFeaturesOpen } = useSelector(selectMenuState)

  let renderCount = 1

  const handleRenderCount = () => {
    console.log(`FeatureMenu rendered ${renderCount} times`)
    renderCount++
  }

  handleRenderCount()

  return (
    <Activity mode={isFeaturesOpen ? 'visible' : 'hidden'}>
      <div>
        <h3 className="body-m font-semibold">Features</h3>
      </div>
    </Activity>
  )
}
