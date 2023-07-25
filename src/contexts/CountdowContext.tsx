import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengerContext";

let countdowTimeout: NodeJS.Timeout;


interface CountdowContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountdown: () => void;
  resetCountdow: () => void;
}

interface CountdowContextProviderProps {
  children: ReactNode;
}

export const CountdowContext = createContext({} as CountdowContextData)

export function CountdowProvider({ children }: CountdowContextProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext)

  const [time, setTime] = useState(1800);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  function startCountdown() {
    setIsActive(true)
  }

  function resetCountdow() {
    clearTimeout(countdowTimeout)
    setIsActive(false)
    setTime(1800)
    setHasFinished(false)

  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdowTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)

    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false)
      startNewChallenge()
    }
  }, [isActive, time])

  return (
    <CountdowContext.Provider value={{
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountdown,
      resetCountdow
    }}>
      {children}
    </CountdowContext.Provider>
  )
}
