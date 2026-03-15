import { footerLinks } from '@/constant/footer/links.footer'
import Link from 'next/link'
import Button from '../ui/button/button'
import BgImage from '@/assets/gradient/footer-text-bg.png'

export default function Footer() {
  return (
    <footer className="container flex w-full flex-col gap-10 pt-24 pb-9">
      {/* top */}
      <div className="space-y-6">
        {/* links */}
        <nav className="grid grid-cols-5">
          {footerLinks.map((footerCol, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              <h2 className="font-jakarta text-dark text-2xl leading-8 font-semibold">
                {footerCol.title}
              </h2>

              <ul className="space-y-5">
                {footerCol.links.map((footerLink, id) => (
                  <li key={id}>
                    <Link
                      href={footerLink.link}
                      className="font-inter text-dark-800 text-base leading-6 font-medium"
                    >
                      {footerLink.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* ctas */}
        <div className="flex w-full items-center justify-between">
          {/* left */}
          <div className="flex items-center gap-4">
            <Button>
              Get Started For Free{' '}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 3L11 8L6 13"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>

            <Button>Log In</Button>
          </div>

          {/* todo: Social links */}
          {/* right */}
          <div className="flex items-center gap-3">
            <Button>
              Download Desktop App
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_7838_35054)">
                  <path
                    d="M10 11.25V2.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.875 11.25V16.25H3.125V11.25"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.125 8.125L10 11.25L6.875 8.125"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_7838_35054">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Button>

            {/* x.com */}
            <Button>
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.227 9.41088L21.5009 0H19.5403L12.3561 8.17133L6.61809 0H0L8.67696 12.3565L0 22.2253H1.96075L9.54743 13.5961L15.6072 22.2253H22.2253L13.227 9.41088ZM10.5415 12.4654L9.66238 11.2349L2.66723 1.44428H5.67883L11.324 9.34566L12.2031 10.5761L19.5412 20.8467H16.5296L10.5415 12.4654Z"
                  fill="currentColor"
                />
              </svg>
            </Button>

            {/* facebook.com */}
            <Button>
              <svg
                width="12"
                height="23"
                viewBox="0 0 12 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.47078 22.6105V12.2968H0V8.27734H3.47078V5.31311C3.47078 1.87313 5.5718 0 8.6405 0C10.1104 0 11.3738 0.10944 11.7419 0.158356V3.75333L9.61363 3.7543C7.94471 3.7543 7.62156 4.54735 7.62156 5.71109V8.27734H11.6018L11.0836 12.2968H7.62155V22.6105H3.47078Z"
                  fill="currentColor"
                />
              </svg>
            </Button>

            {/* instagram.com */}
            <Button>
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5806 2.26691C15.9397 2.26691 16.3375 2.27949 17.6644 2.34C18.4623 2.34976 19.2525 2.49626 20.0008 2.77313C20.5435 2.98242 21.0363 3.30301 21.4476 3.71428C21.8589 4.12556 22.1795 4.61839 22.3888 5.16106C22.6656 5.90938 22.8121 6.69963 22.8219 7.49746C22.8818 8.82442 22.895 9.22221 22.895 12.5812C22.895 15.9403 22.8824 16.3381 22.8219 17.665C22.8121 18.4629 22.6656 19.2531 22.3888 20.0014C22.1795 20.5441 21.8589 21.0369 21.4476 21.4482C21.0363 21.8595 20.5435 22.1801 20.0008 22.3894C19.2525 22.6662 18.4623 22.8127 17.6644 22.8225C16.3381 22.8824 15.9403 22.8956 12.5806 22.8956C9.22101 22.8956 8.82323 22.883 7.49687 22.8225C6.69903 22.8127 5.90878 22.6662 5.16046 22.3894C4.61779 22.1801 4.12496 21.8595 3.71369 21.4482C3.30241 21.0369 2.98182 20.5441 2.77253 20.0014C2.49566 19.2531 2.34916 18.4629 2.3394 17.665C2.27949 16.3381 2.26631 15.9403 2.26631 12.5812C2.26631 9.22221 2.27889 8.82442 2.3394 7.49746C2.34916 6.69963 2.49566 5.90938 2.77253 5.16106C2.98182 4.61839 3.30241 4.12556 3.71369 3.71428C4.12496 3.30301 4.61779 2.98242 5.16046 2.77313C5.90878 2.49626 6.69903 2.34976 7.49687 2.34C8.82382 2.28009 9.22161 2.26691 12.5806 2.26691ZM12.5806 0C9.1659 0 8.73576 0.0143778 7.39382 0.0754838C6.34966 0.0962526 5.31658 0.293956 4.33852 0.660184C3.49951 0.976297 2.73958 1.47167 2.11175 2.11175C1.4711 2.73981 0.975296 3.50017 0.658986 4.33972C0.292758 5.31778 0.0950546 6.35086 0.0742858 7.39502C0.0143779 8.73576 0 9.1659 0 12.5806C0 15.9954 0.0143778 16.4255 0.0754838 17.7675C0.0962526 18.8116 0.293956 19.8447 0.660184 20.8228C0.976143 21.6622 1.47153 22.4226 2.11175 23.0507C2.73993 23.691 3.50028 24.1863 4.33972 24.5023C5.31778 24.8685 6.35086 25.0662 7.39502 25.087C8.73696 25.1469 9.1653 25.1625 12.5818 25.1625C15.9984 25.1625 16.4267 25.1481 17.7687 25.087C18.8128 25.0662 19.8459 24.8685 20.824 24.5023C21.6594 24.1785 22.4181 23.6838 23.0515 23.05C23.6849 22.4162 24.179 21.6572 24.5023 20.8216C24.8685 19.8435 25.0662 18.8104 25.087 17.7663C25.1469 16.4255 25.1613 15.9954 25.1613 12.5806C25.1613 9.1659 25.1469 8.73576 25.0858 7.39382C25.065 6.34966 24.8673 5.31658 24.5011 4.33852C24.1851 3.49908 23.6898 2.73873 23.0495 2.11055C22.4214 1.47033 21.661 0.974945 20.8216 0.658986C19.8435 0.292758 18.8104 0.0950545 17.7663 0.0742857C16.4255 0.0143779 15.9954 0 12.5806 0Z"
                  fill="currentColor"
                />
                <path
                  d="M12.5025 6.24609C11.2247 6.24609 9.97563 6.62499 8.91322 7.33488C7.8508 8.04476 7.02275 9.05375 6.53377 10.2342C6.04479 11.4147 5.91685 12.7137 6.16613 13.9669C6.41541 15.2201 7.03071 16.3713 7.93422 17.2748C8.83773 18.1783 9.98888 18.7936 11.2421 19.0429C12.4953 19.2922 13.7943 19.1642 14.9748 18.6752C16.1553 18.1863 17.1642 17.3582 17.8741 16.2958C18.584 15.2334 18.9629 13.9843 18.9629 12.7066C18.9629 10.9931 18.2823 9.34989 17.0707 8.13832C15.8591 6.92675 14.2159 6.24609 12.5025 6.24609ZM12.5025 16.9001C11.6731 16.9001 10.8623 16.6542 10.1726 16.1934C9.48302 15.7326 8.94552 15.0776 8.62812 14.3114C8.31072 13.5451 8.22768 12.7019 8.38949 11.8884C8.55129 11.075 8.95069 10.3277 9.53717 9.74127C10.1236 9.15479 10.8709 8.75539 11.6843 8.59358C12.4978 8.43177 13.341 8.51482 14.1073 8.83222C14.8735 9.14962 15.5285 9.68712 15.9893 10.3767C16.4501 11.0664 16.696 11.8771 16.696 12.7066C16.696 13.8188 16.2542 14.8854 15.4677 15.6718C14.6813 16.4583 13.6147 16.9001 12.5025 16.9001Z"
                  fill="currentColor"
                />
                <path
                  d="M19.2596 7.49388C20.1047 7.49388 20.7898 6.80881 20.7898 5.96374C20.7898 5.11866 20.1047 4.43359 19.2596 4.43359C18.4146 4.43359 17.7295 5.11866 17.7295 5.96374C17.7295 6.80881 18.4146 7.49388 19.2596 7.49388Z"
                  fill="currentColor"
                />
              </svg>
            </Button>

            {/* youtube.com */}
            <Button>
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.0758 12.8424L11.2842 15.0091V10.6758L15.0758 12.8424Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2.16667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.42188 13.693V12.159C2.42188 9.02279 2.42188 7.45412 3.40229 6.44554C4.38379 5.43588 5.92862 5.39254 9.01721 5.30479C10.4797 5.26363 11.9747 5.23438 13.2552 5.23438C14.5357 5.23438 16.0296 5.26363 17.4932 5.30479C20.5818 5.39254 22.1266 5.43588 23.107 6.44554C24.0875 7.45521 24.0885 9.02387 24.0885 12.159V13.692C24.0885 16.8293 24.0885 18.3969 23.1081 19.4065C22.1266 20.4151 20.5829 20.4595 17.4932 20.5462C16.0307 20.5885 14.5357 20.6177 13.2552 20.6177C11.9747 20.6177 10.4808 20.5885 9.01721 20.5462C5.92862 20.4595 4.38379 20.4162 3.40229 19.4065C2.42079 18.3969 2.42188 16.8282 2.42188 13.693Z"
                  stroke="currentColor"
                  strokeWidth="2.16667"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* down */}
      <div>
        {/* branding */}
        <h2
          style={{
            backgroundImage: `url(${BgImage.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="bg-clip-text text-[322px] leading-[100%] font-bold text-transparent"
        >
          Verve AI
        </h2>

        {/* copy right */}
        <div className="font-inter text-dark mt-8 flex items-center justify-between pt-6 text-base leading-6">
          <p>© Copywright 2026 Verve AI. All rights reserved.</p>

          {/* links */}
          <div className="flex items-stretch gap-4">
            <Link href={'/'}>Refund Policy</Link>
            <div className="bg-dark-200 w-px" />
            <Link href={'/'}>Terms & conditions</Link>
            <div className="bg-dark-200 w-px" />
            <Link href={'/'}>Privacy policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
