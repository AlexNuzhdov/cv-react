import React from 'react'
import { HomeSection } from './HomeSection';
import { Footer } from 'components/footer/Footer';
import {AboutSection} from '../../aboutSection/AboutSection';

export const Home = () => {
  return (
    <main>
      <HomeSection/>
      <AboutSection/>
      <Footer/>
    </main>
  )
}
