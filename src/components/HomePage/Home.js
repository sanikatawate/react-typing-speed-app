import React, { useState } from 'react'
import MainContent from "./MainContent";
import Hero from "./Hero";

function Home() {
  const [wordlimit, setWordLimit] = useState(50)
  const [timelimit, setTimeLimit] = useState(30)
  return (
    <>
        <div>
            <Hero setWordLimit={setWordLimit} setTimeLimit={setTimeLimit} />
            <MainContent wl={wordlimit} tl={timelimit} />
        </div>
    </>
  )
}

export default Home