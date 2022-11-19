import s from './Footer.module.scss'
import {NavLink} from "react-router-dom";

const Footer = () => {
  return (
    <footer className={s.footer_content}>
      <div className={s.line} />
      <div>
        <ul>
          <li>
            <NavLink to={'/terms'} target="_blank">Terms & Conditions</NavLink>
          </li>
          <li>
            <NavLink to={'/disclaimer'} target="_blank">Earnings Disclaimer</NavLink>
          </li>
          <li>
            <NavLink to={'/privacy'} target="_blank">Privacy Policy</NavLink>
          </li>
        </ul>
      </div>
      <h3>All rights reserved.</h3>
      <h4>This site is not a part of the Facebook website or Facebook Inc. Additionally. This site is NOT endorsed by
        Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc. Narlex Holdings Ltd Globalserve Business Centre,
        Vasili Michaelidi 9, Limassol 3026, Cyprus</h4>
    </footer>
  )
}

export default Footer;
