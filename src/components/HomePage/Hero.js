import React from 'react'
import "../Main.css"

function Hero(props) {
  return (
    <div className='hero'>
      <div style={{padding:"10px"}}>
        <span>Word:</span>
        <span onClick={()=>{props.setWordLimit(25)}}> 25 </span>
        <span onClick={()=>props.setWordLimit(50)}> 50 </span>
        <span onClick={()=>props.setWordLimit(75)}> 75 </span>
        <span onClick={()=>props.setWordLimit(100)}> 100 </span>
      </div>
      <div style={{padding:"10px"}}>
      <span> | </span>
      </div>
      <div style={{padding:"10px"}}>
        <span>Time:</span>
        <span onClick={()=>props.setTimeLimit(30)}> 30 </span>
        <span onClick={()=>props.setTimeLimit(60)}> 60 </span>
        <span onClick={()=>props.setTimeLimit(90)}> 90 </span>
        <span onClick={()=>props.setTimeLimit(120)}> 120 </span>
      </div>
      <div style={{padding:"10px"}}>
      <span> | </span>
      </div>
    </div>
  )
}

export default Hero