import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">ASARIA INDUSTRIES</div>
          <p className="footer-tagline">Engineering Tomorrow</p>
        </div>
        <div className="footer-links">
          <div className="footer-section">
            <h4>Navigate</h4>
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
            <Link href="/team">Team</Link>
            <Link href="/contact">Connect</Link>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <a href="mailto:danial@asariaindustries.com">Email</a>
            <a href="https://linkedin.com/company/asaria-industries" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Asaria Industries LLC. All rights reserved</p>
      </div>
    </footer>
  )
} 