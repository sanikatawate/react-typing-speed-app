import React from 'react'
import "./Main.css"

function Letter(props) {
    // let style=""
    // if(props.value){
    //   style = "correct"
    // }
    // else{
    //   style = "wrong"
    // }

    // if(props.check ===1)
    //     style = "correct"
    // else if(props.check === -1)
    //     style = "wrong"
    // else
    //     style = ''
    // console.log(props.letter)

  return (
    <>
    {props.letter===" " && <span style={{width:"15px"}}></span>}
    <div id={props.id}>{props.letter}</div>
    </>
    
  )
}

export default Letter