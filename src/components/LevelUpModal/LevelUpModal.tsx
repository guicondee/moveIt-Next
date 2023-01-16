import { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengerContext'
import styles from '../LevelUpModal/LevelUpModal.module.css'

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext)
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns!</strong>
        <p>Você alcançou um novo level.</p>

        <button
          type='button'
          onClick={closeLevelUpModal}

        >
          <img src="/icons/close.svg" alt="imagem para fechar modal" />
        </button>
      </div>
    </div>
  )
}