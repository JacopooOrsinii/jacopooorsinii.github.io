import './App.css'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'

const PUBLICATIONS = [
  {
    title:
      'Digital Twins in Healthcare: State of the Art, Bibliometric Analysis and Future Perspectives',
    venue: '20th International Conference on Scientometrics & Informetrics',
    date: 'July 2025',
    description:
      'A conference paper exploring how Digital Twins are transforming healthcare, evolving from simple digital models into interactive tools for medical training, planning, and personalized care. Through a bibliometric analysis, we highlighted the rapid growth of research driven by AI, AR/VR, and immersive technologies, which make Digital Twins increasingly realistic and impactful. We also presented the Rome Technopole project "Phygital Twin Technologies for Innovative Surgical Training & Planning" as a case study, showing concrete applications in surgical simulators and personalized patient planning.',
    link: 'https://issi2025.iiap.sci.am/wp-content/uploads/2025/07/20.-di_leo_fp_issi2025_Track_changes_265.pdf',
  },
  {
    title:
      'An Integrated and Flexible Review Framework to Evaluate the Evolution and Barriers of Digital-Twin Technologies in Industrial and Healthcare Domains',
    venue: 'Global Journal of Flexible Systems Management',
    date: 'June 2025',
    description:
      'This paper presents an Integrated Flexible Systematic Review (IFSR) framework to analyze how Digital Twin technologies are shaping both industry and healthcare. Analyzing 133 studies, it highlights key trends, enabling factors, and barriers in both domains. While Digital Twins are already mature in predictive maintenance and smart manufacturing, in healthcare they are still emerging, with promising applications in personalized medicine and diagnostics. The study also highlights cross-domain spillover effects, where industrial innovations like AR/VR and federated learning influence healthcare, while healthcare’s precision and ethical requirements shape industrial standards.',
    link: 'https://link.springer.com/article/10.1007/s40171-025-00447-x',
  },
]

function Publications() {
  return (
    <main className="page">
      <Nav current="#/publications" />

      <section className="about-page">
        <h1 className="about-title">
          Publications<span>.</span>
        </h1>

        <div className="timeline">
          {PUBLICATIONS.map((pub) => (
            <article className="timeline-item" key={pub.title}>
              <p className="timeline-period">{pub.date}</p>
              <h3>{pub.title}</h3>
              <p className="timeline-place">{pub.venue}</p>
              <p>{pub.description}</p>
              <a
                className="paper-button"
                href={pub.link}
                target="_blank"
                rel="noreferrer"
              >
                Read the paper ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default Publications
