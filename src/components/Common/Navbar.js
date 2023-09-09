import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "../Main.css"
import Modal from "../Common/Modal"

// Img Imports
import logo from "../../assets/images/logo-clumsy-text.jpeg"
import keyboard from '../../assets/images/keyboard.jpeg'
import rocket from "../../assets/images/rocket.jpeg"
import info from "../../assets/images/info.jpeg"
import setting from "../../assets/images/settings.jpeg"
import login from "../../assets/images/profile.jpeg"
import notification from "../../assets/images/notification.jpeg"


function Navbar() {

  const [showModal, setShowModal] = useState(false);
  const [type, setType] = useState('')

  return (
    <header>
    <div className='nav'>
        <div className='nav-left'>
            <Link to="/" ><img alt=""src={logo} width="240px" height="50px"/></Link>
            <Link to="/" ><img alt=""src={keyboard} width="50px" height="50px"/></Link>
            <Link to="/leaderboard" ><img alt=""src={rocket} width="50px" height="50px"/></Link>
            <Link to="/about" ><img alt=""src={info} width="50px" height="50px"/></Link>
            <img alt=""src={setting} width="50px" height="50px" onClick={() =>{setShowModal(!showModal); setType('settingsModal')}}></img>
        </div>
        <div className='nav-right'>
        <Link to="/login" ><img alt=""src={login} width="50px" height="50px"/></Link>
        <img alt=""src={notification} width="50px" height="50px" onClick={() =>{setShowModal(!showModal); setType('notificationModal')}}/>
        </div>
    </div>
    {showModal &&  <div className={type}>
        <Modal className="fade-up" toggleModal={setShowModal} data={type+"Modal"}/>
    </div>}
    </header>
  )
}

export default Navbar