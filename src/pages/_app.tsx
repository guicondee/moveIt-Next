import '../styles/global.css'
import type { AppProps } from 'next/app'

import { ChallengesProvider } from '../contexts/ChallengerContext'
import { CountdowContext } from '../contexts/CountdowContext'

export default function App({ Component, pageProps }: AppProps) {

  return (

    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>


  )
}
