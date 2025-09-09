import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Github, Mail, Heart } from 'lucide-react'
import './Footer.css'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="footer-section">
            <div className="footer-logo">
              <Zap className="logo-icon" />
              <span className="logo-text">EndlessCat</span>
            </div>
            <div className="footer-description">
              <h3 className="description-title">Exploring the Wonderful World of Quantum Physics</h3>
              <p className="description-text">
                Understanding profound concepts like Schrödinger's Cat, quantum entanglement, and more.<br/>
                Making science fun and easy to understand.
              </p>
              <div className="description-features">
                <span className="feature-tag">Quantum Superposition</span>
                <span className="feature-tag">Observer Effect</span>
                <span className="feature-tag">Non-locality</span>
              </div>
            </div>
          </div>




        </motion.div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} EndlessCat. Made with <Heart className="heart-icon" /> ❤️
            </p>
            <p className="footer-note">
              This website is for educational and popular science purposes only and does not constitute any scientific advice.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="footer-particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="footer-particle"
            style={{
              '--delay': `${i * 0.1}s`,
              '--x': `${Math.random() * 100}%`,
              '--y': `${Math.random() * 100}%`
            } as React.CSSProperties}
          ></div>
        ))}
      </div>
    </footer>
  )
}

export default Footer
