import './App.css'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'

function Experiences() {
  return (
    <main className="page">
      <Nav current="#/experiences" />

      <section className="about-page">
        <h1 className="about-title">
          Work Experience<span>.</span>
        </h1>

        <div className="timeline">
          <article className="timeline-item">
            <p className="timeline-period">November 2025 – Present</p>
            <h3>Data Scientist · BIP</h3>
            <p className="timeline-place">Rome</p>
            <p>
              I develop and apply Machine Learning and Generative AI
              solutions, designing and building chatbots and AI agents with
              LangGraph and large language models, including agentic
              workflows and retrieval systems. I work within the Microsoft
              Azure ecosystem to deploy and manage these solutions, including
              Azure AI Search and Azure Blob Storage, with a strong focus on
              integrating models, data, and cloud services.
            </p>
          </article>

          <article className="timeline-item">
            <p className="timeline-period">January 2025 – May 2025</p>
            <h3>Data Science Intern · Octo Telematics spa</h3>
            <p className="timeline-place">Rome</p>
            <p>
              I contributed to the development of a driving app, designing
              and implementing contextual tips to improve the user
              experience and navigation. This experience gave me a clear
              understanding of what it means to work in a data-driven
              company that handles sensitive information, and helped me
              grow my teamwork skills.
            </p>
          </article>

          <article className="timeline-item">
            <p className="timeline-period">July 2022 – December 2022</p>
            <h3>Statistics Intern · Gambero Rosso spa</h3>
            <p className="timeline-place">Rome</p>
            <p>
              I conducted statistical research on Italian wine prices,
              analyzing the correlation between prices and the scores
              awarded by wine experts, using linear regression as the
              underlying model. One of the aspects I valued most was the
              chance to meet and exchange views with the company's President
              and CEO.
            </p>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default Experiences
