import styles from '../ChallengeBox/ChallengeBox.module.css'

export function ChallengeBox() {
  return (
    <div className={styles.challengeBoxContainer}>
      <div className={styles.challengeNotActive}>
        <strong>
          Inicie um ciclo para receber desafios
        </strong>

        <p>
          <img src="/icons/Icon.svg" alt="setinha pra cima verde" />
          Avance de level completando desafios.
        </p>
      </div>
    </div>

    // <div className={s }>
    //   <span>Ganhe 400 xp</span>

    //   <div></div>

    //   <div>
    //     <img src="/icons/Group.svg" alt="icone mão segurando um peso" />
    //     <strong>Exercite-se</strong>
    //     <p>É agora Diegão, bora lá meu parça.
    //       Caminhe por 3 minutos e estique suas pernas
    //       pra você ficar saudável.</p>
    //   </div>

    //   <div>
    //     <button>Falhei</button>
    //     <button>Completei</button>
    //   </div>
    // </div>
  )
}