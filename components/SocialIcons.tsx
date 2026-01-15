'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function SocialIcons() {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <div className="social-side">
      <div className="social-side-inner">
        <ul className="social-show" style={{ display: isExpanded ? 'block' : 'none' }}>
          <li>
            <Link href="https://t.me/ibw_official" target="_blank">
              <Image src="/assets/images/2025/telegram-icon.svg" alt="img" width={24} height={24} loading="lazy" />
            </Link>
          </li>
          <li>
            <Link href="https://x.com/IBWofficial" target="_blank">
              <Image src="/assets/images/2025/twitter-icon.svg" alt="img" width={24} height={24} loading="lazy" />
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/company/ibwofficial/" target="_blank">
              <Image src="/assets/images/2025/linkdin-icon.svg" alt="img" width={24} height={24} loading="lazy" />
            </Link>
          </li>
        </ul>
        <button 
          type="button" 
          className={`more-social ${isExpanded ? 'active' : ''}`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <Image src="/assets/images/2025/more-icons.svg" alt="img" width={24} height={24} loading="lazy" />
        </button>
      </div>
    </div>
  )
}
