import React from 'react'
import "./Main.css"

let style;
function Letter(props) {
  let style
    if(props.check ===1)
        style = "correct"
    else if(props.check === -1)
        style = "wrong"
  return (
    <>
        {props.letter===" " && <span style={{width:"15px"}}></span>}
        <div className={style}> {props.letter} </div>        
    </>
  )
}

export default Letter