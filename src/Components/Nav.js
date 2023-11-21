import React from 'react'
import "./Style/dashboardpage.css"

import logo from '../resources/images/logoPlaceholder.svg'


const Navlogo = () => {
    return(
        <div className='nav-logo-container'>
        <img className='nav-logo' src={logo} width="100%" height="100%" alt="" />
        </div>
    )
}

const NavButton = ({text, onClickHandler}) =>{
    return(
        <span className='nav-button' onClick={onClickHandler}>
            {text}
        </span>
    )
}

const Nav = () => {
  return (

    <div className='nav-container'>
        <Navlogo/>
    <div className='nav-buttons-container'>
    <NavButton text='Browse' onClickHandler={()=>{}}/>
    <NavButton text='Login' onClickHandler={()=>{}}/>
    <div>
    <NavButton text='My Account'/>
    <NavButton text='Logout' onClickHandler={()=>{}}/>
    </div>
    </div>
    </div>
    
  )
}

export default Nav