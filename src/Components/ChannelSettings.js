import React,{useState} from 'react'
import { descriptionValidationMessage } from './Validators/ValidateDescription'
import { titleValidationMessage } from './Validators/ValidateTitle'
import { validusernamemessage } from './Validators/ValidateUsername'
import{avatarURLValidationMessage} from './Validators/ValidateAvatarURL'
import ValidateAvatarURL from './Validators/ValidateAvatarURL'
import ValidateDescription from './Validators/ValidateDescription'
import ValidateTitle from './Validators/ValidateTitle'
import  ValidateUsername  from './Validators/ValidateUsername'


const inputs=[
    {
        field:'username',
        label:'Username',
        ValidationMessage:validusernamemessage,
        type:'text',
    },
    {
        field:'title',
        label:'Title',
        ValidationMessage:titleValidationMessage,
        type:'text',
    },
    {
        field:'description',
        label:'Description',
        ValidationMessage:descriptionValidationMessage,
        type:'text',
        textarea:true,
    },
    {
        field:'avatarURL',
        label:'Avatar URL',
        ValidationMessage:avatarURLValidationMessage,
        type:'text',
    }
    

];

const ChannelSettings = ({settings}) => {

    const [formState,setformState]=useState({
        title:{
            isValid:false,
            showError:false,
            value:settings.title,
        },
        username:{
            isValid:false,
            showError:false,
            value:settings.username,
        },
        avatarURL:{
            isValid:false,
            showError:false,
            value:settings.avatarURL,
        },
        description:{
            isValid:false,
            showError:false,
            value:settings.description,
        }
    })
    const validateInput = (e,field) => {
        let isValid = true;
        console.log(field)
        switch (field) {
          case 'username':
            isValid = ValidateUsername(e.target.value);
            console.log(isValid)
            break;
          case 'avatarURL':
            isValid = ValidateAvatarURL(e.target.value);
            console.log(isValid)
            break;
          case 'title':
            isValid = ValidateTitle(e.target.value);
            console.log(isValid)
            break;
          case 'avatarURL':
            isValid = ValidateDescription(e.target.value);
            console.log(isValid)
            break;

          default:
            break;
        }

        setformState((prevState) => ({
            ...prevState,
            [field]: {
              ...prevState[field],
              isValid,
              showError: !isValid,
            }
          }))
        };

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        //API CALL
    }

    const isSubmitButtonDisabled=
       (!formState.username.isValid||
       !formState.title.isValid||
       !formState.description.isValid||
       !formState.avatarURL.isValid);
  return (
    <form className='settings-form'>
        {inputs.map((input)=>(
            <div key={input.field}>
                <div className='auth-form-label'>
                <span>{input.label}</span>
                </div>
                {input.textarea ? (
                    <textarea
                    
                    id={input.field}
                    value={formState[input.field].value}
                    onChange={(e)=>setformState({...formState,[input.field]:{...formState[input.field],value:e.target.value}})}
                    onBlur={(e) => validateInput(e, input.field)}
                    />
                ):(
                    <input
                    
                    id={input.field}
                    value={formState[input.field].value}
                    onChange={(e)=>setformState({...formState,[input.field]:{...formState[input.field],value:e.target.value}})}
                    onBlur={(e) => validateInput(e, input.field)}
                    />
                )} 
                {formState[input.field].showError && (
                    <span className='auth-form-validation-message'>{input.ValidationMessage}</span>
                )}
                 </div>
            
        ))}

        <button onClick={handleFormSubmit} disabled={isSubmitButtonDisabled}>
            Save Changes
        </button>
    </form>


  )
}

export default ChannelSettings