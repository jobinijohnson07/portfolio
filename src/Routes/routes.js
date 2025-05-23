import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header.js';
import { BackgroundLinesDemo } from '../components/LandingPage/LandingPage.js';

const RouteComponent = () => {
  return (
    <>
      <Header />
      <BackgroundLinesDemo />
    </>
  );
};

export default RouteComponent;
