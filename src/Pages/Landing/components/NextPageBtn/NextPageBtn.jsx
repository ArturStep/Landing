import s from './NextPageBtn.module.scss';
import {NavLink} from "react-router-dom";

const NextPageBtn = () => {
  return (
    <NavLink to={'/landing'}>
      <button className={s.link} onClick={() => window.scrollTo(0, 0)}>
        Get Started Now
      </button>
    </NavLink>
  )
}

export default NextPageBtn;
