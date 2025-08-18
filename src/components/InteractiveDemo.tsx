import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, RotateCcw, Zap, Eye, Brain } from 'lucide-react'
import './InteractiveDemo.css'

const InteractiveDemo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [showResults, setShowResults] = useState(false)

  const demoSteps = [
    {
      title: 'Prepare Qubits',
      description: 'Create two qubits in superposition states',
      icon: <Brain />,
      duration: 2000
    },
    {
      title: 'Apply Quantum Gates',
      description: 'Use Hadamard and CNOT gates to create entanglement',
      icon: <Zap />,
      duration: 3000
    },
    {
      title: 'Measure Results',
      description: 'Measure qubits and observe entanglement effects',
      icon: <Eye />,
      duration: 2000
    }
  ]

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying && currentStep < demoSteps.length) {
      interval = setTimeout(() => {
        if (currentStep < demoSteps.length - 1) {
          setCurrentStep(currentStep + 1)
        } else {
          setIsPlaying(false)
          setShowResults(true)
        }
      }, demoSteps[currentStep].duration)
    }
    return () => clearTimeout(interval)
  }, [isPlaying, currentStep, demoSteps])

  const startDemo = () => {
    setIsPlaying(true)
    setCurrentStep(0)
    setShowResults(false)
  }

  const pauseDemo = () => {
    setIsPlaying(false)
  }

  const resetDemo = () => {
    setIsPlaying(false)
    setCurrentStep(0)
    setShowResults(false)
  }

  return (
    <section id="interactive-demo" className="interactive-demo">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <span className="quantum-text">Interactive Demo</span>
            <span className="title-sub">Experience Quantum Computing</span>
          </h2>
          <p className="section-description">
            Through this interactive demo, you can personally experience the process of creating, operating, and measuring qubits.
            Observe the wonderful phenomena of quantum superposition and entanglement.
          </p>
        </motion.div>

        <div className="demo-container">
          <motion.div
            className="demo-visualization"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="quantum-circuit quantum-card">
              <div className="circuit-header">
                <h3>Quantum Circuit Demo</h3>
                <div className="circuit-controls">
                  <button
                    className={`control-btn ${isPlaying ? 'active' : ''}`}
                    onClick={isPlaying ? pauseDemo : startDemo}
                  >
                    {isPlaying ? <Pause /> : <Play />}
                  </button>
                  <button className="control-btn" onClick={resetDemo}>
                    <RotateCcw />
                  </button>
                </div>
              </div>

              <div className="circuit-diagram">
                <div className="qubit-line">
                  <div className="qubit-label">|q₀⟩</div>
                  <div className="gate hadamard">H</div>
                  <div className="control-point"></div>
                  <div className="measurement">M</div>
                </div>
                <div className="qubit-line">
                  <div className="qubit-label">|q₁⟩</div>
                  <div className="gate cnot">X</div>
                  <div className="measurement">M</div>
                </div>
              </div>

              <div className="circuit-status">
                <div className="step-content">
                  <div className="step-icon">{demoSteps[currentStep]?.icon}</div>
                  <h4>{demoSteps[currentStep]?.title}</h4>
                  <p>{demoSteps[currentStep]?.description}</p>
                  <div className="step-progress">
                    <div 
                      className="progress-bar"
                      style={{ width: `${((currentStep + 1) / demoSteps.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="demo-controls"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="control-panel quantum-card">
              <h3>Demo Control</h3>
              
              <div className="demo-buttons">
                <button
                  className={`quantum-btn ${isPlaying ? 'secondary' : 'primary'}`}
                  onClick={isPlaying ? pauseDemo : startDemo}
                >
                  {isPlaying ? <Pause className="btn-icon" /> : <Play className="btn-icon" />}
                  {isPlaying ? 'Pause' : 'Start Demo'}
                </button>
                
                <button className="quantum-btn secondary" onClick={resetDemo}>
                  <RotateCcw className="btn-icon" />
                  Reset
                </button>
              </div>

              <div className="demo-info">
                <h4>Current Status</h4>
                <p>
                  {isPlaying 
                    ? `Executing: ${demoSteps[currentStep]?.title}`
                    : 'Demo stopped, click start button to begin experience'
                  }
                </p>
              </div>

              <div className="step-list">
                <h4>Demo Steps</h4>
                <ul>
                  {demoSteps.map((step, index) => (
                    <li 
                      key={index}
                      className={index === currentStep ? 'current' : ''}
                    >
                      <span className="step-number">{index + 1}</span>
                      <span className="step-title">{step.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <AnimatePresence>
          {showResults && (
            <motion.div
              className="demo-results"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="results-content quantum-card">
                <h3>演示完成！</h3>
                <div className="results-grid">
                  <div className="result-item">
                    <h4>量子比特状态</h4>
                    <div className="quantum-state">
                      <span>|ψ⟩ = (|00⟩ + |11⟩)/√2</span>
                      <small>贝尔态：完美的量子纠缠</small>
                    </div>
                  </div>
                  <div className="result-item">
                    <h4>测量结果</h4>
                    <div className="measurement-results">
                      <div className="result-pair">
                        <span>|00⟩: 50%</span>
                        <span>|11⟩: 50%</span>
                      </div>
                      <small>测量结果总是相关的</small>
                    </div>
                  </div>
                </div>
                <p className="results-explanation">
                  这个演示展示了如何创建量子纠缠态。两个量子比特通过量子门操作后，
                  形成了不可分割的纠缠态，测量一个会立即影响另一个。
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default InteractiveDemo
