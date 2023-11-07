import React, { useEffect, useState } from 'react';
import './navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown, faClose } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate } from 'react-router-dom';
import UseAnimation from "react-useanimations";
import facebook from "react-useanimations/lib/facebook";
import linkedin from "react-useanimations/lib/linkedin";
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [visibility, setVisibility] = useState(false);
  const [isLanding, setLandingStatus] = useState(true);
  const [isAboutPage, setAboutPageStatus] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setLandingStatus(location.pathname == '/' ? true : false);
    setAboutPageStatus(location.pathname == '/about-us' ? true : false);
  });

  function onSearch(e: any) {
    setVisibility(false);
    e.preventDefault();
    const searchParam = e.target.elements[0].value;
    navigate(`/search/${searchParam}`);
  }

  function handleLinkClick(path: string) {
    setVisibility(false);
    navigate(path);
  }
  

  function toggleNav() {
    setVisibility(visibility => !visibility);
  }

  return (
    <div className='nav'>
      <button className={(isLanding || isAboutPage) ? "btn-open text-white" : "btn-open"} onClick={toggleNav}><FontAwesomeIcon icon={faBars} /></button>
      <nav className={visibility ? 'navbar show' : 'navbar'}>
        <button className='btn-close' onClick={toggleNav}><FontAwesomeIcon icon={faClose} /></button>
        <ul className='navbar__left'>
          <a href='/'><h1>DDIR <span>Architecture</span></h1></a>
          <li className='dropdown'>
            <div>Architecture <FontAwesomeIcon className='icon' icon={faChevronDown} /></div>
            <div className="dropdown__content">
              <a href="/categories/residential">Residential</a>
              <a href="/categories/housing">Housing</a>
              <a href="/categories/commercial">Commercial</a>
              <a href="/categories/hospitality">Hospitality</a>
              <a href="/categories/leisure">Leisure & Entertainment</a>
              <a href="/categories/farmhouse">Farmhouse</a>
              <a href="/categories/retail">Retail</a>
              <a href="/categories/corporate">Corporate</a>
            </div>
          </li>
          <li className="dropdown">
            <div>Art <FontAwesomeIcon className='icon' icon={faChevronDown} /></div>
            <div className="dropdown__content">
              <a href="/art/atelier">Atelier</a>
              <a href="/art/banglore">Banglore</a>
              <a href="/art/galerie-203">Galerie 203</a>
              <a href="/art/golden-crab">Golden Crab</a>
              <a href="/art/paris">Paris</a>
              <a href="/art/vendu">Vendu</a>
            </div>
          </li>
          <li className="dropdown">
            <div>About Us <FontAwesomeIcon className='icon' icon={faChevronDown} /></div>
            <div className="dropdown__content">
              <a href="/clients">Client</a>
              {/* <Link to="/about-us#team-section">Team</Link>
              <Link to="/about-us#contact-section">Contact</Link> */}
               <Link to="/about-us#team-section" onClick={() => handleLinkClick('/about-us#team-section')}>
                Team
              </Link>
              <Link to="/about-us#contact-section" onClick={() => handleLinkClick('/about-us#contact-section')}>
                Contact
              </Link>
            </div>
          </li>

        </ul>
        <div className="navbar__right">
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100057256877863">
              <UseAnimation animation={facebook} strokeColor='#c86508' autoPlay={true} loop={true} />
            </a>
            <a href="https://www.linkedin.com/company/ddir-architecture-studio/about/">
              <UseAnimation animation={linkedin} strokeColor='#c86508' />
            </a>
          </div>
          <form className="search-bar" onSubmit={onSearch}>
            <input className='search-bar__text' type="text" id="name" placeholder='Enter Project Name' required />
            <input className='search-bar__btn' type='submit' value="Search" />
          </form>
        </div>
      </nav>
    </div>
  )
}
