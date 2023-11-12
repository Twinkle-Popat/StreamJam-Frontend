import React from 'react'
import logoPlaceholder from '../resources/images/logoPlaceholder.svg'; 

const Login = (props) => {
    const {switchAuthHandler} = props
  return (
    <div className='login-container'>
        
        
        <form className='auth-form'>
        <p>
          {/* <img src={logoPlaceholder} alt="" />  */}
          <p style={{fontWeight:"bolder", fontSize:"20px", marginTop:"20px", marginBottom:"-3px"}}>Login</p></p>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" class="btn btn-primary my-3">Submit</button>
</form>
       
        <span className='my-3'  onClick={switchAuthHandler}>Don't have account? Sign up</span>
    </div>
  )
}

export default Login