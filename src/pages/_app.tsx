import '../styles/global.css'
import type { AppProps } from 'next/app'

import { ChallengesProvider } from '../contexts/ChallengerContext'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}
