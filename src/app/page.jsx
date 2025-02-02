'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useIntro } from './context/IntroContext'

export default function Home({ onIntroComplete }) {
  const { shouldShowIntro } = useIntro()
  const canvasRef = useRef(null)
  const introRef = useRef(null)

  useEffect(() => {
    if (!shouldShowIntro) return
    
    const canvas = canvasRef.current
    const intro = introRef.current
    if (!canvas || !intro) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    function initTextAnimation() {
      const textOverlay = intro.querySelector('.text-overlay')
      const text = intro.querySelector('.text-path')
      if (!text || !textOverlay) return
      
      const textContent = text.textContent
      text.textContent = ''

      // First make the text overlay visible
      textOverlay.style.opacity = '1'

      const letters = textContent.split('').map(letter => {
        const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan")
        tspan.textContent = letter
        tspan.style.opacity = 0
        text.appendChild(tspan)
        return tspan
      })

      text.style.opacity = 1

      gsap.to(letters, {
        opacity: 1,
        duration: 1.2,
        stagger: 0.12,
        ease: "power2.out",
        delay: 0.5
      })
    }

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()

    const radius = Math.min(canvas.width, canvas.height) * 0.3
    const startTime = Date.now()
    const totalDuration = 4000

    requestAnimationFrame(animate)
    setTimeout(initTextAnimation, 200)

    function drawGlobe(radius, rotation) {
      ctx.rotate(Math.PI * 0.12)
      
      const drawLine = (points, opacity) => {
        ctx.beginPath()
        points.forEach(({x, y}, i) => ctx[i ? 'lineTo' : 'moveTo'](x, y))
        ctx.strokeStyle = `rgba(0, 255, 200, ${opacity})`
        ctx.stroke()
      }

      const project = (angle, lat) => {
        const x = Math.cos(angle) * Math.cos(lat) * radius
        const y = Math.sin(lat) * radius
        const z = Math.sin(angle) * Math.cos(lat) * radius
        const scale = (z + radius * 2) / (radius * 3)
        return { x: x * scale, y: y * scale }
      }

      // Draw meridians
      for (let i = 0; i < 36; i++) {
        const angle = (i / 36) * Math.PI * 2 + rotation
        const points = Array.from({ length: 181 }, (_, j) => {
          const lat = (j - 90) * Math.PI / 180
          return project(angle, lat)
        })
        const opacity = (Math.cos(angle - rotation) + 1) / 2 * 0.4
        drawLine(points, opacity)
      }

      // Draw parallels
      for (let i = -80; i <= 80; i += 10) {
        const lat = i * Math.PI / 180
        const points = Array.from({ length: 361 }, (_, j) => {
          const angle = (j * Math.PI / 180) + rotation
          return project(angle, lat)
        })
        const opacity = Math.abs(Math.cos(lat)) * 0.4
        drawLine(points, opacity)
      }

      // Draw equator with glow
      ctx.lineWidth = 2
      ctx.shadowColor = 'rgba(0, 255, 200, 0.5)'
      ctx.shadowBlur = 10
      const equatorPoints = Array.from({ length: 361 }, (_, j) => {
        const angle = (j * Math.PI / 180) + rotation
        const { x } = project(angle, 0)
        return { x, y: 0 }
      })
      drawLine(equatorPoints, 0.8)
      ctx.shadowBlur = 0
    }

    function animate() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const elapsedTime = Date.now() - startTime
      const progress = elapsedTime / totalDuration

      ctx.save()
      ctx.translate(canvas.width / 2, canvas.height / 2)
      
      const rotation = Math.sin(elapsedTime * 0.0008) * 0.2 + elapsedTime * 0.0004
      
      ctx.globalAlpha = Math.min(1, progress * 2)
      drawGlobe(radius, rotation)
      
      ctx.restore()

      if (elapsedTime < totalDuration) {
        requestAnimationFrame(animate)
      } else {
        const overlay = intro.querySelector('.intro-overlay')
        if (overlay) overlay.style.opacity = '1'
        
        setTimeout(() => {
          intro.style.opacity = '0'
          setTimeout(() => {
            intro.style.display = 'none'
            onIntroComplete?.()
          }, 500)
        }, 300)
      }
    }

    window.addEventListener('resize', setCanvasSize)
    return () => window.removeEventListener('resize', setCanvasSize)
  }, [shouldShowIntro, onIntroComplete])

  return (
    <>
      {shouldShowIntro && (
        <div className="intro" ref={introRef}>
          <canvas ref={canvasRef} id="globeAnimation"></canvas>
          <svg id="text-animation" className="text-overlay">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor:'#00ffc8', stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:'#00c8ff', stopOpacity:1}} />
              </linearGradient>
            </defs>
            <text x="50%" y="50%" textAnchor="middle" className="text-path">ASARIA INDUSTRIES</text>
          </svg>
          <div className="intro-overlay"></div>
        </div>
      )}

      <main className="main-content">
        <section className="hero">
          <h1>Engineering<br/>Tomorrow<span className="bit-accent"></span></h1>
          <p className="subtitle">Building intelligent systems that transform industries</p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Global Projects</span>
            </div>
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Industry Solutions</span>
            </div>
          </div>
        </section>

        <section id="solutions" className="solutions">
          <h2>Our Solutions<span className="bit-accent"></span></h2>
          <div className="section-grid">
            <div className="solution-card">
              <div className="card-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M20 5L35 30H5L20 5Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>System Architecture<span className="bit-accent"></span></h3>
              <p>Engineering scalable foundations for complex systems</p>
              <div className="card-hover-effect"></div>
            </div>
            <div className="solution-card">
              <div className="card-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>AI Integration<span className="bit-accent"></span></h3>
              <p>Implementing intelligent decision systems</p>
              <div className="card-hover-effect"></div>
            </div>
            <div className="solution-card">
              <div className="card-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect x="10" y="10" width="20" height="20" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Digital Transform<span className="bit-accent"></span></h3>
              <p>Modernizing enterprise infrastructure</p>
              <div className="card-hover-effect"></div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Let's Build Together<span className="bit-accent"></span></h2>
              <p>Transform your vision into reality with our expertise in system architecture and AI integration.</p>
              <a href="mailto:danial@asariaindustries.com" className="cta-button">Contact Us</a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 