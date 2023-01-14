import { useContext, useEffect, useState } from 'react'
import { ChallengesContext } from '../../contexts/ChallengerContext';
import { CountdowContext } from '../../contexts/CountdowContext';

import styles from '../CountDow/CountDow.module.css'



export function CountDow() {
  const { hasFinished,
    isActive,
    minutes,
    seconds,
    resetCountdow,
    startCountdown
  } = useContext(CountdowContext)


  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')





  return (
    <div>
      <div className={styles.countdowContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button
          disabled
          className={styles.countDowButton}
        >
          Ciclo encerrrado
          <img src="icons/Vector.svg" alt="check" />
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type='button'
              className={`${styles.countDowButton} ${styles.countDowButtonActive}`}
              onClick={resetCountdow}
            >
              Abandonar ciclo
            </button>
          )
            :
            <button
              type='button'
              className={styles.countDowButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
            </button>
          }
        </>
      )}
    </div>

  )
}