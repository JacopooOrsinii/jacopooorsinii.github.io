import './App.css'

function Footer({ backHref = '#/', backLabel = 'Back to home ↑' }) {
  return (
    <footer>
      <span>© {new Date().getFullYear()} Jacopo Orsini</span>
      <a href={backHref}>{backLabel}</a>
    </footer>
  )
}

export default Footer
