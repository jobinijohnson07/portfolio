import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header.js';
import { BackgroundLinesDemo } from '../components/LandingPage/LandingPage.js';
import About from '../components/About/About.js';
import Summary from '../components/Summary/Summary.js';
import Experience from '../components/Experience/Experience.js';
import Projects from '../components/Projects/Projects.js';
import Blogs from '../components/Blogs/Blogs.js';

const RouteComponent = () => {
  return (
    <>
      <Header />
      <div id="home"><BackgroundLinesDemo /></div>
      <div id="about"><About /></div>
      <div id="about"><Summary /></div>
      <div id="experience"><Experience /></div>
      <div id="projects"><Projects /></div>
      <div id="blogs"><Blogs /></div>
    </>
  );
};

export default RouteComponent;
