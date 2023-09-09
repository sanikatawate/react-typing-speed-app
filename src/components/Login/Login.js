import React, { useState } from 'react'
import "../Main.css"

function Login() {
  const [data, setData] = useState({email:''})

  const handleChange = (e)=>{
    setData((prev)=>{
      return({...prev, [e.target.id]: e.target.value});
    });
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(data)
  }
  return (
    <div className='login'>
        <div className='form'>
          <p><b>Welcome Back</b><br/>Enter you email to sign into your account</p>
          <form>
            <input 
              type="text"
              placeholder="name@provider.com"
              id="email"
              onChange={handleChange}
              value={data.email}/>
            <button onClick={handleSubmit} style={{backgroundColor:'rgb(132, 136, 135)'}}>
              Sign in with Email
            </button>
          </form>
          <p> Or Continue With</p>
          <div>
            <button>Google
              </button>
            <button>Github</button>
          </div>
        </div>
        <div className='reviews comments'>this is a review section</div>
    </div>
  )
}

export default Login