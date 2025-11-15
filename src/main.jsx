import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Component/Header'
import Home from './Component/Home'
import About from './Component/About'
import Services from './Component/Services'
import Testimonial from './Component/Testimonial'
import Pokemon_and_Weather from './Component/Pokemon_and_Weather'
import Contact from './Component/Contact'
import Footer from './Component/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Home /> 
    <About />
    <Services />
    <Testimonial />
    <Pokemon_and_Weather/>
    <Contact />
    <Footer />
  </StrictMode>,
)
