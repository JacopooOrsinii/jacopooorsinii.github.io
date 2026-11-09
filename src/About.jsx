
import './App.css'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'

function About() {
  return (
    <main className="page">
      <Nav current="#/about" />

      <section className="about-page">
        <h1 className="about-title">
          About me<span>.</span>
        </h1>

        <div className="about-content">
          <p>
            I have a Master’s degree in Data Science from Università di
            Roma La Sapienza and a Bachelor’s degree in Economics and
            Management from Università degli Studi di Milano. My academic
            journey has allowed me to develop competencies in Machine
            Learning, statistical analysis, and computer vision, alongside
            practical skills in Python, including libraries like Pandas,
            Scikit-Learn, TensorFlow, and PyTorch, R, and PySpark.
          </p>

          <p>
            I am currently working at BIP, where I focus on developing
            Generative AI solutions, particularly AI-powered chatbots
            built with LangGraph. My work also involves managing and
            deploying these solutions within the Microsoft Azure
            ecosystem, contributing to the development of scalable and
            reliable AI applications. This experience allows me to
            combine my background in data science with emerging
            generative AI technologies to build practical solutions
            that address real-world business needs.
          </p>

          <p>
            I have applied my knowledge to real-world challenges. At
            Gambero Rosso spa, I conducted statistical research on
            Italian wine prices, identifying significant correlations
            with expert ratings. At Octo Telematics spa, I worked on
            developing a driving app that integrated geospatial data
            to deliver contextual tips and real-time insights,
            enhancing the user experience.
          </p>

          <p>
            The strengths I value most in myself are discipline and
            commitment. Whether working independently or as part of
            a team, I bring focused, consistent effort to every task
            I undertake. I believe that true progress is built
            through daily habits, perseverance, and staying dedicated
            even when challenges arise. This mindset allows me to
            balance the quality of my work with company deadlines.
          </p>

          <p>
            This is just a glimpse of who I am. The rest unfolds over
            time, through experiences, challenges, and the connections
            we build along the way, maybe even by working together.
          </p>
        </div>

        <div className="about-signature">
          <span>JACOPO ORSINI</span>
          <span>DATA SCIENTIST · ROME, ITALY</span>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default About
