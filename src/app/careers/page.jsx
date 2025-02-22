export const metadata = {
  title: 'Careers | Asaria Industries',
  description: 'Join our team of exceptional professionals at Asaria Industries.',
}

export default function Careers() {
  return (
    <main className="main-content">
      <section className="careers-hero">
        <h1>Careers<span className="bit-accent"></span></h1>
      </section>

      <section className="careers-content">
        <div className="careers-section">
          <p className="careers-intro">
            Asaria Industries is built around exceptional individuals. We take hiring seriously 
            and are deeply committed to finding the best people - those who are not only 
            brilliant at what they do, but are adept communicators and people we'll love 
            working with.
          </p>

          <p className="careers-intro">
            We work with businesses across different industries to solve complex technical 
            challenges. Every role comes with significant ownership - when we succeed, you 
            succeed. We value people who can learn rapidly, think independently, and craft 
            effective solutions to difficult problems.
          </p>

          <div className="roles-list">
            <div className="role-item">
              <a href="https://tally.so/r/wAjjlo" target="_blank">Software Engineer</a>
            </div>
            <div className="role-item">
              <a href="https://tally.so/r/wL660J" target="_blank">Software Engineer Intern</a>
            </div>
            <div className="role-item">
              <a href="https://tally.so/r/nGQQ0O" target="_blank">Designer</a>
            </div>
            <div className="role-item">
              <a href="https://tally.so/r/w7ppo2" target="_blank">Growth Intern</a>
            </div>
            <div className="role-item">
              <a href="https://tally.so/r/wM77L8" target="_blank">General Interest</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
