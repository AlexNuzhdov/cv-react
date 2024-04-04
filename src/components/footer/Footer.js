import React from 'react'
import './Footer.css';


export const Footer = () => {
    return (
      <section className='footer'>
        <div className='footerSection'>
            <a className="link"
                href="https://github.com/AlexNuzhdov"
                rel="noreferrer"
                target="_blank"
              >
                Alex Nuzhdov
              </a>
          </div>
          <div>
           <span className='inner'>&#169;</span>  <span className='year'>2024</span>
          </div>
      </section>
      
    );
  };