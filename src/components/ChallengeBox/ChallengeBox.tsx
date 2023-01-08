import styles from '../ChallengeBox/ChallengeBox.module.css'

export function ChallengeBox() {
  const hasActiveChallenge = true;
  return (
    <div className={styles.challengeBoxContainer}>
      {hasActiveChallenge ? (

        <div className={styles.challengeActive}>
          <header>Ganhe 400 xp</header>
          <main>
            <img src="/icons/Group.svg" alt="icone mão segurando um peso" />
            <strong>Novo desafio</strong>
            <p>É agora Guilherme, bora lá meu parça.
              Caminhe por 3 minutos e estique suas pernas
              pra você ficar saudável.
            </p>
          </main>
          <footer>
            <button
              type='button'
              className={styles.challengeFailButton}
            >
              Falhei
            </button>
            <button
              type='button'
              className={styles.challengeSucceededButton}
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