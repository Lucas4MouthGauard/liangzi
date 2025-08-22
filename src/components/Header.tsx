import React, { useState, useEffect } from 'react'
import { Menu, X, Zap } from 'lucide-react'
import './Header.css'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo" onClick={() => scrollToSection('hero')}>
          <Zap className="logo-icon" />
          <span className="logo-text">PumpCat</span>
        </div>

                  <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                      <ul className="nav-list">
            <li><button onClick={() => scrollToSection('schrodinger-cat')}>Schrödinger's Cat</button></li>
            <li><button onClick={() => scrollToSection('entanglement')}>Quantum Entanglement</button></li>
            <li><button onClick={() => scrollToSection('quantum-theory')}>Quantum Theory</button></li>
            <li><button onClick={() => scrollToSection('interactive-demo')}>Interactive Demo</button></li>
            <li>
              <a 
                href="https://x.com/breadcat_xyz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="nav-x-button"
              >
                <svg className="x-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.56h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </li>
          </ul>
          </nav>

        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}

export default Header
