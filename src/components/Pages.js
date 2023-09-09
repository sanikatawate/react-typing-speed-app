import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./HomePage/Home"
import Result from "./Result/Result"
import Login from "./Login/Login"
import About from "./About/About"
import Navbar from "./Common/Navbar"
import Footer from "./Common/Footer"
import Leaderboard from "./Leaderboard/Leaderboard"

function Pages() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route  path='/' element={<Home />} />
          <Route  path='/leaderboard' element={<Leaderboard />} />
          <Route  path='/about' element={<About />} />
          <Route  path='/result' element={<Result />} />
          <Route  path='/login' element={<Login />} />
        </Routes>
        <Footer/>
      </Router>
    </>

  )
}

export default Pages