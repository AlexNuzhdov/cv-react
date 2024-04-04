import React from 'react'
import {AvatarAboutSection } from 'components/avatar/AvatarAboutSection';
import {MoreAboutMySkills} from "../buttons/moreBtn/MoreAboutMySkills";
import { Link } from "react-router-dom";
import "../aboutSection/AboutSection.css";


export const AboutSection = () => {
  return (
    <section className='aboutSection'>
       <div>
        <AvatarAboutSection/>
      </div>
      <div>
        <h1 className='heading'>More About Me</h1>
        <h2 className='hello-title'>React Developer</h2>
        <ul className='aboutList'>
          <li className='subtitle'>Developed and implemented frontend user interfaces using React</li>
          <li className='subtitle'>Collaborated with UX/UI designers to create seamless and visually <br/>
          appealing web application </li>
          <li className='subtitle'>Worked closery with backend developers to integrate APIs and ensure data flow between server and client</li>
          <li className='subtitle'>Implemented responsive designs to ensure optimal user experience across different devices and screen sizes</li>
          <li className='subtitle'>Dynamic & responsive website design</li>
          <li className='subtitle'>Stayed uptodate with the latest industry trends and best practices in React development</li>
          <li className='subtitle'>State management</li>
          <li className='subtitle'>Adapting projects to latest standards</li>
          <li className='subtitle'>Collaborating within diverse teams</li>
          <li className='subtitle'>Secure data handling & API interactions</li>
          <li className='subtitle'>Effective troubleshooting of complex issues.</li>
          <li className='subtitle'>Smooth navigation implementation</li>
        </ul>
        <Link to="/skills">
           <MoreAboutMySkills/>
        </Link>
      </div>
    </section>
  )
}

            