import Image from 'next/image'

// Force this page to be statically rendered
export const dynamic = 'force-static'

// Enable static generation of this page
export const revalidate = 3600 // Revalidate every hour

export const metadata = {
  title: 'Team',
  description: 'Meet the innovative team behind Asaria Industries - engineers, visionaries, and industry experts.',
}

export default function Team() {
  return (
    <main className="main-content">
      <section className="team-hero">
        <h1>Our Team<span className="bit-accent"></span></h1>
        <p className="subtitle">Innovators, engineers, and visionaries shaping the future</p>
      </section>

      <section className="team-grid">
        <div className="team-member">
          <div className="member-image">
            <Image 
              src="/DanialAsaria.jpeg" 
              alt="Danial Asaria" 
              width={240}
              height={240}
              className="team-image"
              priority={true}
              quality={95}
            />
            <div className="member-overlay"></div>
          </div>
          <div className="member-info">
            <h3>Danial Asaria<span className="bit-accent"></span></h3>
            <p className="member-title">Founder & CEO</p>
            <p className="member-bio">With a background in engineering at companies like Anduril, Snapchat, and Zanbato, I'm passionate about building software, investing, and entrepreneurship. I also enjoy teaching chess and supporting founders on their journey, learning from firms like 8VC, Draper Associates, and FCV.</p>
            <div className="member-links">
              <a href="https://www.linkedin.com/in/danial-asaria/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="team-member">
          <div className="member-image">
            <Image 
              src="/VincentVu.jpeg" 
              alt="Vincent Vu" 
              width={240}
              height={240}
              className="team-image"
              quality={95}
            />
            <div className="member-overlay"></div>
          </div>
          <div className="member-info">
            <h3>Vincent Vu<span className="bit-accent"></span></h3>
            <p className="member-title">Advisor</p>
            <p className="member-bio">I specialize in developing high-quality, user-first products. Previously, I worked at Coursera on platform services that support millions of learners globally. Now at Uplimit, I'm working with AI to enable effective upskilling for professionals and organizations. Engineering is my tool to create value and meaningful impact.</p>
            <div className="member-links">
              <a href="https://www.linkedin.com/in/vmvu/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="team-member">
          <div className="member-image">
            <Image 
              src="/AryanBhardwaj.jpeg" 
              alt="Aryan Bhardwaj" 
              width={240}
              height={240}
              className="team-image"
              quality={95}
            />
            <div className="member-overlay"></div>
          </div>
          <div className="member-info">
            <h3>Aryan Bhardwaj<span className="bit-accent"></span></h3>
            <p className="member-title">Chief of Staff</p>
            <p className="member-bio">I'm a data scientist and an MBA with a deep interest in solving complex problems through data-driven strategies. Currently, I serve as Chief of Staff, helping drive operational excellence and strategic growth. I approach every challenge with systems thinking and first principles, always looking for innovative solutions that create lasting impact.</p>
            <div className="member-links">
              <a href="https://www.linkedin.com/in/aaryanb/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 