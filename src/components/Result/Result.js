// import React, { useEffect } from 'react'

// function Result(props) {
//   const arr = []
//   useEffect(() => {
//     const interval = setInterval(() => {
//       console.log('This will run every second!', arr);
//       arr.push(props.wpm)
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);
//   return (
//     <div>
//       <header>
//         <p>WPM: {props.wpm}</p>
//         <p>Accuracy: {props.acc}</p>
//       </header>
//     </div>
//   )
// }

// export default Result