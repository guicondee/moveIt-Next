 import styles from '../ExperienceBar/ExperienceBar.module.css'
export function ExperienceBar() {
  return (
    <header className={styles.experienceBar}>
      <span>8 px</span>
      <div>
        <div style={{width: '50%'}}/> 

        <span className={styles.currentExperience} style={{left: '50%'}}>
          300xp
        </span>
      </div>
      <span>600 xp</span>
    </header>
  )
}
 