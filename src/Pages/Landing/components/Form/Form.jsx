import s from './Form.module.scss'
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import {useRef, useState} from "react";

const Form = () => {
  const nameRef = useRef('')
  const emailRef = useRef('')

  const [name, setName] = useState('name')
  const [email, setEmail] = useState('email')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={s.form}>
      <h1>Check Availability NOW!</h1>
      <h2>Enter Your Details Below and Click The <br/> "Get Started Now" Button To Continue...</h2>
      <form onSubmit={handleSubmit}>
        <input id={'text'} type={'text'} ref={nameRef} onBlur={() => setName(nameRef.current.value)} placeholder={'Name'}/>
        {name ? null : <div className={s.error}>Name is required</div>}
        <input id={'email'} type={'email'} ref={emailRef} onBlur={() => setEmail(emailRef.current.value)} placeholder={'Email'}/>
        {email ? null : <div className={s.error}>Email is required</div>}
        <label>Mobile Phone</label>
        <PhoneInput
          inputStyle={{padding: "10px 10px 10px 40px", margin: "4px 0", width: "250px", height: "50px", border: "1px solid #d6b870",
            borderRadius: "3px", backgroundColor: "#fff", fontSize: "20px", lineHeight: "19px", boxSizing: "border-box",
            boxShadow: "inset 1px 1px 3px rgb(1 1 1 / 35%)"}}
          dropdownStyle={{width: "200px"}}
          buttonStyle={{border: "0", backgroundColor: "transparent"}}
          containerStyle={{width: "250px"}}
          country={'us'}
        />
        <button>Get Started Now</button>
      </form>
      <p>* By clicking the "Get Started Now" button you agree to the privacy policy and T&C of this website.</p>
    </div>
  )
}

export default Form;
