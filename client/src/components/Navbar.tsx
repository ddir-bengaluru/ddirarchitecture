import React, { useState } from 'react';
import '../styles/navbar.scss';
import { useNavigate } from 'react-router-dom';
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
    <>
    <button className='btn-open' onClick={toggleNav}><FontAwesomeIcon icon={faBars} /></button>
    <nav className={visibility ? 'navbar show' : 'navbar'}>
      <button className='btn-close' onClick={toggleNav}><FontAwesomeIcon icon={faClose} /></button>
      <ul className='navbar__left'>
        {/* <img src="https://studiolotus.in/assets/default/img/build/brand/StudioLotus-Logo.svg" alt="DDIR" className='logo'/> */}
        <p style={{fontSize:'25px', fontWeight:'600px'}}>DDIR Architecture</p>
        {/* <li><a href="">Home</a></li>
        <li><a href="">Categories</a></li>
        <li><a href="">Awards</a></li>
        <li><a href="">Contact</a></li>
        <li><a href="">About Us</a></li> */}
        <li>Home</li>
        <li>Categories</li>
        <li>Awards</li>
        <li>Contact</li>
        <li>About Us</li>
      </ul>
      <div className="navbar__right">
        <div className="social-icons">
        <a href="">f</a>
        <a href="">X</a>
        <a href="">in</a>
        </div>
        <form className="search-bar" onSubmit={onSearch}>
            <input className='search-bar__text' type="text" id="name" placeholder='Enter Project Name' style={{padding: '9px', marginRight: '-21px'}}/>
            <input className='search-bar__btn' type='submit' value="🔍" style={{padding: '7px'}}/>
        </form>
      </div>
    </nav>
    </>
  )
}