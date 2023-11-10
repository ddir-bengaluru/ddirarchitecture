// import React, { useEffect, useState } from 'react';
// import NotFound from '../NotFound/NotFound';
// import { endpoint } from '../../Utils/Utils';
// import imagePlaceholder from '../../assets/images/img-placeholder.png';


// export default function Carousel() {
//     const [photos, setPhotos] = useState([]);
//     const [isLoading, setLoading] = useState(true);
//     const [isEmpty, setEmpty] = useState(false);



//     useEffect(() => {
//         async function getCarouselPhotos() {
//             const response = await fetch(endpoint + 'carousel');

//             if (!response.ok) {
//                 // Handle error, e.g., redirect to a 404 page
//                 console.error("Error fetching carousel photos");
//                 return;
//             }

//             const data = await response.json();

//             if (!data || data.length === 0) {
//                 setEmpty(true);
//             } else {
//                 setPhotos(data);
//             }

//             setLoading(false);
//         }

//         getCarouselPhotos();
//     }, []);

//     useEffect(() => {
//         console.log("Carousel component photos:", photos); // Log photos array
//     }, [photos]);

//     return (
//         <div className="carousel">
//             {isLoading ? (
//                 <div className="carousel_image">
//                     <img src={imagePlaceholder} alt="Carousel Image" />
//                 </div>
//                 // <NotFound statuscode={404} />
//             ) : (
//                 <>
//                     {isEmpty ? (
//                         <NotFound statuscode={404} />
//                     ) : (
//                         <div className="carousel__wrapper">
//                             {photos.map((item, index) => (
//                                 <img key={index} src={item} alt={`Image ${index + 1}`} />
//                             ))}
//                         </div>
//                     )}
//                 </>
//             )}
//         </div>
//     );
// }

// Carousel.tsx
// import React, { useEffect, useState } from 'react';
// import NotFound from '../NotFound/NotFound';
// import imagePlaceholder from '../../assets/images/img-placeholder.png';
// import { endpoint } from '../../Utils/Utils';

// export default function Carousel() {
//   const [photos, setPhotos] = useState([]);
//   const [isLoading, setLoading] = useState(true);
//   const [isEmpty, setEmpty] = useState(false);

//   useEffect(() => {
//     async function getCarouselPhotos() {
//       const response = await fetch(endpoint + 'carousel');

//       if (!response.ok) {
//         console.error("Error fetching carousel photos");
//         setLoading(false);
//         return;
//       }

//       const data = await response.json();

//       if (!data || data.length === 0) {
//         setEmpty(true);
//       } else {
//         setPhotos(data); // Use the entire array of photos
//       }

//       setLoading(false);
//     }

//     getCarouselPhotos();
//   }, []);

//   useEffect(() => {
//     console.log("Carousel component photos:", photos);
//   }, [photos]);

//   if (isEmpty) {
//     return <NotFound statuscode={404} />;
//   }

//   return (
//     <div className="carousel">
//       {isLoading ? (
//         <div className="carousel_image">
//           <img src={imagePlaceholder} alt="Carousel Image" />
//         </div>
//       ) : (
//         <div className="carousel__wrapper">
//           {photos.map((item, index) => (
//             <img key={index} src={item} alt={`Image ${index + 1}`} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import NotFound from '../NotFound/NotFound';
import imagePlaceholder from '../../assets/images/img-placeholder.png';
import { endpoint } from '../../Utils/Utils';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Carousel() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isEmpty, setEmpty] = useState(false);

  useEffect(() => {
    async function getCarouselPhotos() {
      const response = await fetch(endpoint + 'carousel');

      if (!response.ok) {
        console.error("Error fetching carousel photos");
        setLoading(false);
        return;
      }

      const data = await response.json();

      if (!data || data.length === 0) {
        setEmpty(true);
      } else {
        setPhotos(data); // Use the entire array of photos
      }

      setLoading(false);
    }

    getCarouselPhotos();
  }, []);

  useEffect(() => {
    console.log("Carousel component photos:", photos);
  }, [photos]);

  if (isEmpty) {
    return <NotFound statuscode={404} />;
  }

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel">
      {isLoading ? (
        <div className="carousel_image">
          <img src={imagePlaceholder} alt="Carousel Image" />
        </div>
      ) : (
        <Slider {...slickSettings}>
          {photos.map((item, index) => (
            <div key={index} className="carousel__wrapper">
              <img className="carousel_img" src={item} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}

