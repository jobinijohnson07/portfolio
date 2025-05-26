import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header.js';
import { BackgroundLinesDemo } from '../components/LandingPage/LandingPage.js';
import About from '../components/About/About.js';
import Experience from '../components/Experience/Experience.js';

const RouteComponent = () => {
  return (
    <>
      <Header />
      <BackgroundLinesDemo />
      <About />
      <Experience />
    </>
  );
};

export default RouteComponent;
