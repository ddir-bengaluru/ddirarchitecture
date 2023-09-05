import React, { useState } from 'react';
import './navbar.scss';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [visibility, setVisibility] = useState(false);

  function onSearch() {

  }

  function toggleNav() {
    setVisibility(visibility => !visibility);
  }

  return (
    <div className='nav'>
      <button className='btn-open' onClick={toggleNav}><FontAwesomeIcon icon={faBars} /></button>
      <nav className={visibility ? 'navbar show' : 'navbar'}>
        <button className='btn-close' onClick={toggleNav}><FontAwesomeIcon icon={faClose} /></button>
        <ul className='navbar__left'>
          <a href='/'><h1>DDIR <span>Architecture</span></h1></a>
          {/* <img src="https://studiolotus.in/assets/default/img/build/brand/StudioLotus-Logo.svg" alt="DDIR" className='logo' /> */}
          <li><a href="/">Home</a></li>
          <li><a href="">Categories</a></li>
          <li><a href="">Awards</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="">About Us</a></li>
        </ul>
        <div className="navbar__right">
          <div className="social-icons">
            <a href="">a</a>
            <a href="">b</a>
            <a href="">c</a>
          </div>
          <form className="search-bar" onSubmit={onSearch}>
            <input className='search-bar__text' type="text" id="name" placeholder='Enter Project Name' />
            <input className='search-bar__btn' type='submit' value="Search" />
          </form>
        </div>
      </nav>
    </div>
  )
}
