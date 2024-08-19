import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import Intro from './Components/Hero/Intro'
import Stars from './Components/Animation/Stars'
import Services from './Components/Services/Services'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
const App = () => {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Intro />
        <Sidebar />
       </section>
       <section id="Services" > 
      <Stars type='services' />
      </section>
      <section >
        <Services/>
      </section>
       <section id='Portfolio'>
        <Stars type='portfolio' />
      </section>
      
      <Portfolio />
      
      <section id='Contact'>

        <Contact />
      </section>   
    </div> 
  )
}

export default App