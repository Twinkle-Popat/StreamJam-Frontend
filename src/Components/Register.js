import React from 'react'

const Register = (props) => {
    const {switchAuthHandler} = props
  return (
    <div onClick={switchAuthHandler}>Register</div>
  )
}

export default Register