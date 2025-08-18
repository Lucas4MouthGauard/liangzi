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
            <span className="logo-text">PumpCat</span>
          </div>
            <p className="footer-description">
              探索量子物理的奇妙世界，理解薛定谔的猫、量子纠缠等深奥概念。
              让科学变得有趣而易于理解。
            </p>
          </div>

          <div className="footer-section">
            <h4>快速链接</h4>
            <ul className="footer-links">
              <li><a href="#schrodinger-cat">薛定谔的猫</a></li>
              <li><a href="#entanglement">量子纠缠</a></li>
              <li><a href="#quantum-theory">量子理论</a></li>
              <li><a href="#interactive-demo">互动演示</a></li>
            </ul>
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
              © {currentYear} 量子猫. 用 <Heart className="heart-icon" /> 制作
            </p>
            <p className="footer-note">
              本网站仅用于教育和科普目的，不构成任何科学建议。
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
