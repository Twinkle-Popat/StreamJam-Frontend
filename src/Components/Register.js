import React, { useState } from 'react'
import { ValidateEmail } from './Validators/ValidateEmail';
import { ValidatePassword } from './Validators/ValidatePassword';
import { ValidateUsername } from './Validators/ValidateUsername';
import { ValidatePasswordConf } from './Validators/ValidatePasswordConf';

const Register = (props) => {
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
      },
      username: {
        value: '',
        isValid: false,
        showError: false,
      },
      passwordConf: {
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

    const handleValueChange3 = (e) => {
      setFormState({ ...formState, username: { value: e.target.value, isValid: true, showError: false } })
      console.log(formState)
    }
    const handleValueChange4 = (e) => {
      setFormState({ ...formState, passwordConf: { value: e.target.value, isValid: true, showError: false } })
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
        case 'username':
          isValid = ValidateUsername(e.target.value);
          break;
        case 'passwordConf':
          isValid = ValidatePasswordConf(formState.password.value, e.target.value);
          console.log('config',isValid)
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

  return (
    <div className='register-container'>
        
        
        <form className='auth-form'>
        <p>
          {/* <img src={logoPlaceholder} alt="" />  */}
          <p style={{fontWeight:"bolder", fontSize:"20px", marginTop:"20px", marginBottom:"-3px"}}>Sign up</p></p>
  <div class="mb-3" style={{marginBottom: "0px" }}>
    <label style={{marginBottom:"0"}}for="exampleInputPassword1" class="form-label">Username</label>
    <input style={{marginBottom: "0" }} onBlur={(e) => validateInput(e, 'username')} onChange={handleValueChange3} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <span className='auth-form-validation-message'>
      {formState.username.showError && 'Write a valid username'}
    </span>
  </div>
  


  <div class="mb-3" style={{marginBottom: "0px" }}>
    <label style={{marginBottom:"0"}} for="exampleInputEmail1" class="form-label">Email</label>
    <input style={{marginBottom: "0" }} onBlur={(e) => validateInput(e, 'email')} onChange={handleValueChange1} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <span className='auth-form-validation-message'>
      {formState.email.showError && 'Email must be valid'}
    </span>
  </div>
  <div class="mb-3" style={{marginBottom: "0px" }}>
    <label style={{marginBottom:"0"}} for="exampleInputPassword1" class="form-label">Password</label>
    <input style={{marginBottom: "0" }} onBlur={(e) => validateInput(e, 'password')} onChange={handleValueChange2} type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <span className='auth-form-validation-message'>
      {formState.password.showError && 'Password must be 6 to 12 characters with no space'}
    </span>
  </div>
  <div class="mb-3" style={{marginBottom: "0px" }}>
    <label style={{marginBottom:"0"}} for="exampleInputPassword1" class="form-label">Confirm Password</label>
    <input style={{marginBottom: "0" }} onBlur={(e) => validateInput(e, 'passwordConf')} onChange={handleValueChange4} type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <span className='auth-form-validation-message'>
      {formState.passwordConf.showError && 'Password does not match'}
    </span>
  </div>
 
  
  <button style={{marginBottom: "0px" }} type="submit" class="btn btn-primary my-3" disabled={!formState.password.isValid || !formState.email.isValid || formState.username.isValid|| (formState.password.isValid!=formState.passwordConf.isValid)}>Register</button>
</form>
       
        <span  style={{marginBottom:"20px"}}  onClick={switchAuthHandler}>Already have an account ? Sign in</span>
    </div>
  )
}

export default Register