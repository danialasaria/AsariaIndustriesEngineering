import Image from 'next/image'

// Force this page to be statically rendered
export const dynamic = 'force-static'

// Enable static generation of this page
export const revalidate = 3600 // Revalidate every hour

export const metadata = {
  title: 'Projects',
  description: 'Explore our innovative projects at Asaria Industries - from AI integration to system architecture solutions.',
}

export default function Projects() {
  return (
    <main className="main-content">
      <section className="projects-hero">
        <h1>Our Portfolio<span className="bit-accent"></span></h1>
        <p className="subtitle">Transforming industries through innovative solutions</p>
      </section>

      <section className="project-showcase">
        <div className="project-item">
          <div className="project-content">
            <div className="project-info">
              <a 
                href="https://apps.apple.com/us/app/cerca-dating-for-mutuals/id6738100998" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-title-link"
              >
                <h2>Cerca Dating<span className="bit-accent"></span></h2>
              </a>
              <p>Connecting people through their existing social circles</p>
            </div>
            <a 
              href="https://apps.apple.com/us/app/cerca-dating-for-mutuals/id6738100998" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              <Image 
                src="/CercaLogo.jpeg" 
                alt="Cerca Dating Logo" 
                width={150}
                height={150}
                className="project-logo"
                priority={true}
                quality={95}
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
} 