import React from 'react'
import { motion } from 'framer-motion'
import { Atom, Zap, Eye, Brain } from 'lucide-react'
import './QuantumTheory.css'

const QuantumTheory: React.FC = () => {
  const concepts = [
    {
      icon: <Atom />,
      title: 'Quantum Superposition',
      description: 'Quantum systems can exist in superposition of multiple states simultaneously, until observed and collapsed to one definite state.',
      color: 'var(--quantum-primary)'
    },
    {
      icon: <Eye />,
      title: 'Observer Effect',
      description: 'The act of observation itself affects the state of quantum systems, known as the "observer effect."',
      color: 'var(--quantum-secondary)'
    },
    {
      icon: <Zap />,
      title: 'Uncertainty Principle',
      description: 'Heisenberg\'s uncertainty principle states that we cannot simultaneously measure a particle\'s position and momentum with precision.',
      color: 'var(--quantum-accent)'
    },
    {
      icon: <Brain />,
      title: 'Quantum Entanglement',
      description: 'Two or more particles can form entangled states, where their states become instantly correlated regardless of distance.',
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
            <span className="quantum-text">Quantum Theory</span>
            <span className="title-sub">Fundamental Concepts</span>
          </h2>
          <p className="section-description">
            Quantum mechanics is the foundation of modern physics, describing the wonderful phenomena in the microscopic world.
            Let's understand these concepts that challenge common sense together.
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
                      <span className="detail-label">Importance</span>
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
                      <span className="detail-label">Difficulty</span>
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
            <h3>Why is the Quantum World So Strange?</h3>
            <p>
              In the macroscopic world, we're used to determinism: an object is either here or there;
              either alive or dead. But at the quantum scale, these common senses are completely challenge common sense.
            </p>
            <p>
              Quantum mechanics tells us that before observation, particles can exist in multiple positions simultaneously,
              can be in multiple states at the same time. This "superposition" is the core feature of the quantum world.
            </p>
            <div className="quantum-formula">
              <span>|ψ⟩ = α|0⟩ + β|1⟩</span>
              <small>Mathematical representation of quantum superposition</small>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default QuantumTheory
