import React from 'react'
import "./MoreBtn.css"


export const MoreBtn = () => {
 
  const handlerScrollUp = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
	}
  
  return (
    <button 
      onClick={handlerScrollUp} 
      className='moreBtn'>
      More About Me
    </button>
  )
}


