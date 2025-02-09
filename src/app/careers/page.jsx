export const metadata = {
  title: 'Careers | Asaria Industries',
  description: 'Join our team of exceptional professionals at Asaria Industries.',
}

export default function Careers() {
  return (
    <div className="careers-container">
      <main className="careers-page">
        <section className="careers-hero">
          <div className="hero-content">
            <h1 className="hero-title">We're Hiring!</h1>
          </div>
        </section>

        <section className="hiring-message">
          <h2 className="hiring-heading">Are you a super technical person?</h2>
          <div className="hiring-content">
            <p className="hiring-description">
              We are looking for exceptionally talented software professionals who are eager to challenge themselves.
            </p>
            <p className="hiring-description">
              Don't see a role for yourself? Reach out anyway! We're always eager to connect!
            </p>
            <a 
            href="mailto:danial@asariaindustries.com" 
            className="apply-button"
            aria-label="Apply now by sending an email"
          >
            Apply Now
          </a>
          </div>
        </section>
      </main>
    </div>
  )
}