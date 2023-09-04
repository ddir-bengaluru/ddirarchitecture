import React from 'react'
import AddDetail from './components/addDetails/addDetail';
import ViewData from './components/ViewData/viewData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import "./style.scss";
import Description from './components/Description';

export default function App() {
  return (
    <>
      {/* <AddDetail />
      <ViewData /> */}
      <Navbar />
      <Hero/>
      <Description />
    </>
  );
}
