import React from 'react'
import './Avatar.css';
import logo from "../assets/image/2.jpg";



export const Avatar = () => {
  return (
    <div className='avatar-wrap'>
    <div className='avatar-content'>
      <img className='avatar' src={logo} alt="foto" />
    </div>
    </div>
  )
}
