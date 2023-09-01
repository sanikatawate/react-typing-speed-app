import React, {useState} from 'react';
import { useTimer } from 'react-timer-hook';
import MainContent from './MainContent';
import { Link, useNavigate } from "react-router-dom"

function MyTimer({ expiryTimestamp}) {
    const [over, setOver] = useState(false)
    const {
      seconds,
      minutes,
      isRunning,
      start,
      pause,
      resume,
      restart,
    } = useTimer({ expiryTimestamp, onExpire: () => setOver(true) });

    let navigate = useNavigate();

  return (

    <div style={{textAlign: 'center'}}>
        {over && navigate('/result') }
      <div style={{fontSize: '50px'}}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
    </div>
  );
}

export default MyTimer