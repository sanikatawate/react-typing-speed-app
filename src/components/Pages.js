import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Result from "./Result"
import About from "./Result"
import Info from "./Info"
import Navbar from "./Navbar"
import Footer from "./Footer"

function Pages() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/leaderboard' element={<About/>} />
          <Route  path='/about' element={<About/>} />
          <Route  path='/result' element={<Result/>} />
          <Route  path='/login' element={<About/>} />
          <Route  path='/info' element={<Info/>} />
        </Routes>
        <Footer/>
      </Router>
    </>

  )
}

export default Pages