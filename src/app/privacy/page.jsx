export const metadata = {
  title: 'Privacy Policy | Asaria Industries',
  description: 'Learn how Asaria Industries collects, uses, and protects your information—including SMS consent details.'
}

export default function Privacy() {
  return (
    <main className="main-content">
      <section className="privacy-hero">
        <h1>Privacy Policy<span className="bit-accent"></span></h1>
      </section>

      <section className="privacy-content">
        <div className="privacy-section">
          <h2>1. Information We Collect</h2>
          <p>
            We collect the information you provide when you fill out forms on our site—such as your name, email address, phone number, and any message you send us. We also collect basic usage data (e.g. browser type, pages visited) to help improve our services.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use your information to:
          </p>
          <ul>
            <li>Respond to inquiries and deliver the services you request.</li>
            <li>Send administrative emails and—in the case you opt-in—SMS messages about our services.</li>
            <li>Improve and secure our website, products, and offerings.</li>
          </ul>

          <h2>3. SMS Communications</h2>
          <p>
            By opting in, you consent to receive recurring SMS messages from Asaria Industries at the phone number provided. Message frequency may vary. Message &amp; data rates may apply. Reply <strong>STOP</strong> to unsubscribe or <strong>HELP</strong> for assistance.
          </p>

          <h2>4. Sharing &amp; Disclosure</h2>
          <p>
            We do not sell your personal data. We may share information with trusted third-party providers who help us operate our business (e.g. email or SMS platforms) under confidentiality agreements, or when required by law.
          </p>

          <h2>5. Data Security</h2>
          <p>
            We implement reasonable technical and organizational measures to protect your information from unauthorized access, alteration, or disclosure.
          </p>

          <h2>6. Your Choices</h2>
          <p>
            You can request to access, correct, or delete your personal data at any time by contacting us at <a href="mailto:hello@asaria.co">hello@asaria.co</a>.
          </p>

          <h2>7. Updates</h2>
          <p>
            We may update this Privacy Policy from time to time. We will post any changes on this page and update the date below.
          </p>

          <p className="privacy-last-updated"><em>Last updated: July 2024</em></p>
        </div>
      </section>
    </main>
  )
}
