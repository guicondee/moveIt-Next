import { CompletedChallenges } from "../components/CompletedChallenges/CompletedChanllenges";
import { CountDow } from "../components/CountDow/CountDow";
import { ExperienceBar } from "../components/ExperienceBar/ExperienceBar";
import { Profile } from "../components/Profile/Profile";

import Head from "next/head";

import styles from '../styles/home.module.css'
 


export default function Home() {
  return (
    <div  className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <CountDow />
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
