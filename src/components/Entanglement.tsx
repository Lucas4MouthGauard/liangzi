import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link, Zap, Globe, Rocket, Brain } from 'lucide-react'
import './Entanglement.css'

const Entanglement: React.FC = () => {
  const [selectedExample, setSelectedExample] = useState(0)

  const examples = [
    {
      title: 'EPR佯谬',
      description: '爱因斯坦、波多尔斯基和罗森提出的思想实验，质疑量子力学的完备性。',
      icon: <Brain />,
      color: 'var(--quantum-primary)'
    },
    {
      title: '贝尔不等式',
      description: '约翰·贝尔提出的数学不等式，用于检验量子力学与隐变量理论。',
      icon: <Zap />,
      color: 'var(--quantum-secondary)'
    },
    {
      title: '量子通信',
      description: '利用量子纠缠实现超光速信息传递，虽然不能传递经典信息。',
      icon: <Globe />,
      color: 'var(--quantum-accent)'
    },
    {
      title: '量子计算',
      description: '量子比特的纠缠特性是量子计算优越性的核心。',
      icon: <Rocket />,
      color: 'var(--quantum-primary)'
    }
  ]

  return (
    <section id="entanglement" className="entanglement">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <span className="quantum-text">Quantum Entanglement</span>
            <span className="title-sub">Mysterious Connection Beyond Space and Time</span>
          </h2>
          <p className="section-description">
            Quantum entanglement is one of the most puzzling phenomena in quantum mechanics. Two or more particles can form an entangled state,
            and regardless of how far apart they are, their states become instantly correlated. Einstein called this "spooky action at a distance."
          </p>
        </motion.div>

        <div className="entanglement-demo">
          <motion.div
            className="demo-visual"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="entangled-system">
              <div className="particle-container particle-a">
                <div className="particle-core">
                  <div className="particle-inner"></div>
                  <div className="particle-rings">
                    <div className="ring ring-1"></div>
                    <div className="ring ring-2"></div>
                    <div className="ring ring-3"></div>
                  </div>
                </div>
                              <div className="particle-label">Particle A</div>
              <div className="particle-state">|↑⟩</div>
              <div className="particle-info">
                <span>Spin: +1/2</span>
                <span>Location: Earth</span>
              </div>
              </div>
              
              <div className="entanglement-connection">
                <div className="connection-line">
                  <div className="line-core"></div>
                  <div className="quantum-waves">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="wave"
                        style={{ '--delay': `${i * 0.15}s` } as React.CSSProperties}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="connection-info">
                                  <div className="distance">Distance: 1 Light Year</div>
                <div className="entanglement-type">Bell State |ψ⁻⟩</div>
                </div>
              </div>
              
              <div className="particle-container particle-b">
                <div className="particle-core">
                  <div className="particle-inner"></div>
                  <div className="particle-rings">
                    <div className="ring ring-1"></div>
                    <div className="ring ring-2"></div>
                    <div className="ring ring-3"></div>
                  </div>
                </div>
                              <div className="particle-label">Particle B</div>
              <div className="particle-state">|↓⟩</div>
              <div className="particle-info">
                <span>Spin: -1/2</span>
                <span>Location: Centaurus</span>
              </div>
              </div>
            </div>
            
            <div className="demo-description">
              <h4>Quantum Entanglement Phenomenon</h4>
              <p>After two particles form an entangled state, regardless of how far apart they are, measuring the state of one particle will instantly determine the state of the other particle.</p>
              <div className="quantum-formula">
                <span>|ψ⁻⟩ = (|↑↓⟩ - |↓↑⟩)/√2</span>
                <small>Bell State: Perfect Anti-correlated Entanglement</small>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="demo-controls"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="control-panel quantum-card">
              <h3>Interactive Entanglement Demo</h3>
              <p>
                Experience the magical effects of quantum entanglement. Click the measurement buttons to observe the instant correlation of particle states,
                understanding the mysteries of non-locality and quantum measurement.
              </p>
              
              <div className="measurement-controls">
                <div className="control-group">
                  <h4>Measurement Control</h4>
                  <div className="measurement-buttons">
                    <button className="quantum-btn primary">
                      <Zap className="btn-icon" />
                      Measure Particle A
                    </button>
                    <button className="quantum-btn secondary">
                      <Zap className="btn-icon" />
                      Measure Particle B
                    </button>
                    <button className="quantum-btn accent">
                      <Zap className="btn-icon" />
                      Measure Both
                    </button>
                  </div>
                </div>

                <div className="control-group">
                  <h4>Entanglement Parameters</h4>
                  <div className="parameter-controls">
                    <div className="parameter">
                      <label>Entanglement Strength</label>
                      <div className="slider-container">
                        <input type="range" min="0" max="100" defaultValue="100" className="entanglement-slider" />
                        <span className="slider-value">100%</span>
                      </div>
                    </div>
                    <div className="parameter">
                      <label>Measurement Precision</label>
                      <div className="slider-container">
                        <input type="range" min="50" max="100" defaultValue="95" className="precision-slider" />
                        <span className="slider-value">95%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="entanglement-info">
                <h4>Entanglement Characteristics</h4>
                <div className="info-grid">
                  <div className="info-item">
                    <h5>Non-locality</h5>
                    <p>Instant influence transmission, beyond light speed limits</p>
                  </div>
                  <div className="info-item">
                    <h5>No-cloning</h5>
                    <p>Cannot copy unknown quantum states</p>
                  </div>
                  <div className="info-item">
                    <h5>Measurement Collapse</h5>
                    <p>Observation behavior changes system state</p>
                  </div>
                  <div className="info-item">
                    <h5>Bell Inequality</h5>
                    <p>Mathematical proof violating classical physics</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="entanglement-examples"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Applications and Significance of Quantum Entanglement</h3>
          <div className="examples-grid">
            {examples.map((example, index) => (
              <motion.div
                key={index}
                className={`example-card quantum-card ${selectedExample === index ? 'selected' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedExample(index)}
                whileHover={{ scale: 1.05 }}
              >
                <div 
                  className="example-icon"
                  style={{ color: example.color }}
                >
                  {example.icon}
                </div>
                <h4>{example.title}</h4>
                <p>{example.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="entanglement-explanation"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="explanation-content quantum-card">
            <h3>Why is Quantum Entanglement So Important?</h3>
            <div className="explanation-text">
              <p>
                Quantum entanglement challenges our fundamental understanding of reality. It shows that at the quantum scale,
                two objects can form an inseparable whole, even when they are spatially separated.
              </p>
              <p>
                This phenomenon has important applications in quantum computing, quantum communication, and quantum cryptography.
                It is also key to understanding the foundations of quantum mechanics, helping us explore the deepest mysteries of the universe.
              </p>
            </div>
            <div className="quantum-formula">
              <span>|ψ⟩ = (|↑↓⟩ - |↓↑⟩)/√2</span>
              <small>Bell State: The most basic two-particle entangled state</small>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Entanglement
