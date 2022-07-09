import React from 'react'
import {NavLink} from 'react-router-dom'
import Logo from '../imgs/logo.PNG'

function Navbar() {
  return (
    <nav>
      <div className='img-div'>
        <img src={Logo} alt="logo"/>
      </div>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='notes'>Notes</NavLink></li>
        <li><NavLink to='contact'>Contact</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar