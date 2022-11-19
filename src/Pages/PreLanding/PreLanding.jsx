import {useState} from "react";
import Header from "../../components/Header/Header";
import Video from "../../components/Video/Video";
import Question from "./components/Question/Question";
import NextPageBtn from "../Landing/components/NextPageBtn/NextPageBtn";
import s from './PreLanding.module.scss'
import Footer from "../../components/Footer/Footer";

const PreLanding = ({setTimerActive}) => {
  const [questions, setQuestions] = useState(true)

  return (
    <>
      <Header>
        <header className={s.header}>Click the play button to watch the video and answer questions to get access</header>
      </Header>
      <Video src={"https://www.youtube.com/embed/1Vatp8VLGcs"}/>
      {questions ?
        <Question setQuestions={setQuestions}/> : <NextPageBtn setTimerActive={setTimerActive}/>}
      <Footer/>
    </>
  );
}

export default PreLanding;
