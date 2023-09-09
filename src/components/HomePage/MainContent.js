import React, { useState } from 'react'
import "../Main.css" 
import { faker } from "@faker-js/faker"; 
import refresh from "../../assets/images/refresh.jpeg"
import MyTimer from './Timer'
// import Result from '../Result/Result'; 
import Modal from '../Common/Modal'
import Word from './Word';

let time

function MainContent(props) {

    const [para, setPara] = useState(faker.word.words(100).toLowerCase().split(' '))
    const [state, setState] = useState(false)
    const [rstate, setRstate] = useState(false)
    const [activeWordIndex, setActiveWordIndex] = useState(0)
    const [activeLetterIndex, setActiveLetterIndex] = useState(0)
    const [letterDic, setLetterDic] = useState([])
    const [correctCount, setCorrectCount] = useState(0)
    const [incorrectCount, setIncorrectCount] = useState(0)
    const [showModal, setShowModal] = useState(true);
    
    const onRefresh=()=>{
      setState(false)
      setPara(faker.word.words(100).toLowerCase().split(' '))
      setLetterDic([])
      setActiveLetterIndex(0)
      setActiveWordIndex(0)
      setRstate(false)
      setShowModal(true)
    }

    const handler = (e)=>{
      setState(true)
      time = new Date()
      time.setSeconds(time.getSeconds()+props.tl); 
      console.log(e.nativeEvent.key, para[activeWordIndex][activeLetterIndex])

      if(e.nativeEvent.key===para[activeWordIndex][activeLetterIndex]){
        setActiveLetterIndex((prev)=>prev+1)
        setLetterDic([...letterDic, {index: activeLetterIndex, style:'correct'}])
        setCorrectCount(correctCount+1)
      }
      else{
        setActiveLetterIndex((prev)=>prev+1)
        setLetterDic([...letterDic, {index: activeLetterIndex, style:'incorrect'}])
        setIncorrectCount(incorrectCount+1)
      }

      if(e.nativeEvent.key===" "){
        setActiveWordIndex((prev)=>prev+1)
        setActiveLetterIndex(0)
        setLetterDic([])
        setCorrectCount(correctCount+1)
        if(activeWordIndex>=props.wl){
          setRstate(true)
        }
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
          {!rstate && state &&<MyTimer expiryTimestamp={time} setRstate={setRstate}/>}
        </div>

        <div className='para'>
          {para.slice(0, props.wl).map((item, key)=>{
            if(activeWordIndex===key){
              return(<b><Word word={item} key={key} index={key} style="word active" active={true} letterDic={letterDic}/></b>)
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
      {/* {state && <Result wpm={activeWordIndex*60/props.tl} tl={props.tl} acc={correctCount/(incorrectCount+correctCount)}/>} */}
      {rstate && showModal &&  <div className='settingsModal'>
        <Modal className="fade-up" toggleModal={setShowModal} data={
          <div>
          <p style={{color:'white'}}>WPM: {activeWordIndex*60/props.tl}</p>
          <p style={{color:'white'}}>ACCURACY: {(correctCount/(incorrectCount+correctCount)).toFixed(2)}</p>
        </div>
        }/>
    </div>}
    </>
  )
}



export default MainContent