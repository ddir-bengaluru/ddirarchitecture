// import React from 'react';
// import '../styles/description.scss'; 
// import Horizontal from './Horizontal';
// import '../styles/hero.scss';

// const Description: React.FC = () => {
//   return (
//     <>
//     <div className="description">
//       <div>
//         <h1>INGE'S RESIDENCE</h1>
//         <h3 id='auro'>Residential | Auroville</h3>
//       </div>
//       <div>
//         <h2 id='project-title-right'>Inge Rieck</h2>
//         <h4 style={{marginTop: '-15px'}}>Site Area: 400 sqm</h4>
//         <h4 style={{marginTop: '-17px'}}>Built Up Area: 100 sqm</h4>
//       </div>
//     </div>
    
//       <Horizontal />
//       <p style={{maxWidth: '1013px',  marginTop: '-103px', textAlign: 'center', padding:'120px'}}>
//       When Inge asked me to design and build a “shelter” for her, somewhere in a forest of mango and other fruit trees, our discussions were only about nature, Buddhism and harmony. The only brief was that the shelter needed to be in close contact with nature, framing and dialoging with it.
//       </p>
      
//       <div className="description" style={{marginTop: '-100px'}}>
//       <img src="/images/A (2).jpg" alt="A(2)" style={{height: '300px', width: '500px'}}/>
//       <img src="/images/A (5).jpg" alt="A(5)" style={{height: '300px', width: '500px'}}/>
//     </div>

//     <div className="description" style={{marginTop: '-26px'}}>
//       <img src="/images/A (13).jpg" alt="A (13)" style={{height: '300px', width: '500px'}}/>
//       <img src="/images/A (16).jpg" alt="A (16)" style={{height: '300px', width: '500px'}}/>
//     </div>
//     <div>
//         <p style={{textAlign: 'center', fontFamily: 'sans-serif', fontSize: '20px'}}>More Like This</p>
//     </div>
//       </>
//   );
// };

// export default Description;


import React, { useState } from 'react';
import '../styles/description.scss'; 
import Horizontal from './Horizontal';
import '../styles/hero.scss';

const images = [
  "/images/A (2).jpg",
  "/images/A (5).jpg",
  "/images/A (13).jpg",
  "/images/A (16).jpg",
];

const Description: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="description">
        <div>
          <h1 style={{fontFamily: 'sans-serif'}}>INGE'S RESIDENCE</h1>
          <h3 id='auro' style={{fontFamily: 'sans-serif'}}>Residential | Auroville</h3>
        </div>
        <div>
          <h2 id='project-title-right' style={{fontFamily: 'sans-serif'}}>Inge Rieck</h2>
          <h4 style={{marginTop: '-15px',fontFamily: 'sans-serif'}}>Site Area: 400 sqm</h4>
          <h4 style={{marginTop: '-17px',fontFamily: 'sans-serif'}}>Built Up Area: 100 sqm</h4>
        </div>
      </div>
    
      <Horizontal />
      <p style={{maxWidth: '1013px',  marginTop: '-103px', textAlign: 'center', padding:'120px'}}>
        When Inge asked me to design and build a “shelter” for her, somewhere in a forest of mango and other fruit trees, our discussions were only about nature, Buddhism and harmony. The only brief was that the shelter needed to be in close contact with nature, framing and dialoging with it.
      </p>

      <div className="description" style={{marginTop: '-100px'}}>
 <img src="/images/A (2).jpg" alt="A(2)" style={{height: '300px', width: '500px'}}/>
       <img src="/images/A (5).jpg" alt="A(5)" style={{height: '300px', width: '500px'}}/>
     </div>

   <div className="description" style={{marginTop: '-26px'}}>
    <img src="/images/A (13).jpg" alt="A (13)" style={{height: '300px', width: '500px'}}/>
       <img src="/images/A (16).jpg" alt="A (16)" style={{height: '300px', width: '500px'}}/>
     </div>
      
      

      <div>
        <p style={{textAlign: 'center', fontFamily: 'sans-serif', fontSize: '20px'}}>More Like This</p>
      </div>

      <div className="description" style={{marginTop: '-20px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <i className="fa fa-chevron-left" onClick={prevImage} style={{fontSize: '32px'}}>&lt;</i>
        <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} style={{ height: '200px', width: '340px' }} />
        <i className="fa fa-chevron-right" onClick={nextImage} style={{fontSize: '32px'}}>&gt;</i>
      </div>
    </>
  );
};

export default Description;
