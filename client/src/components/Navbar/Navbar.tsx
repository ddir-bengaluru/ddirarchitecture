import React, { useEffect, useState } from 'react';
import './navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown, faClose } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';

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
      <button className={ isLanding ? "btn-open text-white" : "btn-open" } onClick={toggleNav}><FontAwesomeIcon icon={faBars} /></button>
      <nav className={visibility ? 'navbar show' : 'navbar'}>
        <button className='btn-close' onClick={toggleNav}><FontAwesomeIcon icon={faClose} /></button>
        <ul className='navbar__left'>
          <a href='/'><h1>DDIR <span>Architecture</span></h1></a>
          {/* <img src="https://studiolotus.in/assets/default/img/build/brand/StudioLotus-Logo.svg" alt="DDIR" className='logo' /> */}
          <li className='dropdown'>
            <a href="javascript:void(0)">Architecture <FontAwesomeIcon className='icon' icon={faChevronDown} /></a>
            <div className="dropdown__content">
              <a href="#">Red</a>
              <a href="#">Blue</a>
              <a href="#">Green</a>
            </div>
          </li>
          <li><a href="">News & Awards</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="">About Us</a></li>
        </ul>
        <div className="navbar__right">
          <div className="social-icons">
            <a href="">a</a>
            <a href="">b</a>
            <a href="">c</a>
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
