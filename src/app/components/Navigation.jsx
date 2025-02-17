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
        
        <button 
          className={`mobile-menu-button ${isMenuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link href="/about" onClick={closeMenu} className={pathname === '/about' ? 'active' : ''}>
            About
          </Link>
          <Link href="/team" onClick={closeMenu} className={pathname === '/team' ? 'active' : ''}>
            Team
          </Link>
          <Link href="/projects" onClick={closeMenu} className={pathname === '/projects' ? 'active' : ''}>
            Projects
          </Link>
          <Link href="/careers" onClick={closeMenu} className={pathname === '/careers' ? 'active' : ''}>
            Careers
          </Link>
          <Link href="/contact" onClick={closeMenu} className={pathname === '/contact' ? 'active' : ''}>
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
} 