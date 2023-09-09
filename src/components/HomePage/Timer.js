import React, {useState} from 'react';
import { useTimer } from 'react-timer-hook'; 
// import { Link, useNavigate } from "react-router-dom" //Redirect to result page on timer over
import "../Main.css";

function MyTimer({expiryTimestamp, setRstate}) {
    const [over, setOver] = useState(false)
    const {seconds, minutes} = useTimer({ expiryTimestamp, onExpire: () => setOver(true) });

    // let navigate = useNavigate();

  return (
    <div>
        {over && setRstate(true) }
        <div className='timer' style={{color:"white", fontSize:"35px"}}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
    </div>
  );
}

export default MyTimer