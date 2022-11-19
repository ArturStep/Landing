import Form from "./components/Form/Form";
import Header from "../../components/Header/Header";
import Video from "../../components/Video/Video";
import Footer from "../../components/Footer/Footer";

import s from "./Landing.module.scss";
import Timer from "./components/Timer/Timer";

const Landing = ({timerActive, setTimerActive}) => {

  return (
    <>
      <Header>
        <header className={s.header}>
          <h1>Shocking Report About <br/> Mary's System!</h1>
          <h2>Increase Your Income From Home Today!</h2>
          <h3>Watch the Video Below</h3>
        </header>
      </Header>
      <Video src={"https://www.youtube.com/embed/l3_HA0lBPu0"}/>
      {timerActive ? < Timer timerActive={timerActive} setTimerActive={setTimerActive}/> : <Form/>}
      <Footer/>
    </>
  )
}

export default Landing;
