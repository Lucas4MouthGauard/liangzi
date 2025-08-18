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
        return '猫还活着！观测行为使量子态坍缩到了"活着"的状态。'
      case 'dead':
        return '猫已经死亡。观测行为使量子态坍缩到了"死亡"的状态。'
      default:
        return '在观测之前，猫同时处于活着和死亡的叠加态中。这是量子力学的核心概念。'
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
            <span className="quantum-text">薛定谔的猫</span>
            <span className="title-sub">量子叠加的思想实验</span>
          </h2>
          <p className="section-description">
            1935年，奥地利物理学家埃尔温·薛定谔提出了这个著名的思想实验，
            用来解释量子叠加态的荒谬性。让我们一起来体验这个实验。
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
                      <span className="status-text">叠加态</span>
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
                        {catState === 'alive' ? '活着' : '死亡'}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="box-label">量子盒子</div>
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
              <h3>实验控制台</h3>
              <p className="experiment-description">
                点击"观测"按钮来观察猫的状态。在观测之前，猫处于生死叠加态；
                观测行为会使量子态坍缩到其中一个确定状态。
              </p>
              
              <div className="control-buttons">
                <button
                  className="quantum-btn primary"
                  onClick={handleObservation}
                  disabled={isObserved}
                >
                  <Eye className="btn-icon" />
                  {isObserved ? '已观测' : '观测'}
                </button>
                
                <button
                  className="quantum-btn secondary"
                  onClick={resetExperiment}
                >
                  <Zap className="btn-icon" />
                  重置实验
                </button>
              </div>

              <div className="experiment-status">
                <h4>当前状态</h4>
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
              <h4>量子叠加</h4>
              <p>
                在观测之前，放射性原子处于衰变和未衰变的叠加态，
                因此猫也处于活着和死亡的叠加态。
              </p>
            </div>
            <div className="explanation-item">
              <h4>观测坍缩</h4>
              <p>
                当我们打开盒子观测时，量子叠加态会瞬间坍缩到其中一个确定状态，
                这就是著名的"波函数坍缩"。
              </p>
            </div>
            <div className="explanation-item">
              <h4>现实意义</h4>
              <p>
                这个思想实验揭示了量子世界与宏观世界的巨大差异，
                以及观测行为在量子测量中的重要作用。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SchrodingerCat
