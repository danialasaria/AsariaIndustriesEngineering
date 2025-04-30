import Image from 'next/image'

// Force this page to be statically rendered
export const dynamic = 'force-static'

// Enable static generation of this page
export const revalidate = 3600 // Revalidate every hour

export const metadata = {
  title: 'Team',
  description: 'Meet the innovative team behind Asaria Industries - engineers, visionaries, and industry experts.',
}

// LinkedIn SVG icon component
const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 448 512"
  >
    <path
      fill="currentColor"
      d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
    />
  </svg>
);

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
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>

        {/* <div className="team-member">
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
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div> */}

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
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 