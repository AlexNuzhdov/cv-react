import React from 'react'
import {useNavigate} from 'react-router-dom';
import "./Contact.css";
import {SendSvg} from "../../assets/svg/SendSvg";
import {PhoneSvg} from "../../assets/svg/PhoneSvg";
import {SocialLinks} from  "../../socialLinks/SocialLinks";



export const Contact = () => {

  
  const navigate = useNavigate();

  const cameBack = () => navigate(-1);


  return (
    <>
    <button className='goback' onClick={ cameBack }>Go back\</button>
    <section className='contactSection'>
      <div className='contactContainer'>
        <h1 className='contactTitle'>Contact <span className='contact-item'>Me</span></h1>
          <p className='contact-desk'>Dear Recruiter, I am reaching out to you with great interest and enthusiasm regarding the opportunity to join your team. My name is Alexandr, focusing on self-realization as a Front-End Developer and striving to contribute to the creation of modern and efficient web applications. I possess markup and programming technologies that are current and fully meet the standards of the last 2 years. I am also ready to expand and apply them in practice. I believe that my experience and skills will make me a valuable team member, contributing to successful development. I am directed to excellent communication and open to any suggestions in this direction. Please contact me if you find my profile aligning with the requirements of your team or if there are any opportunities that match my expertise. Looking forward to the possibility of joining your esteemed organization. Thank you!</p>
          <div className="contact-list">
          <a className='mail' href="mailto:eserbina652@gmail.com">
            <li className='sendSvg'>
              <SendSvg />
              alexnuzhdov90@gmail.com
            </li>
          </a>
          <li className='phoneSvg'>
            <PhoneSvg />
            +38099-794-2007
          </li>
        </div>
          <SocialLinks/>
      </div>
    </section>
    </>
  )
}
