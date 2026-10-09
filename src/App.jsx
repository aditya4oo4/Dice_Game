import React from 'react'
import LandingPage from './Landingpage/LandingPage'
import { useState } from 'react'
import GamePage from './GamePage/GamePage';

function App() {

  const [isGameStarted , setisGameStarted] =useState(true);
 

  const togglegame =()=>{
    setisGameStarted((prev) => !prev);
  }


  return (
   <>
    {isGameStarted? (<GamePage onBack={togglegame}/>):(<LandingPage toggle ={togglegame}/> )}

   </>
  )
}

export default App
