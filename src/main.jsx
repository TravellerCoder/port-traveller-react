import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './assets/components/header/Header.jsx'
import Hero from './assets/components/hero/Hero.jsx'
import About from './assets/components/about/About.jsx'
import './index.css'
  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Hero/>
    <About/>
  </StrictMode>,
)
