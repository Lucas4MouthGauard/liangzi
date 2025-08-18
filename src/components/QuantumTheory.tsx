import React from 'react'
import { motion } from 'framer-motion'
import { Atom, Zap, Eye, Brain } from 'lucide-react'
import './QuantumTheory.css'

const QuantumTheory: React.FC = () => {
  const concepts = [
    {
      icon: <Atom />,
      title: '量子叠加',
      description: '量子系统可以同时存在于多个状态的叠加中，直到被观测时才会坍缩到其中一个确定状态。',
      color: 'var(--quantum-primary)'
    },
    {
      icon: <Eye />,
      title: '观测效应',
      description: '观测行为本身会影响量子系统的状态，这就是著名的"观测者效应"。',
      color: 'var(--quantum-secondary)'
    },
    {
      icon: <Zap />,
      title: '不确定性原理',
      description: '海森堡不确定性原理表明，我们无法同时精确测量粒子的位置和动量。',
      color: 'var(--quantum-accent)'
    },
    {
      icon: <Brain />,
      title: '量子纠缠',
      description: '两个或多个粒子可以形成纠缠态，无论相距多远，它们的状态都会瞬间关联。',
      color: 'var(--quantum-primary)'
    }
  ]

  return (
    <section id="quantum-theory" className="quantum-theory">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <span className="quantum-text">量子理论</span>
            <span className="title-sub">基础概念</span>
          </h2>
          <p className="section-description">
            量子力学是现代物理学的基础，它描述了微观世界中的奇妙现象。
            让我们一起来了解这些颠覆常识的概念。
          </p>
        </motion.div>

        <div className="concepts-showcase">
          <div className="concepts-timeline">
            {concepts.map((concept, index) => (
              <motion.div
                key={index}
                className="concept-timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="timeline-marker" style={{ borderColor: concept.color }}>
                  <div className="marker-core" style={{ backgroundColor: concept.color }}></div>
                </div>
                
                <div className="concept-content quantum-card">
                  <div className="concept-header">
                    <div 
                      className="concept-icon-wrapper"
                      style={{ backgroundColor: `${concept.color}20` }}
                    >
                      <div className="concept-icon" style={{ color: concept.color }}>
                        {concept.icon}
                      </div>
                    </div>
                    <h3 className="concept-title">{concept.title}</h3>
                  </div>
                  
                  <p className="concept-description">{concept.description}</p>
                  
                  <div className="concept-details">
                    <div className="detail-item">
                      <span className="detail-label">重要性</span>
                      <div className="importance-bar">
                        <div 
                          className="importance-fill" 
                          style={{ 
                            backgroundColor: concept.color,
                            width: `${85 + Math.random() * 15}%`
                          }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="detail-item">
                      <span className="detail-label">理解难度</span>
                      <div className="difficulty-stars">
                        {[...Array(3)].map((_, i) => (
                          <span 
                            key={i} 
                            className={`star ${i < (index % 3) + 1 ? 'filled' : ''}`}
                            style={{ color: concept.color }}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="theory-explanation"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="explanation-content">
            <h3>为什么量子世界如此奇怪？</h3>
            <p>
              在宏观世界中，我们习惯了确定性：一个物体要么在这里，要么在那里；
              要么是活的，要么是死的。但在量子尺度上，这些常识被彻底颠覆了。
            </p>
            <p>
              量子力学告诉我们，在观测之前，粒子可以同时存在于多个位置，
              可以同时处于多个状态。这种"叠加态"是量子世界的核心特征。
            </p>
            <div className="quantum-formula">
              <span>|ψ⟩ = α|0⟩ + β|1⟩</span>
              <small>量子叠加态的数学表示</small>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default QuantumTheory
