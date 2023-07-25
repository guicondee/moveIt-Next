import { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengerContext'
import styles from '../Profile/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://plus.unsplash.com/premium_photo-1683865775631-3283bfaf6508?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Foto de perfil" />
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
