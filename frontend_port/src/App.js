import React from 'react'
import About from './container/About/About';
import Footer from './container/Footer/Footer';
import Skills from './container/Skills/Skills';
import Testimonial from './container/Testimonial/Testimonial';
import Header from './container/Header/Header';
import Navbar from './components/Navbar/Navbar';
import './App.scss';

function App() {
  return (
  <div className='app'>
    <Navbar/>
    <Header /> 
    <About />
    <Skills />
    <Testimonial />
    <Footer />

  </div>
  )
}

export default App;