// import { useState, useEffect } from "react";
import React from "react";
import { Contact } from "./pages/contact/Contact";
import { Skills } from "./skills/Skills";
import {Experience} from "./pages/experience/Experience"
import { Routes, Route} from "react-router-dom";
import { Projects } from "./pages/projectsPage/ProjectsPage";
import { Header } from "./header/Header";
// import {useTheme} from './hooks/use-theme';






export const App = () => {

  

  return (
    <>
    
      <Routes>
        
        <Route path="/" element={<Header/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />}/>
          
        </Routes>
    </>
  )

};

