import React,{useState} from 'react'
import Login from './Login'
import Register from './Register'
import "./Style/authPage.css"

const AuthPage = () => {
    const[isLogin,setIsLogin] = useState(true)

    const handleAuthPageToggle = () => {
        setIsLogin((prevState) => (!prevState))
    }
  return (
    <div className='auth-container'>
        {isLogin ? <Login switchAuthHandler={handleAuthPageToggle}/>: <Register switchAuthHandler={handleAuthPageToggle}/>}
    </div>
  )
}

export default AuthPage