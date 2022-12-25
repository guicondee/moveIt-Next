import styles from '../Profile/Profile.module.css'

export function Profile() {
 return (
  <div className={styles.profileContainer}>
    <img src="https://github.com/guicondee.png" alt="Foto de perfil" />
    <div >
      <strong>Guilherme Condé</strong>
      <p>
        <img src="icons/level.svg" alt="Level" />
        Level 1
      </p>
    </div>
  </div>
 )
}