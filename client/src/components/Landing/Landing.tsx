// Landing.tsx
import React, { useEffect, useState } from 'react';
import './landing.scss';

import imagePlaceholder from './../../assets/images/img-placeholder.png';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import { Link } from 'react-router-dom';
import { strTransform,endpoint } from '../../Utils/Utils';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from '../Carousel/Carousel';
import '../Carousel/carousel.scss';
export default function Landing() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((res) => {
        setProjects(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  function MapProjectCards(props: any) {
    return props.map((data: any, index: number) => (
      <Link to={'/' + data?.name} className="card" key={index}>
        <div className="card__overlay">
          <img
            className="card__img"
            src={data?.photos?.hero_img ? data?.photos?.hero_img : imagePlaceholder}
            alt=""
          />
          <div className="card__title">{strTransform(data?.name)}</div>
          <div className="card__subtitle">{data?.location}</div>
          <div className="card__redirect">Click to See Full View</div>
        </div>
      </Link>
    ));
  }

  return (
    <div className="landing">
      <ScrollToTop />
      <div className="carousel-container">
        <Carousel />
      </div>
      <div className="showcase">
        <h2>Our Award Winning Projects</h2>
        <div className="cards">{MapProjectCards(projects)}</div>
      </div>
    </div>
  );
}

