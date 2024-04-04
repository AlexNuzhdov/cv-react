import React from 'react'
import { Logo } from 'components/Logo'
import { Home } from 'components/pages/homePage/Home';
import {Link } from "react-router-dom";
import { Navigation } from 'components/navigation/Navigation'
import './Header.css';


export const Header = () => {
  return (
    <>
      <div className='header-wrapper'>
          <div className='header'>
            <Link className='logo' to="/">
                <Logo/>
            </Link>
            <Navigation/>
          </div>
        </div>
           <Home/>
         
    </>
  )
}
