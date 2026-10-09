
import { useState } from 'react'
import styles from "./GamePage.module.css"
import TotalScore from '../Totalscore/TotalScore'
import NumberSelector from '../NumberSelector/NumberSelector';
import RollDice from '../RollDice/RollDice'

function GamePage({onBack}) {

  const [isSelected, setisSelected] = useState()

  const [diceClicked, setdiceClicked] = useState(1);
  const [message, setmessage] = useState("");
  const [score, setscore] = useState(0)

  const resetscore = () => {
    setscore(0);
    setmessage("");
    setisSelected(undefined);
  }


  const handleSelectNumber = (number) => {
    setisSelected(number);
    setmessage("");
  }

  const rollDice = () => {

    
    if (!isSelected) {
      alert("Please select a number before rolling the dice");
      return;
    }

    
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setdiceClicked(randomNumber);


    if (isSelected === randomNumber) {
      setmessage("You win 🎉🎊");
      setscore(prev => prev + 1);
    }
    else {
      setmessage("You lose 😢");
      setscore(prev => Math.max(0, prev - 1));
    }

    setTimeout(() => {
      setmessage("");
    }, 1000);

    // Roll hone ke baad selected number clear ho jayega
    setisSelected(undefined);
  }

  return (
    <>
      <div className={styles.gameMain}>
        <TotalScore score={score} />

        <NumberSelector
          isSelected={isSelected}
          setisSelected={handleSelectNumber}
        />
      </div>

      <div>
        <RollDice
          diceClicked={diceClicked}
          rollDice={rollDice}
          message={message}
          resetscore={resetscore}
          onBack={onBack}
        />
      </div>
    </>
  )
}

export default GamePage
