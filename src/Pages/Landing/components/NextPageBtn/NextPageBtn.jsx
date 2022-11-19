import s from './NextPageBtn.module.scss';
import {NavLink} from "react-router-dom";

const NextPageBtn = ({setTimerActive}) => {

  const onClickBtn = () => {
    window.scrollTo(0, 0)
    setTimerActive(true)
  }

  return (
    <NavLink to={'/landing'}>
      <button className={s.link} onClick={onClickBtn}>
        Get Started Now
      </button>
    </NavLink>
  )
}

export default NextPageBtn;
