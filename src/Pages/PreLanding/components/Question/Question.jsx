import s from './Question.module.scss'
import {useState} from "react";

const Question = ({setQuestions}) => {
  const [nextStep, setNextStep] = useState(false)
  const [value, setValue] = useState('3')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const onCLickCheckAnswer = () => {
    if (value === '2') {
      setQuestions(false)
    }
  }

  return (
    <div className={s.root}>
      {nextStep === false ?
        <div className={s.firstQ}>
          <h2>Are you above 18?</h2>
          <section>
            <button onClick={() => setNextStep(true)}>Yes</button>
            <button onClick={() => setNextStep(true)}>No</button>
          </section>
        </div>
        :
        <div className={s.secondQ}>
          <h2>1+1=?</h2>
            <select defaultValue={value} onChange={handleChange}>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={10}>10</option>
            </select>
            <button onClick={onCLickCheckAnswer}>Check answer</button>
        </div>}
    </div>
  )
}

export default Question;
