import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengerContext';
import { CountdowContext } from '../../contexts/CountdowContext';
import styles from '../ChallengeBox/ChallengeBox.module.css'

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenger } = useContext(ChallengesContext)
  const { resetCountdow } = useContext(CountdowContext)

  function handleChallengeSucceeded() {
    completeChallenger();
    resetCountdow();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdow();
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (

        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type='button'
              className={styles.challengeFailButton}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              type='button'
              className={styles.challengeSucceededButton}
              onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>
            Inicie um ciclo para receber desafios
          </strong>
          <p>
            <img src="/icons/Icon.svg" alt="setinha pra cima verde" />
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  )
}