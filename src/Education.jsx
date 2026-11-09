import './App.css'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'

function Education() {
  return (
    <main className="page">
      <Nav current="#/education" />

      <section className="about-page">
        <h1 className="about-title">
          Education<span>.</span>
        </h1>

        <div className="timeline">
          <article className="timeline-item">
            <p className="timeline-period">February 2023 – March 2025</p>
            <h3>Master's Degree in Data Science</h3>
            <p className="timeline-place">
              Università di Roma La Sapienza · Final grade: 103/110
            </p>
            <p>
              The program was built around four mandatory courses, with the
              rest chosen from thematic groups and a strong emphasis on group
              work. Key courses included{' '}
              <strong>Fundamentals of Data Science</strong> (Prof. Fabio
              Galasso), covering Python, Computer Vision, and Machine
              Learning and neural network models;{' '}
              <strong>Advanced Data Mining and Language Technology</strong>{' '}
              (Prof. Luca Becchetti, Prof. Fabrizio Silvestri), covering
              foundational algorithms such as PageRank as well as Large
              Language Models and Transformers;{' '}
              <strong>Data-Driven Modeling of Complex Systems</strong> (Prof.
              Walter Quattrociocchi), focused on complex systems and graph
              theory; and{' '}
              <strong>
                Quantitative Models for Economic Analysis and Management
              </strong>{' '}
              (Prof. Cinzia Daraio), which laid the groundwork for my
              Systematic Literature Review thesis.
            </p>
          </article>

          <article className="timeline-item">
            <p className="timeline-period">September 2019 – December 2022</p>
            <h3>Bachelor's Degree in Economics and Management</h3>
            <p className="timeline-place">
              Università degli Studi di Milano · Final grade: 101/110
            </p>
            <p>
              The program was structured around three pillars: Statistics,
              Business Sciences, and Economics, with a particular interest in
              statistics. My thesis applied sentiment analysis to Amazon
              Alexa reviews collected through the official API, for the{' '}
              <em>Statistics for Big Economic-Business Data</em> course
              (Prof. Giancarlo Manzi).
            </p>
          </article>

          <article className="timeline-item">
            <p className="timeline-period">Online · edX</p>
            <h3>Machine Learning and AI with Python (CS109xa)</h3>
            <p className="timeline-place">Harvard University</p>
            <p>
              A course focused on decision trees and random forests, building
              practical intuition for tree-based Machine Learning models.
            </p>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default Education
