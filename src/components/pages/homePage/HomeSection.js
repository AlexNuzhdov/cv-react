import React from 'react'
import {MoreBtn} from 'components/buttons/moreBtn/MoreBtn';
import './HomeSection.css';
import { Avatar } from 'components/avatar/Avatar';
import {SocialLinks} from "../../socialLinks/SocialLinks";

export const HomeSection = () => {
  return (
    <section className='section'>
     
        <div className="section-container">
            <div>
                <h3 className='hello-title'>Hello There</h3>
                <h1 className='heading'>I`m Oleksandr Nuzhdov</h1>
                <h3 className='headline'> Frontend Developer</h3>
                <p className='subtitle'>Junior Front-End Developer who is eager to create a value of the product.I have a sound knowledge base in HTML, СSS, JavaScript, and React. Besides I have  some hands-on experience in team work.  
                    I am a proactive person with a great background in business communication and B2B, B2C sales. I am currently seeking new career opportunities to further grow and excel in the tech industry. My life position is challenging myself on delivering best results
                </p>
            <div>
                  <SocialLinks/>
                </div>
                <MoreBtn/>
                </div>
            <div className='avatar-container'>
             <Avatar/>
            </div>
            
        </div>
    </section>
  )
}
