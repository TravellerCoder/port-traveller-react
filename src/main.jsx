import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './assets/components/header/Header.jsx'
import Hero from './assets/components/hero/Hero.jsx'
import About from './assets/components/about/About.jsx'
import Projects from './assets/components/projects/Projects.jsx'
import Contact from './assets/components/contact/Contact.jsx'
import Footer from './assets/components/footer/Footer.jsx'
  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Hero/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
  </StrictMode>,
)
