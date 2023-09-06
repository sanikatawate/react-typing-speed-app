import React, { useState} from 'react'
import "./Main.css" 
import { faker } from "@faker-js/faker"; 
import refresh from "../assets/images/refresh.jpeg"
import MyTimer from './Timer'
import Result from './Result';

// const para = faker.word.words(100).toLowerCase()
let time


function Word(props) {
  return(
      <span className={props.style}>
        {props.word.split('').map((item, key)=>{
          let style

          if(props.letterDic){
            // console.log(props.letterDic)
            if(props.letterDic[key]){
              // console.log(props.letterDic[key].style)
              style = props.letterDic[key].style
              return(<Letter letter={item} key={key} index={key} style={style}/>)
            }
          }
            return(<Letter letter={item} key={key} index={key}/>)
          })}
      </span>

  )
}

function Letter(props) {
  return(
      <span className={props.style}>{props.letter}</span>
  )
}

function MainContent() {

    const [para, setPara] = useState(faker.word.words(100).toLowerCase())
    const [state, setState] = useState(false)
    const [activeWordIndex, setActiveWordIndex] = useState(0)
    const [activeLetterIndex, setActiveLetterIndex] = useState(0)
    const [letterDic, setLetterDic] = useState([])

    const onRefresh=()=>{
      setState(false)
      setPara(faker.word.words(100).toLowerCase())
      setLetterDic([])
      setActiveLetterIndex(0)
      setActiveWordIndex(0)
    }

    const handler = (e)=>{
      setState(true)
      time = new Date()
      time.setSeconds(time.getSeconds()+30); // 10 minutes timer
      console.log(e.nativeEvent.key, para.split(' ')[activeWordIndex][activeLetterIndex])

      if(e.nativeEvent.key===para.split(' ')[activeWordIndex][activeLetterIndex]){
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
      <div className='main-content'>
        <div>
          {state && <MyTimer expiryTimestamp={time}/>}
        </div>
        <div className='para'>
          {para.split(' ').map((item, key)=>{
            if(activeWordIndex===key){
              return(<Word word={item} key={key} index={key} style="word active" letterDic={letterDic}/>)
            }
            else{
              return(<Word word={item} key={key} index={key} style='word'/>)
            }

          })}
        </div>
      </div>
      <div>
        <button className='refresh'><img alt='' src={refresh} onClick={onRefresh} width="50px" height="50px"/></button>
        <input type='text' onKeyPress={(e) => handler(e)} autoFocus onBlur={({ target }) => {target.focus()} } />
      </div>
      
    </>
  )
}

export default MainContent