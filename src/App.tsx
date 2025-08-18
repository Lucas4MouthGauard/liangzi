import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import QuantumTheory from './components/QuantumTheory'
import SchrodingerCat from './components/SchrodingerCat'
import Entanglement from './components/Entanglement'
import InteractiveDemo from './components/InteractiveDemo'
import Footer from './components/Footer'
import QuantumParticles from './components/QuantumParticles'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // 模拟加载时间
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="quantum-loading">
        <div className="quantum-spinner">
          <div className="quantum-orb"></div>
          <div className="quantum-orb"></div>
          <div className="quantum-orb"></div>
        </div>
        <h2 className="quantum-text">量子态加载中...</h2>
      </div>
    )
  }

  return (
    <div className="App">
      <QuantumParticles />
      <Header />
      <main>
        <Hero />
        <SchrodingerCat />
        <Entanglement />
        <QuantumTheory />
        <InteractiveDemo />
      </main>
      <Footer />
    </div>
  )
}

export default App
