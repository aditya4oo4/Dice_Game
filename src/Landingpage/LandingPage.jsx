import React from 'react'
import styles from "./LandingPage.module.css"

function LandingPage({toggle}) {
  return (
        <div className={styles.row}>
            <div className={styles.colFirst}>
                <img className = {styles.landImg } src="\image\Glossy Ivory Die in Midair.png" alt=""  />
            </div>
            <div className={styles.colSecond}>
                <h1 className={styles}> Dice Game </h1>
               <button onClick={toggle} className={styles.input}>PlayNow</button>
            </div>
        </div>
    
  )
}

export default LandingPage
