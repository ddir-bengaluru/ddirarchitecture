import React, { useEffect, useState } from 'react';
import NotFound from '../NotFound/NotFound';
import imagePlaceholder from '../../assets/images/img-placeholder.png';
import { endpoint } from '../../Utils/Utils';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';

export default function Carousel() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isEmpty, setEmpty] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function getCarouselPhotos() {
      try {
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
          setPhotos(data);
        }
        setLoading(false);
      } catch {
        navigate('/500-null-state');
      }
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
      <Slider {...slickSettings}>
        {photos.map((item, index) => (
          <div key={index} className="carousel__wrapper">
            <img className="carousel__img" src={item} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

