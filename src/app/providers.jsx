'use client'

import { IntroProvider } from './context/IntroContext'
import ClientLayout from './ClientLayout'

export function Providers({ children }) {
  return (
    <IntroProvider>
      <ClientLayout>
        {children}
      </ClientLayout>
    </IntroProvider>
  )
} 