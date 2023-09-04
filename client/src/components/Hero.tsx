import React from 'react';
import '../styles/hero.scss';



const Hero: React.FC = () => {
  return (
    <div className="hero" style={{marginTop: '-85px'}}>
      <img src="/images/hero-image.jpg" alt="Hero" style={{marginTop: '103px'}}/>
    </div>
  );
};

export default Hero;
