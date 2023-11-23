import React,{useState} from 'react'
import {validpasswordmessage} from './Validators/ValidatePassword'
import { ValidatePassword } from './Validators/ValidatePassword';
const inputs=[
  {
      field:'password',
      label:'Current password',
      ValidationMessage: validpasswordmessage,
      type:'password',
  },
  {
      field:'newPassword',
      label:'New password',
      ValidationMessage: validpasswordmessage,
      type:'password',
  }
  

];
const PasswordSettings = () => {
  const[formState, setformState] = useState(
    {
      password:{
        isValid:false,
        showError:false,
        value:""
      },
      newPassword:{
        isValid:false,
        showError:false,
        value:""
      }
    }
  );



  const validateInput = (e,field) => {
    let isValid = ValidatePassword(e) ;
    console.log(field)
    

    setformState((prevState) => ({
        ...prevState,
        [field]: {
          ...prevState[field],
          isValid,
          showError: !isValid,
        }
      }))
    };

  const isSubmitButtonDisabled = !formState.password.isValid|| !formState.password.isValid;

  const handleFormSubmit = (e) =>{
    e.preventDefault()

    //API CALL
  }
  return (
    <form className='settings-form'>
      {
        inputs.map(input=>(
          <div key={input.field}>
          <div className='auth-form-label'>
                <span>{input.label}</span>
                </div>
          <input
                    
          id={input.field}
          value={formState[input.field].value}
          onChange={(e)=>setformState({...formState,[input.field]:{...formState[input.field],value:e.target.value}})}
          onBlur={(e) => validateInput(e, input.field)}
          type={input.type}

          />
           {formState[input.field].showError && (
                    <span className='auth-form-validation-message'>{input.ValidationMessage}</span>
                )}
          </div>
        ))
      }
      <button disabled={isSubmitButtonDisabled} onChange={handleFormSubmit}>Save Password</button>
    </form>
  )
}

export default PasswordSettings