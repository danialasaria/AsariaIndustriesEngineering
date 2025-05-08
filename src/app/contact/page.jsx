'use client'

export default function Contact() {
  return (
    <main className="main-content">
      <section className="contact-section">
        <div className="contact-intro">
          <h1>Get in Touch<span className="bit-accent"></span></h1>
          <p className="subtitle">Let's discuss how we can transform your vision into reality</p>
        </div>
      
        <form className="contact-form" action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="6593ec1c-556c-4225-bb24-1322078bbf5b" />
          <input type="hidden" name="subject" value="New Contact Form Submission from Web3Forms" />
          <input type="hidden" name="from_name" value="Asaria Industries" />
      
          <div className="form-group-container">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input id="name" name="name" className="form-input" placeholder="Your name" type="text" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input id="phone" name="phone" className="form-input" placeholder="Your phone number" type="tel" />
              {/* <p>By entering your phone number, you agree to receive messages from us.</p> */}
            </div>
      
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input id="email" name="email" className="form-input" placeholder="Your email" type="email" required />
            </div>
      
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" name="message" className="form-textarea" placeholder="Your message" required></textarea>
            </div>
          </div>
      
          <button className="form-submit" type="submit">Send Message</button>
        </form>
      </section>
    </main>
  )
} 