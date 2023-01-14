import { CompletedChallenges } from "../components/CompletedChallenges/CompletedChanllenges";
import { CountDow } from "../components/CountDow/CountDow";
import { ExperienceBar } from "../components/ExperienceBar/ExperienceBar";
import { Profile } from "../components/Profile/Profile";

import Head from "next/head";

import styles from '../styles/home.module.css'
import { ChallengeBox } from "../components/ChallengeBox/ChallengeBox";
import { CountdowProvider } from "../contexts/CountdowContext";



export default function Home() {
  return (
    <main className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>

      <ExperienceBar />

      <CountdowProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <CountDow />
          </div>

          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdowProvider>

    </main>
  )
}
