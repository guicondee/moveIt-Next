import { useContext, useEffect, useState } from 'react'
import { ChallengesContext } from '../../contexts/ChallengerContext';

import styles from '../CountDow/CountDow.module.css'

let countdowTimeout: NodeJS.Timeout;

export function CountDow() {
  const { startNewChallenge } = useContext(ChallengesContext)

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  function startCountdown() {
    setIsActive(true)
  }

  function resetCountdow() {
    clearTimeout(countdowTimeout)
    setIsActive(false)
    setTime(0.1 * 60)

  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdowTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)

    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false)
      startNewChallenge()
    }
  }, [isActive, time])


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