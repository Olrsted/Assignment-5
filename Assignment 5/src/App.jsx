import React from 'react'
import './App.css'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Feature />
      <Footer />
    </div>
  )
}

export default App