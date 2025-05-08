'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Navigation({ onLogoClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <nav className="nav-container">
        <Link href="/" onClick={onLogoClick} className="logo">
          ASARIA INDUSTRIES
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <Link href="/about" className={pathname === '/about' ? 'active' : ''}>
            About
          </Link>
          {/* <Link href="/team" className={pathname === '/team' ? 'active' : ''}>
            Team
          </Link> */}
          <Link href="/projects" className={pathname === '/projects' ? 'active' : ''}>
            Projects
          </Link>
          <Link href="/careers" className={pathname === '/careers' ? 'active' : ''}>
            Careers
          </Link>
          <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>
            Contact
          </Link>
        </div>

        {/* Mobile Navigation */}
        <button 
          className={`hamburger-button ${isMenuOpen ? 'open' : ''}`} 
          onClick={toggleMenu} 
          aria-label="Menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <Link href="/about" onClick={closeMenu}>About</Link>
          {/* <Link href="/team" onClick={closeMenu}>Team</Link> */}
          <Link href="/projects" onClick={closeMenu}>Projects</Link>
          <Link href="/careers" onClick={closeMenu}>Careers</Link>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
        </div>
      </nav>
    </header>
  )
} 