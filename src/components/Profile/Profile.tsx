import { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengerContext'
import styles from '../Profile/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://unsplash.com/pt-br/fotografias/mr26tQgHGmc" />
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
