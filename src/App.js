import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Skills from './Components/Skills'
import About from './Components/About'
import Projects from './Components/Projects'
// import Education from './Components/Education'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {
  return (
    <div>
      
      
      <BrowserRouter>
      <Navbar></Navbar>
     
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About/>} />
        <Route path='/Skills' element={<Skills/>} />
        <Route path='/Projects' element={<Projects/>} />
        {/* <Route path='/Education' element={<Education/>} /> */}

       
      </Routes>
      </BrowserRouter>
      {/* <Home></Home>
      <About></About>
      <Skills></Skills>

      <Projects></Projects>
      <Education></Education> */}
    </div>
  )
}

export default App

