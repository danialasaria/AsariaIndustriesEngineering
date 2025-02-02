'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState, useContext } from 'react'
import React from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { useIntro } from './context/IntroContext'

export default function ClientLayout({ children }) {
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === '/'
  const { shouldShowIntro, setShouldShowIntro } = useIntro()
  useEffect(() => {
    if (isHomePage && shouldShowIntro) {
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
  }, [isHomePage, shouldShowIntro, router])

  const onIntroComplete = () => {
    document.body.style.overflow = ''
    setShouldShowIntro(false)
  }

  const handleLogoClick = async (e) => {
    e.preventDefault()
    setShouldShowIntro(false)
    await router.push('/')
  }

  return (
    <div className="app-container">
      <Navigation onLogoClick={handleLogoClick} />
      {React.cloneElement(children, { 
        shouldShowIntro: isHomePage && shouldShowIntro,
        onIntroComplete
      })}
      <Footer />
    </div>
  )
} 