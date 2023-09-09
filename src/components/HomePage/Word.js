import React from 'react'
import Letter from './Letter'
import "../Main.css"

function Word(props) {
    return(
        <span className={props.style}>
          {props.word.split('').map((item, key)=>{
            if(props.letterDic && props.letterDic[key]){ 
                return(<Letter letter={item} key={key} index={key} style={props.letterDic[key].style}/>)
            }
            return(<Letter letter={item} key={key} index={key}/>)
            })}
        </span>
    )
}

export default Word