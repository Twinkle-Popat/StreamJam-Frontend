import React from 'react'

const Login = (props) => {
    const {switchAuthHandler} = props
  return (
    <div className='login-container'>
        <p>Logo</p>
        <form className='auth-form-switch-label'>Form</form>
        <span onClick={switchAuthHandler}>Don't have account? Sign up</span>
    </div>
  )
}

export default Login