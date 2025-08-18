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
            <span className="quantum-text">量子纠缠</span>
            <span className="title-sub">超越时空的神秘连接</span>
          </h2>
          <p className="section-description">
            量子纠缠是量子力学中最令人困惑的现象之一。两个或多个粒子可以形成纠缠态，
            无论相距多远，它们的状态都会瞬间关联。爱因斯坦称之为"幽灵般的超距作用"。
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
                <div className="particle-label">粒子A</div>
                <div className="particle-state">|↑⟩</div>
                <div className="particle-info">
                  <span>自旋: +1/2</span>
                  <span>位置: 地球</span>
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
                  <div className="distance">距离: 1光年</div>
                  <div className="entanglement-type">贝尔态 |ψ⁻⟩</div>
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
                <div className="particle-label">粒子B</div>
                <div className="particle-state">|↓⟩</div>
                <div className="particle-info">
                  <span>自旋: -1/2</span>
                  <span>位置: 半人马座</span>
                </div>
              </div>
            </div>
            
            <div className="demo-description">
              <h4>量子纠缠现象</h4>
              <p>两个粒子形成纠缠态后，无论相距多远，测量一个粒子的状态会瞬间决定另一个粒子的状态。</p>
              <div className="quantum-formula">
                <span>|ψ⁻⟩ = (|↑↓⟩ - |↓↑⟩)/√2</span>
                <small>贝尔态：完美的反相关纠缠</small>
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
              <h3>交互式纠缠演示</h3>
              <p>
                体验量子纠缠的神奇效应。点击测量按钮观察粒子状态的瞬间关联，
                理解非局域性和量子测量的奥秘。
              </p>
              
              <div className="measurement-controls">
                <div className="control-group">
                  <h4>测量控制</h4>
                  <div className="measurement-buttons">
                    <button className="quantum-btn primary">
                      <Zap className="btn-icon" />
                      测量粒子A
                    </button>
                    <button className="quantum-btn secondary">
                      <Zap className="btn-icon" />
                      测量粒子B
                    </button>
                    <button className="quantum-btn accent">
                      <Zap className="btn-icon" />
                      同时测量
                    </button>
                  </div>
                </div>

                <div className="control-group">
                  <h4>纠缠参数</h4>
                  <div className="parameter-controls">
                    <div className="parameter">
                      <label>纠缠强度</label>
                      <div className="slider-container">
                        <input type="range" min="0" max="100" defaultValue="100" className="entanglement-slider" />
                        <span className="slider-value">100%</span>
                      </div>
                    </div>
                    <div className="parameter">
                      <label>测量精度</label>
                      <div className="slider-container">
                        <input type="range" min="50" max="100" defaultValue="95" className="precision-slider" />
                        <span className="slider-value">95%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="entanglement-info">
                <h4>纠缠特性详解</h4>
                <div className="info-grid">
                  <div className="info-item">
                    <h5>非局域性</h5>
                    <p>影响瞬间传递，超越光速限制</p>
                  </div>
                  <div className="info-item">
                    <h5>不可克隆</h5>
                    <p>无法复制未知的量子态</p>
                  </div>
                  <div className="info-item">
                    <h5>测量坍缩</h5>
                    <p>观测行为改变系统状态</p>
                  </div>
                  <div className="info-item">
                    <h5>贝尔不等式</h5>
                    <p>违反经典物理的数学证明</p>
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
          <h3>量子纠缠的应用与意义</h3>
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
            <h3>为什么量子纠缠如此重要？</h3>
            <div className="explanation-text">
              <p>
                量子纠缠挑战了我们对现实的基本理解。它表明，在量子尺度上，
                两个物体可以形成一个不可分割的整体，即使它们在空间上分离。
              </p>
              <p>
                这种现象在量子计算、量子通信和量子密码学中有着重要应用。
                它也是理解量子力学基础的关键，帮助我们探索宇宙最深层的奥秘。
              </p>
            </div>
            <div className="quantum-formula">
              <span>|ψ⟩ = (|↑↓⟩ - |↓↑⟩)/√2</span>
              <small>贝尔态：最基本的双粒子纠缠态</small>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Entanglement
