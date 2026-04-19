import './Navbar.css'
import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import newLogo from '../newLogo.png'

const navLinks = [
  { label: 'About Us', href: '/about', isPage: true },
  { label: 'Program', href: '#program' },
  { label: 'Coaches', href: '#coaches' },
  { label: 'Pricing', href: '/pricing', isPage: true },
  { label: 'Locations', href: '/locations', isPage: true },
  { label: 'Blog', href: '/blogs', isPage: true },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

const portalLinks = [
  { label: 'Kids Login', href: 'https://skuare.mindmentorz.com/student-login' },
  { label: 'Parent Login', href: 'https://skuare.mindmentorz.com/parent-login' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.querySelector(href)
        element?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      const element = document.querySelector(href)
      element?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner container">
        <Link to="/" className="navbar-logo">
          <div className="logo-wrapper">
            <img src={newLogo} alt="Mind Mentorz" className="logo-image" />
            <span className="logo-since">✦ Since 2017</span>
          </div>
        </Link>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(l => (
            <li key={l.label}>
              {l.isPage ? (
                <Link to={l.href} onClick={() => setMenuOpen(false)}>{l.label}</Link>
              ) : (
                <a href={l.href} onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(l.href)
                }}>{l.label}</a>
              )}
            </li>
          ))}
          {portalLinks.map(l => (
            <li key={l.label}>
              <a className="nav-login-link" href={l.href} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>{l.label}</a>
            </li>
          ))}
          <li>
            <a
              href="https://skuare.mindmentorz.com/parent-login"
              className="btn-primary nav-cta"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              <span>Book Free Trial</span>
            </a>
          </li>
        </ul>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
