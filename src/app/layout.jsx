import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import { metadata } from './metadata'
import ClientLayout from './ClientLayout'
import { Providers } from './providers'

// Optimize font loading
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
})

export { metadata }

// Force static rendering for all pages
export const dynamic = 'force-static'

// Enable static generation with ISR
export const revalidate = 3600 // Revalidate every hour

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={spaceGrotesk.className}>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />

        {/* Load Font Awesome asynchronously */}
        <script 
          defer
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js"
        />
      </head>
      <body suppressHydrationWarning={true}>
        <Providers children={children} />
      </body>
    </html>
  )
} 