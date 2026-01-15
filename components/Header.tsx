'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== 'undefined') {
        const mobile = window.innerWidth < 1151
        setIsMobile(mobile)
        // Close menu when switching to desktop
        if (!mobile && isMenuOpen) {
          setIsMenuOpen(false)
          document.body.classList.remove('main-body')
        }
      }
    }
    checkMobile()
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', checkMobile)
      return () => window.removeEventListener('resize', checkMobile)
    }
  }, [isMenuOpen])

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.classList.remove('main-body')
  }

  const handleBurgerClick = () => {
    const newState = !isMenuOpen
    setIsMenuOpen(newState)
    if (newState) {
      document.body.classList.add('main-body')
    } else {
      document.body.classList.remove('main-body')
    }
  }

  const toggleDropdown = (dropdownId: string) => {
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId)
  }

  const closeDropdown = () => {
    setOpenDropdown(null)
  }

  return (
    <header className="themeHeader">
      <div className="container-lg">
        <nav className="navbar navbar-expand-xl navbar-light" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '20px' }}>
          <div className="navbar-brand" style={{ margin: 0, padding: 0, flex: '0 0 auto' }}>
            <Link href="/">
              <Image 
                src="/assets/images/2025/demoday/logo.svg" 
                alt="logo" 
                width={150} 
                height={50}
                priority
              />
            </Link>
          </div>
          <div 
            className={`rightMenu ${isMobile ? (isMenuOpen ? 'show' : 'hide') : ''}`} 
            id="navbarSupportedContent"
            style={{
              display: isMobile ? (isMenuOpen ? 'block' : 'none') : 'flex',
              flex: '1 1 auto',
              justifyContent: 'center'
            }}
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/#speakers" className="nav-link" onClick={closeMenu}>Speakers</Link>
              </li>
              <li className="nav-item">
                <Link href="/#sponsors" className="nav-link" onClick={closeMenu}>Sponsors</Link>
              </li>
              <li className="nav-item">
                <Link href="/ibw_2025/agendas" className="nav-link" onClick={closeMenu}>Agenda</Link>
              </li>
              <li className="nav-item dropdown">
                <button 
                  className="nav-link dropdown-toggle" 
                  onClick={() => toggleDropdown('partners')}
                  aria-expanded={openDropdown === 'partners'}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '6px 10px',
                    cursor: 'pointer',
                    width: '100%',
                    textAlign: 'left'
                  }}
                >
                  Partners
                </button>
                <ul 
                  className={`dropdown-menu dropdown-menu-end ${openDropdown === 'partners' ? 'show' : ''}`}
                  style={{
                    display: openDropdown === 'partners' ? 'block' : 'none'
                  }}
                >
                  <li><Link href="#partners" className="dropdown-item" onClick={() => { closeMenu(); closeDropdown(); }}>Media</Link></li>
                  <li><Link href="#partners" className="dropdown-item" onClick={() => { closeMenu(); closeDropdown(); }}>Community</Link></li>
                  <li><Link href="#partners" className="dropdown-item" onClick={() => { closeMenu(); closeDropdown(); }}>Special</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link href="/ibw_2025/demoday" className="nav-link" onClick={closeMenu}>IBW Demo Day</Link>
              </li>
              <li className="nav-item">
                <Link href="https://cardanohackathon.com/" className="nav-link" target="_blank" onClick={closeMenu}>Cardano Hackathon</Link>
              </li>
              <li className="nav-item dropdown">
                <button 
                  className="nav-link dropdown-toggle" 
                  onClick={() => toggleDropdown('sideEvents')}
                  aria-expanded={openDropdown === 'sideEvents'}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '6px 10px',
                    cursor: 'pointer',
                    width: '100%',
                    textAlign: 'left'
                  }}
                >
                  Side Events
                </button>
                <ul 
                  className={`dropdown-menu dropdown-menu-end ${openDropdown === 'sideEvents' ? 'show' : ''}`}
                  style={{
                    display: openDropdown === 'sideEvents' ? 'block' : 'none'
                  }}
                >
                  <li><Link href="https://tally.so/r/wgy75d" className="dropdown-item" target="_blank" onClick={() => { closeMenu(); closeDropdown(); }}>Apply Now</Link></li>
                  <li><Link href="https://ibw.se.ro/" className="dropdown-item" target="_blank" onClick={() => { closeMenu(); closeDropdown(); }}>Events Page</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link href="https://t.me/InsidrBot?start=signup" className="nav-link" target="_blank" onClick={closeMenu}>Networking App</Link>
              </li>
            </ul>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: '0 0 auto' }}>
            <Link 
              href="/tickets" 
              className="btn btn-primary"
              style={{ flexShrink: 0 }}
            >
              <div className="btn-inner" style={{
                background: 'linear-gradient(180deg, #151313 0%, #1C1818 100%)',
                border: '0px',
                padding: '6px 28px',
                borderRadius: '50px',
                position: 'relative',
                color: '#fff',
                fontSize: '16px',
                fontWeight: 500
              }}>Buy Ticket</div>
            </Link>
            <button 
              className={`burger mx-2 ${isMenuOpen ? 'show-x' : ''}`}
              id="burger" 
              type="button" 
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
              onClick={handleBurgerClick}
              style={{
                display: isMobile ? 'block' : 'none',
                position: 'relative',
                zIndex: 1000,
                background: 'transparent',
                border: 'none',
                padding: '0',
                cursor: 'pointer'
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
