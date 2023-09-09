import React from 'react'
import "../Main.css"

function Letter(props) {
    return(
        <span className={props.style}>{props.letter}</span>
    )
}

export default Letter