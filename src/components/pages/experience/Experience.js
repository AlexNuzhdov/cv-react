import React from 'react'
import {useNavigate} from 'react-router-dom';
import "./Experience.css";

export const Experience = () => {

  const navigate = useNavigate();
  const cameBack = () => navigate(-1);


  return (
    <div className='experience-section'>
     <button className='goback' onClick={ cameBack }>Go back</button>
           <h1 className='experience-title'>Previous Work Experience</h1>
      <div className='experience-list'>
        <div className='experience-container'>
          <div className='education-wrap-list'>
            <h2 className='Education-title'>PRO Gaming software LTD</h2>
            <h4 className='experience-subtitle'>Sales Manager</h4>
            <p className='desk'>2024</p>
          </div>
        </div>
        <div className='experience-container'>
          <div className='education-wrap-list'>
            <h2 className='Education-title'>AC-Step Corporation,(Odesa)</h2>
            <h4 className='experience-subtitle'> Regional Sales Manager</h4>
            <p className='desk'>2015 - 2024</p>
          </div>
        </div>
        <div className='experience-container'>
          <div className='education-wrap-list'>
            <h2 className='Education-title'>POLY - PACK Corporation LTD </h2>
            <h4 className='experience-subtitle'>Foreign trade Manager</h4>
            <p className='desk'>2012 - 2015</p>
          </div>
        </div>
            
      </div>
    </div>
  )
}
