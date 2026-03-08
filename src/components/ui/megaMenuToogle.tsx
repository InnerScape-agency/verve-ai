'use client'

import { toggleOpen } from '@/redux/features/megaMenu/megaMenuSlice'
import { useDispatch } from 'react-redux'

export default function MegaMenuToogle({ title }: { title: 'features' | 'resources' }) {
  const dispatch = useDispatch()

  const handleToogle = (menuName: 'features' | 'resources') => {
    dispatch(toggleOpen(menuName))
  }

  return (
    <li>
      <button className="flex items-center gap-1" onClick={() => handleToogle(title)}>
        {title}
      </button>
    </li>
  )
}
