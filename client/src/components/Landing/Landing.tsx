import React from 'react'
import "./landing.scss";
import hero from './../../assets/images/hero.jpeg';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

export default function Landing() {
  var scrollLocation = window.pageYOffset ;
  return (
    <div className='landing'>
      <ScrollToTop />
      <div className="hero">
        <h1 className='hero__title'>DDIR ARCHITECTURE</h1>
        <p className='hero__slang'>Turn your dreams into reality</p>
      </div>
      <div className="showcase">
        <h2>Our Award Winning Projects</h2>
        <div className="cards">
          <div className="card">
          <div className='card__overlay'>
            <img className='card__img' src={hero} alt="" />
            <div className='card__title'>Card Text</div>
            <div className='card__subtitle'>Card Text</div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
