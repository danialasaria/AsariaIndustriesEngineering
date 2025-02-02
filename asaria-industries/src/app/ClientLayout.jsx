'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import React from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

// Keep track of logo clicks at module level
let wasLogoClicked = false

export default function ClientLayout({ children }) {
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === '/'

  useEffect(() => {
    if (isHomePage && !wasLogoClicked) {
      document.body.style.overflow = 'hidden'
      
      // Prefetch all routes during the intro animation
      const routes = ['/', '/about', '/team', '/projects', '/contact']
      routes.forEach(route => {
        router.prefetch(route)
      })
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isHomePage, router])

  const onIntroComplete = () => {
    document.body.style.overflow = ''
    wasLogoClicked = false // Reset after intro completes
  }

  const handleLogoClick = (e) => {
    e.preventDefault()
    wasLogoClicked = true
    router.push('/')
  }

  return (
    <div className="app-container">
      <Navigation onLogoClick={handleLogoClick} />
      {React.cloneElement(children, { 
        shouldShowIntro: isHomePage && !wasLogoClicked,
        onIntroComplete
      })}
      <Footer />
    </div>
  )
} 