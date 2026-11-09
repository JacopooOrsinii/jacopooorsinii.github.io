import './App.css'

const LINKS = [
  { href: '#/about', label: 'About me' },
  { href: '#/education', label: 'Education' },
  { href: '#/experiences', label: 'Work Experience' },
  { href: '#/projects', label: 'Projects' },
  { href: '#/publications', label: 'Publications' },
]

function Nav({ current }) {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <a className="logo" href="#/">
          Jacopo Orsini
        </a>

        {LINKS.map((link) => (
          <span key={link.href} className="nav-group">
            <span className="nav-dot">•</span>
            <a
              className={
                'nav-link' + (current === link.href ? ' active' : '')
              }
              href={link.href}
            >
              {link.label}
            </a>
          </span>
        ))}
      </div>
    </nav>
  )
}

export default Nav
