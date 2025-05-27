import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header.js';
import { BackgroundLinesDemo } from '../components/LandingPage/LandingPage.js';
import About from '../components/About/About.js';
import Experience from '../components/Experience/Experience.js';
import Projects from '../components/Projects/Projects.js';

const RouteComponent = () => {
  return (
    <>
      <Header />
      <BackgroundLinesDemo />
      <About />
      <Experience />
      <Projects />
    </>
  );
};

export default RouteComponent;
