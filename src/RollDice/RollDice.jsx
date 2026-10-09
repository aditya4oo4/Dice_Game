import styles from "./RollDice.module.css"


function RollDice({diceClicked ,rollDice,message , resetscore,onBack}) {

 
  
  

  return (
    <>
    
    <div className={styles.dice} onClick={rollDice}>
      <img  src={`/dice/dice_${diceClicked}.png`} alt="dice 1" />
    </div>
    <div className={styles.btn}>
      <div><h2>{message}</h2></div>
      
        <p className={styles.para}>Click on Dice to Roll</p>
        <button onClick={resetscore} className={styles.btn}>Reset Score</button>    
        <button onClick={onBack} className={styles.btn}>Go to Homme</button>    
        
    
    </div>
    </>
  )
}

export default RollDice
