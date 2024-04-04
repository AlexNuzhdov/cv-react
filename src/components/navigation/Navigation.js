import React from 'react'
import {useState} from 'react';
import  './Navigation.css';
import { Link } from "react-router-dom";
import {DarkSvg} from "../assets/svg/DarkSvg";
import {LightSvg} from "../assets/svg/LightSvg";
import {BurgerSvg} from "../assets/svg/BurgerSvg";
import {CloseBtn} from "../assets/svg/CloseBtn";
import {useTheme} from '../hooks/use-theme';

export const Navigation = () => {
  
  const [nav, setNav] = useState(false);
  const {theme, setTheme} = useTheme();

 

const changeTheme =() => {
  if(theme === 'light') {
    setTheme('dark')
  } else {
    setTheme('light')
  }
}

  return (

    <div className='navBar'>
       <ul 
       className={ nav ? `navlist active` : 'navlist'}>
          <li className='theme' onClick={changeTheme}>
          {theme === 'light' ? <DarkSvg /> : <LightSvg />}</li>
       
            <Link className='about' to="/projects">
              <li >Projects</li>
            </Link>
            <Link className='experience' to="/experience">
              <li >Experience</li>
            </Link>
            <Link className='skills' to="/skills">
                <li >Skills</li>
            </Link>
            <Link className='contact' to="/contact">
              <li >Contact</li>
            </Link>
            <div onClick={() => setNav(!nav)} className="burgerSvg">
             { nav ? 
              <CloseBtn/>
              : 
              <BurgerSvg />
             }
              
            </div>
            
       </ul>
    </div>
  )
}

