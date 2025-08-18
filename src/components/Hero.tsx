import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Zap, Atom, Eye } from 'lucide-react'
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
            <span>量子物理</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <span className="title-main">薛定谔的猫</span>
            <span className="title-sub">量子纠缠的奇妙世界</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            探索量子物理中最著名的思想实验，理解叠加态、观测效应和量子纠缠的奥秘。
            在这里，现实与可能性交织，观察者与被观察者相互影响。
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <button className="quantum-btn primary" onClick={scrollToNext}>
              <Zap className="btn-icon" />
              开始探索
            </button>
            <button className="quantum-btn secondary" onClick={() => document.getElementById('interactive-demo')?.scrollIntoView({ behavior: 'smooth' })}>
              <Eye className="btn-icon" />
              互动演示
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
              <span className="stat-label">可能性</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50%</span>
              <span className="stat-label">生死叠加</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">⚛</span>
              <span className="stat-label">量子态</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
        >
          <div className="pump-cat-container">
            <img 
              src="/PumpCat.png" 
              alt="Pump Cat" 
              className="pump-cat-image"
            />
            <button 
              className="buy-button"
              onClick={(e) => {
                e.currentTarget.style.transform = 'translateX(-50%) scale(0.95)';
                setTimeout(() => {
                  e.currentTarget.style.transform = 'translateX(-50%) scale(1)';
                }, 150);
              }}
            >
              BUY
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
        <span>向下滚动</span>
      </motion.button>
    </section>
  )
}

export default Hero
