import React from 'react'
import "./Main.css"
import logo from "../assets/images/logo-clumsy-text.jpeg"
import rocket from "../assets/images/rocket.jpeg"
import info from "../assets/images/info.jpeg"
import setting from "../assets/images/settings.jpeg"
import login from "../assets/images/profile.jpeg"
import notification from "../assets/images/notification.jpeg"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className='nav'>
        <div className='nav-left'>
            <img src={logo} width="240px" height="50px"/>
            <img src={rocket} width="50px" height="50px"/>
            <Link to="/info" ><img src={info} width="50px" height="50px"/></Link>
            
            <img src={setting} width="50px" height="50px"/>
        </div>
        <div className='nav-right'>
            <img src={login} width="50px" height="50px"/>
            <img src={notification} width="50px" height="50px"/>
        </div>
    </div>
    
  )
}

export default Navbar