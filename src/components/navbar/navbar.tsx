import VerveAi from '@/assets/logo/verve-ai.png'
import ArrowIcon from '@/assets/icons/arrow.svg'
import Image from 'next/image'
import Link from 'next/link'
import MegaMenuToogle from '../ui/megaMenu/megaMenuToogle'
// import FeatureMenu from '../ui/megaMenu/featureMenu'

export default function Navbar() {
  return (
    <header className="relative flex w-full items-center justify-center px-5 py-6">
      <nav className="bg-dark-50 flex w-full max-w-210.5 items-center justify-between rounded-xl border border-white py-2 pr-2 pl-5.5">
        {/* logo part */}
        <Link href="/">
          <figure>
            <Image src={VerveAi} alt="Verve AI" className="max-h-8 w-auto" />
          </figure>
        </Link>

        {/* all links */}
        <ul className="body-r flex items-center justify-center gap-6">
          <li>
            <Link href="/">Home</Link>
          </li>

          <MegaMenuToogle title="features" />

          <li>
            <Link href="/">Pricing</Link>
          </li>

          <MegaMenuToogle title="resources" />
        </ul>

        {/* user actions */}
        <div>
          {/* flag dropdown */}
          <div></div>

          {/* button */}
          <Link href="#">
            <button className="bg-dark body-r-medium flex cursor-pointer items-center justify-between gap-2 rounded-lg px-6 py-4 text-white">
              Sign Up
              <Image src={ArrowIcon} alt="Arrow Icon" className="h-4 w-4" />
            </button>
          </Link>
        </div>
      </nav>

      {/* features menu */}
      {/* <div className="absolute bottom-0 left-1/2 h-101 w-full max-w-324 -translate-x-1/2 translate-y-full bg-dark-50">
        <FeatureMenu />
      </div> */}
    </header>
  )
}
