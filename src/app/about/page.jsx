export const metadata = {
  title: 'About',
  description: 'Learn about Asaria Industries - our mission, values, and commitment to innovation in technology and engineering.',
}

export default function About() {
  return (
    <main className="main-content">
      <section className="about-hero">
        <h1>About Us<span className="bit-accent"></span></h1>
        <p className="subtitle">Innovating for a brighter future</p>
      </section>

      <section className="about-section">
        <div className="about-text">
          <h2>Our Mission<span className="bit-accent"></span></h2>
          <p>At Asaria Industries, our mission is to leverage cutting-edge technology and engineering to solve complex challenges and create sustainable solutions. We aim to revolutionize industries through innovation, collaboration, and a relentless focus on quality and excellence.</p>
        </div>
        
        <div className="about-text">
          <h2>What We Do<span className="bit-accent"></span></h2>
          <p>We specialize in developing high-impact solutions in a variety of industries, from technology and engineering to business strategy and consulting. Our team works with global clients to craft tailor-made strategies that drive operational efficiency, innovation, and long-term growth.</p>
        </div>

        <div className="about-text">
          <h2>Our Values<span className="bit-accent"></span></h2>
          <ul>
            <li>
              <strong>Innovation</strong>
              We strive to push the boundaries of what's possible and challenge the status quo.
            </li>
            <li>
              <strong>Collaboration</strong>
              We believe in the power of teamwork and partner with clients and experts to deliver the best outcomes.
            </li>
            <li>
              <strong>Excellence</strong>
              Every project we undertake is fueled by a commitment to the highest standards of quality and performance.
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
} 