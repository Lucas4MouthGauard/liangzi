import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cat, Box, Eye, Zap, Heart, Skull } from 'lucide-react'
import './SchrodingerCat.css'

const SchrodingerCat: React.FC = () => {
  const [isObserved, setIsObserved] = useState(false)
  const [catState, setCatState] = useState<'alive' | 'dead' | 'superposition'>('superposition')

  const handleObservation = () => {
    setIsObserved(true)
    // 随机决定猫的状态
    const random = Math.random()
    if (random < 0.5) {
      setCatState('alive')
    } else {
      setCatState('dead')
    }
  }

  const resetExperiment = () => {
    setIsObserved(false)
    setCatState('superposition')
  }

  const getCatIcon = () => {
    switch (catState) {
      case 'alive':
        return <Heart className="cat-status-icon alive" />
      case 'dead':
        return <Skull className="cat-status-icon dead" />
      default:
        return <Cat className="cat-status-icon superposition" />
    }
  }

  const getCatDescription = () => {
    switch (catState) {
      case 'alive':
        return 'The cat is alive! The observation caused the quantum state to collapse to the "alive" state.'
      case 'dead':
        return 'The cat is dead. The observation caused the quantum state to collapse to the "dead" state.'
      default:
        return 'Before observation, the cat exists in a superposition of being both alive and dead. This is a core concept of quantum mechanics.'
    }
  }

  return (
    <section id="schrodinger-cat" className="schrodinger-cat">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <span className="quantum-text">Schrödinger's Cat</span>
            <span className="title-sub">The Thought Experiment of Quantum Superposition</span>
          </h2>
          <p className="section-description">
            In 1935, Austrian physicist Erwin Schrödinger proposed this famous thought experiment
            to explain the absurdity of quantum superposition. Let's experience this experiment together.
          </p>
        </motion.div>

        <div className="experiment-container">
          <motion.div
            className="experiment-visual"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="quantum-box">
              <div className="box-content">
                <AnimatePresence mode="wait">
                  {!isObserved ? (
                    <motion.div
                      key="superposition"
                      className="cat-superposition"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Cat className="cat-icon" />
                      <div className="superposition-effect">
                        <div className="quantum-wave"></div>
                        <div className="quantum-wave"></div>
                        <div className="quantum-wave"></div>
                      </div>
                      <span className="status-text">Superposition</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="observed"
                      className={`cat-observed ${catState}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5 }}
                    >
                      {getCatIcon()}
                      <span className="status-text">
                        {catState === 'alive' ? 'Alive' : 'Dead'}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="box-label">Quantum Box</div>
            </div>
          </motion.div>

          <motion.div
            className="experiment-controls"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="control-panel quantum-card">
              <h3>Experiment Console</h3>
              <p className="experiment-description">
                Click the "Observe" button to observe the cat's state. Before observation, the cat exists in a life-death superposition;
                the act of observation will cause the quantum state to collapse to one of the definite states.
              </p>
              
              <div className="control-buttons">
                <button
                  className="quantum-btn primary"
                  onClick={handleObservation}
                  disabled={isObserved}
                >
                  <Eye className="btn-icon" />
                  {isObserved ? 'Observed' : 'Observe'}
                </button>
                
                <button
                  className="quantum-btn secondary"
                  onClick={resetExperiment}
                >
                  <Zap className="btn-icon" />
                  Reset Experiment
                </button>
              </div>

              <div className="experiment-status">
                <h4>Current Status</h4>
                <p className="status-description">{getCatDescription()}</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="experiment-explanation"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="explanation-grid">
            <div className="explanation-item">
              <h4>Quantum Superposition</h4>
              <p>
                Before observation, the radioactive atom exists in a superposition of decayed and undecayed states,
                therefore the cat also exists in a superposition of being alive and dead.
              </p>
            </div>
            <div className="explanation-item">
              <h4>Observation Collapse</h4>
              <p>
                When we open the box to observe, the quantum superposition state instantly collapses to one of the definite states,
                this is the famous "wave function collapse."
              </p>
            </div>
            <div className="explanation-item">
              <h4>Real-world Significance</h4>
              <p>
                This thought experiment reveals the huge differences between the quantum world and the macroscopic world,
                and the important role of observation behavior in quantum measurement.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SchrodingerCat
