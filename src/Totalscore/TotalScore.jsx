import React from 'react'
import styles from "./TotalScore.module.css"
import NumberSelector from '../NumberSelector/NumberSelector'

function TotalScore({ score }) {
  return (
    <div className={styles.main}>
        <h1 className={styles.score}>{score}</h1>
        <p className={styles.para}>Total Score</p>

    </div>
  )
}

export default TotalScore
