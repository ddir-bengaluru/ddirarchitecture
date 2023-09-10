import React, { useEffect, useState } from 'react';
import './navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown, faClose } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import UseAnimation from "react-useanimations";
import facebook from "react-useanimations/lib/facebook";
import mail from "react-useanimations/lib/mail";
import linkedin from "react-useanimations/lib/linkedin";

export default function Navbar() {
  const [visibility, setVisibility] = useState(false);
  const [isLanding, setLandingStatus] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLandingStatus(location.pathname == '/' ? true : false);
  });

  function onSearch() {

  }

  function toggleNav() {
    setVisibility(visibility => !visibility);
  }

  return (
    <div className='nav'>
      <button className={isLanding ? "btn-open text-white" : "btn-open"} onClick={toggleNav}><FontAwesomeIcon icon={faBars} /></button>
      <nav className={visibility ? 'navbar show' : 'navbar'}>
        <button className='btn-close' onClick={toggleNav}><FontAwesomeIcon icon={faClose} /></button>
        <ul className='navbar__left'>
          <a href='/'><h1>DDIR <span>Architecture</span></h1></a>
          {/* <img src="https://studiolotus.in/assets/default/img/build/brand/StudioLotus-Logo.svg" alt="DDIR" className='logo' /> */}
          <li className='dropdown'>
            <div>Architecture <FontAwesomeIcon className='icon' icon={faChevronDown} /></div>
            <div className="dropdown__content">
              <a href="/categories/residential">Residential</a>
              <a href="/categories/artist">Artist Studio</a>
              <a href="/categories/housing">Housing</a>
              <a href="/categories/commercial">Commercial</a>
              <a href="/categories/hospitality">Hospitality</a>
              <a href="/categories/lesuire_entertainment">Lesuire Entertainment</a>
              <a href="/categories/farmhouse">Farmhouse</a>
              <a href="/categories/retail">Retail</a>
              <a href="/categories/corporate">Corporate</a>
            </div>
          </li>
          <li><a href="">News & Awards</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="">About Us</a></li>
        </ul>
        <div className="navbar__right">
          <div className="social-icons">
            <a href="#">
              <UseAnimation animation={facebook} strokeColor='#c86508' autoPlay={true} loop={true} />
            </a>
            <a href="">
              <UseAnimation animation={mail} strokeColor='#c86508' />
            </a>
            <a href="">
              <UseAnimation animation={linkedin} strokeColor='#c86508' />
            </a>
          </div>
          {/* <form className="search-bar" onSubmit={onSearch}>
            <input className='search-bar__text' type="text" id="name" placeholder='Enter Project Name' />
            <input className='search-bar__btn' type='submit' value="Search" />
          </form> */}
        </div>
      </nav>
    </div>
  )
}
