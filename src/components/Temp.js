import React, { useState, createContext, useContext } from 'react'
import "./Main.css" 
import { faker } from "@faker-js/faker"; 

const LetterContext = createContext()

const cloud = 'this is my kingdom'

function Word(props) {
  return(
      <span className={props.style}>
        {props.word.split('').map((item, key)=>{
          let style

          if(props.letterDic){
            console.log(props.letterDic)
            if(props.letterDic[key]){
              console.log(props.letterDic[key].style)
              style = props.letterDic[key].style
            }
          }
            return(<Letter letter={item} key={key} index={key} style={style}/>)
          })}
      </span>
      
  )
}

function Letter(props) {
  return(
      <span className={props.style}>{props.letter}</span>
  )
}

function Temp() {

    const [activeWordIndex, setActiveWordIndex] = useState(0)
    const [activeLetterIndex, setActiveLetterIndex] = useState(0)
    const [letterDic, setLetterDic] = useState([])

    const handler = (e)=>{
      console.log(e.nativeEvent.key, cloud.split(' ')[activeWordIndex][activeLetterIndex])

      if(e.nativeEvent.key===cloud.split(' ')[activeWordIndex][activeLetterIndex]){
        setActiveLetterIndex((prev)=>prev+1)
        setLetterDic([...letterDic, {index: activeLetterIndex, style:'correct'}])
      }
      else{
        setActiveLetterIndex((prev)=>prev+1)
        setLetterDic([...letterDic, {index: activeLetterIndex, style:'incorrect'}])
      }

      if(e.nativeEvent.key===" "){
        setActiveWordIndex((prev)=>prev+1)
        setActiveLetterIndex(0)
        setLetterDic([])
      }
    }

  return (
    <>
        <div>
          {cloud.split(' ').map((item, key)=>{
            if(activeWordIndex===key){
              return(<Word word={item} key={key} index={key} style="word active" letterDic={letterDic}/>)
            }
            else{
              return(<Word word={item} key={key} index={key} style='word'/>)
            }
            
          })}
        </div>
      
      <div><input type='text' onKeyPress={(e) => handler(e)} autoFocus onBlur={({ target }) => {target.focus()} } /></div>
    </>
  )
}

export default Temp

 