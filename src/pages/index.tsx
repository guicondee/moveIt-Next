import { CompletedChallenges } from "../components/CompletedChallenges/CompletedChanllenges";
import { CountDow } from "../components/CountDow/CountDow";
import { ExperienceBar } from "../components/ExperienceBar/ExperienceBar";
import { Profile } from "../components/Profile/Profile";

import Head from "next/head";
import { GetServerSideProps } from "next";

import styles from '../styles/home.module.css'
import { ChallengeBox } from "../components/ChallengeBox/ChallengeBox";
import { CountdowProvider } from "../contexts/CountdowContext";
import { ChallengesProvider } from "../contexts/ChallengerContext";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
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
    </ChallengesProvider>



  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
