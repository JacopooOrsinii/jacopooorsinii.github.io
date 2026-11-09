
import { useEffect, useState } from 'react'
import './App.css'
import About from './About.jsx'
import Education from './Education.jsx'
import Experiences from './Experiences.jsx'
import Projects from './Projects.jsx'
import Publications from './Publications.jsx'
import CreditRisk from './CreditRisk.jsx'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'

const PORTFOLIO_ITEMS = [
  {
    title: 'Credit Risk Classification',
    description:
      'An interpretable XGBoost credit risk classifier on the German Credit dataset, with a leakage-safe pipeline, engineered features, and an AUC-ROC evaluation of 0.795-0.819.',
    href: '#/credit-risk',
  },
]

function HomePage() {
  return (
    <main className="page">
      <Nav current="#/" />

      <section className="hero" id="home">
        <div className="hero-text">
          <p className="eyebrow">WELCOME</p>

          <h1>
            Hi, I'm Jacopo<span>.</span>
          </h1>

          <p className="intro">
            Hi, I'm <strong>Jacopo Orsini</strong>, a Data Scientist with a
            passion for machine learning, statistics, and turning data into
            impact. This is my personal website where I share my background,
            experiences, and projects. I believe in showing up every day with
            <strong> intention</strong>, not just to get things done, but
            <strong> to grow through the process</strong>. Every challenge is an
            opportunity to learn something new, to refine skills, and to stretch
            beyond what was thought possible. It is fundamental to approach each
            step with curiosity, resilience, and positivity, knowing that
            consistency and a willingness to learn are what
            <strong> truly drive progress</strong>.
          </p>

          <div className="social-buttons">
            <a
              className="social-button"
              href="https://github.com/JacopooOrsinii"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <a
              className="social-button"
              href="https://www.linkedin.com/in/jacopo-orsini-366bb3173"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="portrait-wrapper">
          <img
            className="portrait"
            src="/profile.png"
            alt="Portrait of Jacopo Orsini"
          />
        </div>
      </section>

      <section className="projects" id="portfolio">
        <h2>Portfolio</h2>
        <p className="section-description">
          A space for the projects I'm building and the things I'm learning.
        </p>

        <div className="project-list">
          {PORTFOLIO_ITEMS.map((item) => (
            <a
              key={item.title}
              className="project-card"
              href={item.href}
              {...(item.external
                ? { target: '_blank', rel: 'noreferrer' }
                : {})}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </a>
          ))}
        </div>
      </section>

      <Footer backHref="#home" backLabel="Back to top ↑" />
    </main>
  )
}

function App() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash)
      window.scrollTo(0, 0)
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  if (hash === '#/about') {
    return <About />
  }

  if (hash === '#/education') {
    return <Education />
  }

  if (hash === '#/experiences') {
    return <Experiences />
  }

  if (hash === '#/projects') {
    return <Projects />
  }

  if (hash === '#/publications') {
    return <Publications />
  }

  if (hash === '#/credit-risk') {
    return <CreditRisk />
  }

  return <HomePage />
}

export default App
