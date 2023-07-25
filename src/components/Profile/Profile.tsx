import { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengerContext'
import styles from '../Profile/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://images.unsplash.com/photo-1634034379073-f689b460a3fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" />
      <div >
        <strong>User 00038</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level  {level}
        </p>
      </div>
    </div>
  )
}
