import {useEffect, useState} from "react";

import s from './Timer.module.scss'

const Timer = ({timerActive, setTimerActive}) => {
  const [seconds, setSeconds] = useState(60);

  const minutes = parseInt(seconds / 60, 10);

  useEffect(() => {
    if (seconds > 0 && timerActive) {
      setTimeout(setSeconds, 1000, seconds - 1);
    } else {
      setTimerActive(false);
    }
  }, [seconds, timerActive]);

  return (
    <>
      <div className={s.text}>Watch The Video Above, Then Start Making Money In:</div>
      <div className={s.timer}>{minutes} min {seconds} sec</div>
    </>
  )
}

export default Timer;
