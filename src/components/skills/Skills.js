import React from 'react'
import {useNavigate} from 'react-router-dom';
import './Skills.css'

export const Skills = () => {

    const navigate = useNavigate();

    const cameBack = () => navigate(-1);

  return (
 <>
   <button className='goback' onClick={ cameBack }>Go back</button>
    <section className='technical-section'>
        <div className='technical-wrap'>
            <h1 className='technical-title'>Technical Skills</h1>
            <ul className='technical-list'>
                <li className='technical-items'>Html</li>
                <li className='technical-items'>Css</li>
                <li className='technical-items'>SCSS</li>
                <li className='technical-items'>JavaScript</li>
                <li className='technical-items'>React</li>
                <li className='technical-items'>Redux</li>
                <li className='technical-items'>Git</li>
                <li className='technical-items'>TypeScript</li>
                <li className='technical-items'>GitHub</li>
            </ul>
        </div>
        <h1 className='technical-title'>My Languages</h1>
           
            <div className='languages-list'>
            
            <div className="radial-bars">
                
                <svg className="radial-bar-svg" x="0px" y="0px" viewBox="-30 0 320 200">
                
                    <circle
                        className="progress-bar"
                        cx="100"
                        cy="100"
                        r="60"
                        fill="none"
                        strokeWidth="20"
                    ></circle>
                    
                    <circle className='circle1'  cx="100" cy="90" r="60"></circle>
                    <text x="89" y="95" className="text">B1</text>
                    <text x="70" y="8" className="text2">English</text>
                </svg>
                
                <svg className="radial-bar-svg" x="0px" y="0px" viewBox="-50 0 320 200">
                    <circle
                        className="progress-bar"
                        cx="100"
                        cy="100"
                        r="60"
                        fill="none"
                        strokeWidth="20"
                    ></circle>
                    
                    <circle className='circle2'  cx="100" cy="90" r="60"></circle>
                    <text x="89" y="95"className="text">C2</text>
                    <text x="70" y="8" className="text2">Ukrainian</text>
                </svg>
                <svg className="radial-bar-svg" x="0px" y="0px" viewBox="-70 0 320  200">
                    <circle
                        className="progress-bar"
                        cx="100"
                        cy="100"
                        r="60"
                        fill="none"
                        strokeWidth="20"
                    ></circle>
                    
                    <circle className='circle3'  cx="100" cy="90" r="60"></circle>
                    <text x="89" y="95" className="text">C2</text>
                    <text x="70" y="8" className="text2">Russian</text>
                </svg>
                
            </div>
            </div>
            </section>
            <h1 className='education-title'>My Education</h1>
            <section className='Education-section'>
            <div className='Education-list'>
                <div className='Education-container'>
                    <div className='education-wrap-list'>
                        <h2 className='Education-title'>IT School GoIt (Kyiv)</h2>
                        <h4  className='education-subtitle'> Junior Full Stack Developer</h4>
                        <p className='desk'>2022- 2023</p>
                     </div>
                </div>
                <div className='Education-container'>
                    <div className='education-wrap-list'>
                        <h2 className='Education-title'>EPAM University</h2>
                        <h4  className='education-subtitle'>Front-End Self-Paced Online Program</h4>
                        <p className='desk'>2024</p>
                    </div>
                </div>
                <div className='Education-container'>
                  <div className='education-wrap-list'>
                        <h2 className='Education-title'>Volodymyr Dahl East Ukrainian National University</h2>
                        <h4  className='education-subtitle'>Master's degree in Transport Technologies</h4>
                        <p className='desk'>2011- 2012</p>
                    </div>
                </div>
            </div>
             
            </section>
           
  x
    </>
  )
}
