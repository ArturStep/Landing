import {useEffect, useState} from "react";

import s from './Timer.module.scss'

const Timer = ({timerActive, setTimerActive}) => {
  const [second, setSeconds] = useState(60);

  const minutes = Math.floor(second / 60);

  const seconds = second % 60;

  useEffect(() => {
    if (second > 0 && timerActive) {
      setTimeout(setSeconds, 1000, second - 1);
    } else {
      setTimerActive(false);
    }
  }, [second, timerActive]);

  return (
    <>
      <div className={s.text}>Watch The Video Above, Then Start Making Money In:</div>
      <div className={s.timer}>{minutes} min {seconds} sec</div>
    </>
  )
}

export default Timer;
