import './App.css'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'

function Projects() {
  return (
    <main className="page">
      <Nav current="#/projects" />

      <section className="about-page">
        <h1 className="about-title">
          Projects<span>.</span>
        </h1>

        <div className="timeline">
          <article className="timeline-item">
            <p className="timeline-period">July 2024</p>
            <h3>Training Camp Intelligent Forecasting · KPMG</h3>
            <p>
              Implementation of a wide range of predictive algorithms, from
              autoregressive models to deep learning techniques, to tackle
              time series forecasting challenges. I applied my technical
              skills in time series forecasting to help bridge the gap
              between data science output and business decision-making. The
              collaboration with KPMG gave me experience at the intersection
              of analytics and strategy, offering a business-oriented
              perspective on how Machine Learning algorithms can support
              strategic business decisions.
            </p>
          </article>

          <article className="timeline-item">
            <p className="timeline-period">February 2024</p>
            <h3>Hackathon Synthetic Data · AINDO</h3>
            <p>
              Development and use of synthetic data for smart home sensor
              systems, addressing challenges related to data privacy, system
              reliability, and predictive analytics. The project overcame
              the limitations of traditional datasets, often limited,
              biased, or hard to apply to real-world conditions, by creating
              datasets better suited for Machine Learning algorithms,
              demonstrating how synthetic data can improve the performance
              and applicability of AI-driven models.
            </p>
            <p className="timeline-place">
              Recognition: 2nd place in the competition
            </p>
          </article>

          <article className="timeline-item">
            <h3>Coaching AI</h3>
            <p>
              Developed with mentor Paolo Baldriga, this project customizes a
              GPT model to help reduce university dropout rates. The AI is
              designed as a support tool that complements, rather than
              replaces, human interaction.
            </p>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default Projects
