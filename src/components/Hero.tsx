import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Zap, Atom, Eye } from 'lucide-react'
import { brandConfig } from '../config/brand'
import './Hero.css'

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { clientX, clientY } = e
        const { width, height, left, top } = heroRef.current.getBoundingClientRect()
        
        const x = (clientX - left - width / 2) / width
        const y = (clientY - top - height / 2) / height
        
        heroRef.current.style.setProperty('--mouse-x', `${x}`)
        heroRef.current.style.setProperty('--mouse-y', `${y}`)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToNext = () => {
    const nextSection = document.getElementById('schrodinger-cat')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            className="hero-badge"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Atom className="badge-icon" />
            <span>Quantum Physics</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <span className="title-main">Schrödinger's Cat</span>
            <span className="title-sub">The Wonderful World of Quantum Entanglement</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Explore the most famous thought experiment in quantum physics, understanding the mysteries of superposition, observation effects, and quantum entanglement.
            Here, reality and possibility intertwine, and the observer and the observed influence each other.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
                     <button className="quantum-btn primary" onClick={scrollToNext}>
           <Zap className="btn-icon" />
           Start Exploring
         </button>
         <button className="quantum-btn secondary" onClick={() => document.getElementById('interactive-demo')?.scrollIntoView({ behavior: 'smooth' })}>
           <Eye className="btn-icon" />
           Interactive Demo
         </button>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            <div className="stat-item">
              <span className="stat-number">∞</span>
              <span className="stat-label">Probability</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50%</span>
              <span className="stat-label">Life-Death Superposition</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">⚛</span>
              <span className="stat-label">Quantum State</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
        >
          <div className="brand-cat-container">
            <img 
              src={brandConfig.images.logo} 
              alt={brandConfig.name} 
              className="brand-cat-image"
            />
            <button 
              className="buy-button"
              onClick={(e) => {
                e.currentTarget.style.transform = 'translateX(-50%) scale(0.95)';
                setTimeout(() => {
                  e.currentTarget.style.transform = 'translateX(-50%) scale(1)';
                }, 150);
                
                // 购买链接目前不可用
                if (brandConfig.buy.enabled) {
                  setTimeout(() => {
                    try {
                      window.open(brandConfig.buy.url, '_blank');
                    } catch (error) {
                      console.log('Redirect failed:', error);
                      window.location.href = brandConfig.buy.url;
                    }
                  }, 200);
                } else {
                  // 显示提示信息
                  alert('Coming Soon!');
                }
              }}
            >
              {brandConfig.buy.text}
            </button>
            <div className="quantum-particles">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="particle"
                  style={{
                    '--angle': `${(i * 30)}deg`,
                    '--delay': `${i * 0.1}s`
                  } as React.CSSProperties}
                ></div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        className="scroll-indicator"
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowDown className="scroll-icon" />
                        <span>Scroll Down</span>
      </motion.button>
    </section>
  )
}

export default Hero
