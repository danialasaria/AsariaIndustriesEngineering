'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation({ onLogoClick }) {
  const pathname = usePathname()

  return (
    <header className="header">
      <nav className="nav-container">
        <a href="/" onClick={onLogoClick} className="logo">
          ASARIA INDUSTRIES
        </a>
        <div className="nav-links">
          <Link href="/about" className={pathname === '/about' ? 'active' : ''}>
            About
          </Link>
          <Link href="/team" className={pathname === '/team' ? 'active' : ''}>
            Team
          </Link>
          <Link href="/careers" className={pathname === '/team' ? 'active' : ''}>
            Careers
          </Link>
          <Link href="/projects" className={pathname === '/projects' ? 'active' : ''}>
            Projects
          </Link>
          <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
} 