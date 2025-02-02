'use client';

import { createContext, useContext, useState } from 'react'

export const IntroContext = createContext()

export function useIntro() {
  const context = useContext(IntroContext)
  if (context === undefined) {
    throw new Error('useIntro must be used within an IntroProvider')
  }
  return context
}

export function IntroProvider({ children }) {
  const [shouldShowIntro, setShouldShowIntro] = useState(true)
  const value = { shouldShowIntro, setShouldShowIntro }
  
  return (
    <IntroContext.Provider value={value}>
      {children}
    </IntroContext.Provider>
  )
} 