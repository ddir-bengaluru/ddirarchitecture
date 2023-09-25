import React, { useEffect, useState } from 'react';
import "./landing.scss";
import imagePlaceholder from './../../assets/images/img-placeholder.png';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import { Link } from 'react-router-dom';
import { endpoint, strTransform } from '../../Utils/Utils';

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
      })
  }, []);
  function MapProjectCards(props: any) {
    return props.map((data: any, index: number) => {
      return (
        <Link to={'/' + data?.name} className="card" key={index}>
          <div className='card__overlay'>
            <img className='card__img' src={data?.photos?.hero_img ? data?.photos?.hero_img : imagePlaceholder} alt="" />
            <div className='card__title'>{strTransform(data?.name)}</div>
            <div className='card__subtitle'>{data?.description}</div>
            <div className='card__redirect'>Click to See Full View</div>
          </div>
        </Link>
      )
    })
  }
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
          {MapProjectCards(projects)}
        </div>
      </div>
    </div>
  )
}
