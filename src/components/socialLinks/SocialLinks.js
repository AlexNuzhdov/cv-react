import React from 'react'
import "./SocialLinks.css";
import {TelegramSvg } from "../assets/svg/TelegramSvg";
import {LinkedInSvg } from "../assets/svg/LinkedInSvg";
import {GitHubSvg } from "../assets/svg/GitHubSvg";
import {GMailSvg} from "../assets/svg/GMailSvg";

export const SocialLinks = () => {
  return (
    <ul className='socialLinks'>
      <a className='telegram' target="_blank" href='https://t.me/AlexandrNuzhdov/' rel="noreferrer">
          <TelegramSvg/>
      </a>
      <a className='linkedin' target="_blank" href='https://www.linkedin.com/in/oleksandr-nuzhdov-85959a268//' rel="noreferrer">
          <LinkedInSvg/>
      </a>
      <a className='github' target="_blank" href='https://github.com/AlexNuzhdov/' rel="noreferrer">
          <GitHubSvg/>
      </a>
      <a className='gmail' href="mailto:eserbina652@gmail.com" >
          <GMailSvg/>
      </a>
    </ul>
  )
}
