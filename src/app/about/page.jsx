export const metadata = {
  title: 'About | Asaria Industries',
  description: 'Technical expertise for select clients - AI, scalable systems, and digital transformation.',
}

export default function About() {
  return (
    <main className="main-content">
      <section className="about-hero">
        <h1>About<span className="bit-accent"></span></h1>
      </section>

      <section className="about-content">
        <div className="about-section">
          <p className="about-intro">
            We work with a select group of clients, bringing deep technical expertise 
            to complex challenges. Our experience spans implementing AI systems in 
            production, launching applications that scale to millions of users, and 
            guiding successful digital transformations.
          </p>

          <p className="about-intro">
            Our approach is hands-on and focused. We take on a limited number of 
            projects, ensuring each receives the full depth of our technical capabilities 
            and attention. Whether it's system architecture, codebase audits, or 
            strategic technical guidance, we deliver solutions that create lasting value.
          </p>
        </div>
      </section>
    </main>
  )
} 