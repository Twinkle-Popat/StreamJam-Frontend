import React, { useState } from 'react'
import { ValidateEmail } from './Validators/ValidateEmail';
import { ValidatePassword } from './Validators/ValidatePassword';
import { useLogin } from './Hooks/uselogin';
import toast from 'react-hot-toast';
const Login = (props) => {

  const{login,isloding}=useLogin()
    const {switchAuthHandler} = props
    const[formState, setFormState] = useState({
     email: {
        value: '',
        isValid: false,
        showError: false,
      },
     password: {
        value: '',
        isValid: false,
        showError: false,
      }
    });
    const handleValueChange1 = (e) => {
      setFormState({ ...formState, email: { value: e.target.value, isValid: true, showError: false } })
      console.log(formState)
    }
    const handleValueChange2 = (e) => {
      setFormState({ ...formState, password: { value: e.target.value, isValid: true, showError: false } })
      console.log(formState)
    }

    const validateInput = (e,field) => {
      let isValid = true;
      console.log(field)
      switch (field) {
        case 'email':
          isValid = ValidateEmail(e.target.value);
          console.log(isValid)
          break;
        case 'password':
          isValid = ValidatePassword(e.target.value);
          break;
        default:
          break;
      }

      setFormState((prevState) => ({
        ...prevState,
        [field]: {
          ...prevState[field],
          isValid,
          showError: !isValid,
        }
      }))

    }

    const handlelogin = (e)=>{
      e.preventDefault();
      
      login(formState.email.value,formState.password.value);
    }

  return (
    <div className='login-container'>
        
        
        <form className='auth-form'>
        <p>
          {/* <img src={logoPlaceholder} alt="" />  */}
          <p style={{fontWeight:"bolder", fontSize:"20px", marginTop:"20px", marginBottom:"-3px"}}>Login</p></p>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input onBlur={(e) => validateInput(e, 'email')} onChange={handleValueChange1} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <span className='auth-form-validation-message'>
      {formState.email.showError && 'Email must be valid'}
    </span>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input onBlur={(e) => validateInput(e, 'password')} onChange={handleValueChange2} type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <span className='auth-form-validation-message'>
      {formState.password.showError && 'Password must be 6 to 12 characters with no space'}
    </span>
  </div>
  
  <button onClick={handlelogin} type="submit" class="btn btn-primary my-3" disabled={!formState.password.isValid || !formState.email.isValid}>Submit</button>
</form>
       
        <span style={{marginBottom:"40px"}}  onClick={switchAuthHandler}>Don't have account? Sign up</span>
    </div>
  )
}

export default Login