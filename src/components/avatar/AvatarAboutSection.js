import React from 'react'
import MyFoto2 from "../assets/image/3.jpg";

export const AvatarAboutSection = () => {
  return (
    <div className='avatar-wrap'>
    <div className='avatar-content'>
      <img className='avatarAbout' src={MyFoto2} alt="foto"  styles={{ width: '100%', height: '100%' }}/>
    </div>
    </div>
  )
}
