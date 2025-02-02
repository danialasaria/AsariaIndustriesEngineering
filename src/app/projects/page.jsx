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
    
      {/* Cerca Dating Project Section */}
      <section className="project-item">
        <h2>Cerca Dating<span className="bit-accent"></span></h2>
        <p>Cerca is a dating app that connects people within their existing social circles, leveraging mutual connections to create meaningful relationships.</p>
        {/* Logo with Link to App Store */}
        <a href="https://apps.apple.com/us/app/cerca-dating-for-mutuals/id6738100998" target="_blank" rel="noopener noreferrer">
          <Image 
            src="/CercaLogo.jpeg" 
            alt="Cerca Dating Logo" 
            width={300}
            height={300}
            className="project-logo"
            priority={true}
            quality={95}
          />
        </a>
      </section>
    </main>
  )
} 