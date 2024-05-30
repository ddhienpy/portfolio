import React from 'react'
import './App.css'
import Home from './components/home/Home'
import Services from './components/services/Services'
import Skill from './components/skill/Skill'
import Portfolio from './components/portfolio/Portfolio'
import Resume from './components/resume/Resume'
import Testimonials from './components/testimonials/Testimonials'
import Pricing from './components/pricing/Pricing'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'

function App() {
  return (
    <main className="main">
      <Header />
      <Home />
      <Services />
      <Skill />
      <Portfolio />
      <Resume />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
