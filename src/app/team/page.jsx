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
            <p className="member-bio">Software is the wind in my sail. Previously I worked on mission autonomy at Anduril, ad infrastructure at Snapchat, and scaling private markets at Zanbato/8VC. In a past life I was a professional chess player, and I still run a global chess school as well as hold the world record for the youngest American to win every scholastic championship. I'm very fortunate to work with the brilliant, kind people here at Asaria Industries and I have no doubt in my mind that we are building something truly generational.</p>
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
            <p className="member-bio">I'm a passionate self-taught engineer specializing in developing high-quality, user-centric products. Previously, I worked at Coursera on platform services that support millions of learners globally as well as a series A startup working on AI infra. Danial and I met in college leading our school hackathon where we created possibly the most complete set of open-source hackathon tools in the world.</p>
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