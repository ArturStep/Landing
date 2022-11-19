import s from './Form.module.scss'

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={s.form}>
      <h1>Check Availability NOW!</h1>
      <h2>Enter Your Details Below and Click The <br/> "Get Started Now" Button To Continue...</h2>
      <form onSubmit={handleSubmit}>
        <input type={'text'} placeholder={'Name'}/>
        <input type={'email'} placeholder={'Email'}/>
        <label>Mobile Phone</label>
        <input type={'tel'} placeholder={'+1 201-555-0123'}/>
        <button>Get Started Now</button>
      </form>
      <p>* By clicking the "Get Started Now" button you agree to the privacy policy and T&C of this website.</p>
    </div>
  )
}

export default Form;
