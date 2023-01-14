import { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengerContext'
import styles from '../Profile/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/guicondee.png" alt="Foto de perfil" />
      <div >
        <strong>Guilherme Condé</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level  {level}
        </p>
      </div>
    </div>
  )
}