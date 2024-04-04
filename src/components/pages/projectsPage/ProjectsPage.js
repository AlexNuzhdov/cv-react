import React from 'react'
import "./Projects.css"
import {useNavigate} from 'react-router-dom';
import Movies from "../../assets/image/movie.png";
import Petly from "../../assets/image/Petly.png";
import Image from "../../assets/image/image-finder.png";
import Film from "../../assets/image/film.png";
import {GoToSvg} from "../../assets/svg/GotoWeb";

export const Projects = () => {

  const navigate = useNavigate();
  const cameBack = () => navigate(-1);

  return (

    <div className='project-section'>
     <button className='goback' onClick={ cameBack }>Go back</button>
      <div className='project-wraper'>
        <div className='project-container'>
          <img className='movies' src={Movies} alt="foto"/>
          <div className="owerlay" >
                <h5 className='movies-title'>React Developer</h5>
                <p className='project-title'>"In this project, you will see a two-page website. The first page shows new trending films with additional information about each film, second page, movie search page"</p>
                <p className="technologies">Technologies used: Javascript, React, CSS</p>
              <div className="layer-links-box-wrap">
                <div className="layer-links-box">
                  <p className='goToWeb'>Go To the Website</p>
                  <a className='site-icon' target="_blank" href='https://alexnuzhdov.github.io/goit-react-hw-05-movies/' rel="noreferrer">
                    <GoToSvg />
                  </a>
                </div>
              </div>
            </div>
        </div>
        <div className='project-container'>
        <img className='movies'src={Petly} alt="foto" />
         <div className="owerlay">
                <h5 className='movies-title'>React Developer</h5>
                  <p className='project-title'>"Pets search site. In this project, you will see three-page website with registration."</p>
                  <p className="technologies">Technologies used: Javascript, React, CSS</p>
                <div className="layer-links-box-wrap">
                <div className="layer-links-box">
                  <p className='goToWeb'>Go To the Website</p>
                  <a className='site-icon' target="_blank" href='https://mellifluous-scone-076b23.netlify.app/' rel="noreferrer">
                    <GoToSvg />
                  </a>
                </div>
              </div>
         </div>
        
        </div>
        <div className='project-container'>
          <img className='movies' src={Image} alt="foto" />
          <div className="owerlay">
                <h5 className='movies-title'>Javascript Developer</h5>
                  <p className='project-title'>"One-page site for searching images"</p>
                  <p className="technologies">Technologies used: Javascript, HTML, CSS</p>
                <div className="layer-links-box-wrap">
                <div className="layer-links-box">
                  <p className='goToWeb'>Go To the Website</p>
                  <a className='site-icon' target="_blank" href='https://alexnuzhdov.github.io/goit-react-hw-03-image-finder/' rel="noreferrer">
                    <GoToSvg />
                  </a>
                </div>
              </div>
         </div>
        </div>
        <div className='project-container'>
          <img className='movies' src={Film} alt="foto"/>
          <div className="owerlay">
                <h5 className='movies-title'>Javascript Developer</h5>
                  <p className='project-title'>"Website for searching trending films"</p>
                  <p className="technologies">Technologies used: Javascript, HTML, CSS</p>
                <div className="layer-links-box-wrap">
                <div className="layer-links-box">
                  <p className='goToWeb'>Go To the Website</p>
                  <a className='site-icon' target="_blank" href='https://oliinyks.github.io/filmoteka/' rel="noreferrer">
                    <GoToSvg />
                  </a>
                </div>
              </div>
         </div>
        </div>

      </div>
       
    </div>
  )
}
