import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import "./Main.css" 
import { faker } from "@faker-js/faker"; // To Generate Paragraph
import refresh from "../assets/images/refresh.jpeg" //Refresh Icon
import { useState, createContext } from "react"
import MyTimer from './Timer'
import Word from './Word';
import Letter from './Letter'

const timeLeft = 30;
const wordcount = 30;
const randomwords = faker.random.words(wordcount).toLowerCase();

function MainContent() {

  const [state, setState] = useState(false);
  const [index, setIndex] = useState(0);
  const [status, setStatus] = useState('inactive')
  const [redcount, setRedcount] = useState(0)
  const [whitecount, setWhitecount] = useState(0)
  const [wordcount, setWordcount] = useState(0)

  const time = new Date();
  time.setSeconds(time.getSeconds()+30); // 10 minutes timer

  // const generate=()=>{
  //   setMainPara(faker.word.words(lengthpara).toLowerCase())
  //   setMainDict(mainpara.split(' '))
  //   setState(false)
  // }
  //   if(i){
  //     for(var i=0; i<400; i++)
  //   {
  //     document.getElementById(`${i}`).style.color ='#848887';
  //   }
  //   }
  // }

  const dict =[]
  randomwords.split('').forEach(item => {
    dict.push({letter: item, check:0})
  });
  console.log(dict)

  const [words, setWords] = useState(dict)

  const handler = (event) => {
    
    if(index===0)
      setStatus(true)
    let check;
    if (words[index].letter === event.nativeEvent.key) 
    {
      check = 1;
      setWhitecount(whitecount+1) 

      if(event.nativeEvent.key===' '){
        check = 0;
        setWordcount(wordcount+1)}
    }
    else
    {
      check = -1;
      setRedcount(redcount+1)
    }
    const duplicatearr = [...words]
    duplicatearr[index].check = check
    setWords(duplicatearr)
    setIndex(index + 1);
  };

  return (
    <div className='main-content'>
      <div>
        {state && <MyTimer expiryTimestamp={time}/>}
      </div>
      <div className='para' id='para'>
          {/* { mainDict.map((word, index)=>{
            return(<Word word={word} key={index} letter={word.letter} check={word.check}/>)
          })} */}
          {words.map((word, index) => {
          return <Letter key={index} letter={word.letter} check={word.check}></Letter>;
        })}
      </div>
      <button className='refresh'><img alt='' src={refresh} width="50px" height="50px"/></button>
      <input id='text' type="text" onKeyPress={(e) => {handler(e); setState(true)}} autoFocus onBlur={({ target }) => {target.focus();console.log(target)} } />
    </div>
  )
}

export default MainContent

 {/* {word_arr.map((word, index)=>{
            return(<div className='word'>{word.split('').map(letter=><Letter letter={letter}/>)}</div>)
          })} */}