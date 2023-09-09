import React, { useState } from 'react'
import "../Main.css"

function About() {

  const [data, setData] = useState({
    topic:'',
    name:'',
    email:'',
    message:''
  })

  const handleChange = (e)=>{
    setData((prev)=>{
      return({...prev, [e.target.id]:e.target.value})
    })
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(data)
  }
  return (
    <div className='login'>
        <div className='reviews' style={{width:'500px'}}>
          <h2>Your <u style={{textDecorationColor:'rgb(155 205 134)'}}>feedback</u> is highly valuable to us.</h2>
          <p>We strive to provide you with the best typing experience and the best platform to improve your skills.</p>
          <p>Feel free to post any queries you may have.</p>
          <div className='contribute'>
            <h4>Help us grow !!</h4>
            <p>We appreciate your contributions! Your efforts play a significant role in our progress and growth.</p>
            <button>Contribute</button>
          </div>
        </div>
        <div className='form' style={{width:'465px'}}>
          <form>
            <label htmlFor='topic'>Topic</label>
            <input 
              type="text"
              placeholder="Select a topic"
              id="topic"
              onChange={handleChange}
              value={data.topic}/>

              <label htmlFor='name'>Name</label>
              <input 
              type="text"
              placeholder="Name"
              id="name"
              onChange={handleChange}
              value={data.name}/>

              <label htmlFor='email'>Email</label>
              <input 
              type="text"
              placeholder="name@provider.com"
              id="email"
              onChange={handleChange}
              value={data.email}/>

              <label htmlFor='message'>Message</label>
              <textarea
              type="text"
              placeholder="Type your message..."
              id="message"
              onChange={handleChange}
              value={data.message}/>

            <button onClick={handleSubmit}  style={{backgroundColor:'rgb(132, 136, 135)'}}>
              Submit message
            </button>
          </form>
        </div>
    </div>
  )
}

export default About
