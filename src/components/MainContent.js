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
          if(props.letterDic && props.letterDic[key]){ 
              return(<Letter letter={item} key={key} index={key} style={props.letterDic[key].style}/>)
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

function MainContent(props) {

  console.log(100, props.tl)
    const [para, setPara] = useState(faker.word.words(100).toLowerCase().split(' '))
    const [state, setState] = useState(false)
    const [activeWordIndex, setActiveWordIndex] = useState(0)
    const [activeLetterIndex, setActiveLetterIndex] = useState(0)
    const [letterDic, setLetterDic] = useState([])

    const onRefresh=()=>{
      setState(false)
      setPara(faker.word.words(100).toLowerCase().split(' '))
      setLetterDic([])
      setActiveLetterIndex(0)
      setActiveWordIndex(0)
    }

    const handler = (e)=>{
      setState(true)
      time = new Date()
      time.setSeconds(time.getSeconds()+props.tl); 
      console.log(e.nativeEvent.key, para[activeWordIndex][activeLetterIndex])

      if(e.nativeEvent.key===para[activeWordIndex][activeLetterIndex]){
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

      // if(activeLetterIndex > para[activeWordIndex].length){
      //   para[activeWordIndex] = para[activeWordIndex] + (e.nativeEvent.key)
      //   setPara((prev)=>{
      //     return(prev.map((item, key)=>{
      //       return(item===para[activeWordIndex]?item+e.nativeEvent.key:item)
      //     }))
      //   })
      // }
    }

    

  return (
    <>
      <div className='main-content'>
         <div style={{height:'40px'}}>
         {state &&<MyTimer expiryTimestamp={time}/>}
        </div>
        <div className='para'>
          {para.slice(0, props.wl).map((item, key)=>{
            if(activeWordIndex===key){
              return(<Word word={item} key={key} index={key} style="word active" active={true} letterDic={letterDic}/>)
            }
            else{
              return(<Word word={item} key={key} index={key} style='word'/>)
            }
          })}
        </div>
      </div>
      <div>
        <button className='refresh'><img alt='' src={refresh} onClick={onRefresh} width="50px" height="50px"/></button>
        <input style={{opacity:'0'}} type='text' onKeyPress={(e) => handler(e)} autoFocus onBlur={({ target }) => {target.focus()} } />
      </div>
      <p>WPM: {activeWordIndex*60/props.tl}</p>
      
    </>
  )
}

export default MainContent