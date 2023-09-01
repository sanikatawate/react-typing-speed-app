import React from 'react'
import "./Main.css"
import { faker } from "@faker-js/faker";
import refresh from "../assets/images/refresh.jpeg"
import Letter from './Letter';
import { useState } from "react"
import MyTimer from './Timer'

    const lengthpara = 120
    const para = faker.word.words(lengthpara).toLowerCase()

    let index;
    var dict = []
      para.split('').forEach(item => {
      dict.push(item)
      index = index+1
    });

    const time = new Date();
    time.setSeconds(time.getSeconds()+30); // 10 minutes timer
  
function MainContent() {

  const [mainpara , setMainPara] = useState(para)
  const [mainDict, setMainDict] = useState(dict)
  const [state, setState] = useState(false)
  const [typed, setTyped] = useState(0)

  const generate=()=>{
    setMainPara(faker.word.words(lengthpara).toLowerCase())
    var dict = []
    mainpara.split('').forEach(item => {
    dict.push(item)
    index = index+1
    });
    setMainDict(dict)
    setState(false)
    setTyped(0)
    for(var i=0; i<400; i++)
    {
      document.getElementById(`${i}`).style.color ='#848887';
    }
  }

  const handler = (e)=>{
    console.log(state)
    
    console.log(e.nativeEvent.key,mainDict[typed])
    if(e.nativeEvent.key===dict[typed]){
      document.getElementById(`${typed}`).style.color ='white';
    }
    else{
      document.getElementById(`${typed}`).style.color ='red';
    }
    setTyped(typed+1)
  }
 
  return (
    <div className='main-content'>
      <div>
        {state && <MyTimer expiryTimestamp={time}/>}
      </div>
      <div className='para' id='para'>

          {/* {word_arr.map((word, index)=>{
            return(<div className='word'>{word.split('').map(letter=><Letter letter={letter}/>)}</div>)
          })} */}
          
          {mainDict.map((word, index)=>{
            return(<Letter letter={word} id={index} key={index}/>)
          })}
      </div>

        <button className='refresh'><img alt='' src={refresh} onClick={generate} width="50px" height="50px"/></button>
        <input hidden type="text" onKeyPress={(e) => {handler(e); setState(true)}} autoFocus />
    </div>
  )
}

export default MainContent