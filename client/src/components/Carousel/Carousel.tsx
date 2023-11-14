import React, { useEffect, useState } from 'react';
import { endpoint } from '../../Utils/Utils';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';

export default function Carousel() {
  const [photos, setPhotos] = useState([]);
  const navigate = useNavigate();
  const slickSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 400,
    cssEase: "cubic-bezier(0.785, 0.135, 0.15, 0.86)"
  };

  useEffect(() => {
    async function getCarouselPhotos() {
      try {
        const response = await fetch(endpoint + 'carousel');
        if (!response.ok) {
          console.error("Error fetching carousel photos");
          return;
        }
        const data = await response.json();
        if (!data || data.length === 0) {
          navigate('/500-null-state');
          return
        } else {
          setPhotos(data);
        }
      } catch {
        navigate('/404-not-found');
      }
    }

    getCarouselPhotos();
  });

  return (
    <div className="carousel">
      <Slider {...slickSettings}>
        {photos.map((item, index) => (
          <div key={index} className="carousel__wrapper">
            <img className="carousel__img" src={item} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

