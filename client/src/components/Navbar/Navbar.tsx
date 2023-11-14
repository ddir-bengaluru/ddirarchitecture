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
    setLandingStatus(location.pathname === '/' ? true : false);
    setAboutPageStatus(location.pathname === '/about-us' ? true : false);
  }, [location?.pathname]);

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
      <button className={(isLanding) ? "btn-open text-white" : "btn-open"} onClick={toggleNav}><FontAwesomeIcon icon={faBars} /></button>
      <nav className={visibility ? 'navbar show' : 'navbar'}>
        <button className='btn-close' onClick={toggleNav}><FontAwesomeIcon icon={faClose} /></button>
        <ul className='navbar__left'>
          <div>
            <Link onClick={() => setVisibility(false)} to='/'>
              <h1>DDIR <span>Architecture</span></h1>
              <h4>Dominic & Dipesh</h4>
            </Link>
          </div>
          <li className='dropdown'>
            <div>Architecture <FontAwesomeIcon className='icon' icon={faChevronDown} /></div>
            <div className="dropdown__content">
              <Link onClick={() => setVisibility(false)} to="/categories/residential">Residential</Link>
              <Link onClick={() => setVisibility(false)} to="/categories/housing">Housing</Link>
              <Link onClick={() => setVisibility(false)} to="/categories/commercial">Commercial</Link>
              <Link onClick={() => setVisibility(false)} to="/categories/hospitality">Hospitality</Link>
              <Link onClick={() => setVisibility(false)} to="/categories/leisure">Leisure & Entertainment</Link>
              <Link onClick={() => setVisibility(false)} to="/categories/farmhouse">Farmhouse</Link>
              <Link onClick={() => setVisibility(false)} to="/categories/retail">Retail</Link>
              <Link onClick={() => setVisibility(false)} to="/categories/corporate">Corporate</Link>
            </div>
          </li>
          <li className="dropdown">
            <div>Art <FontAwesomeIcon className='icon' icon={faChevronDown} /></div>
            <div className="dropdown__content">
              <Link onClick={() => setVisibility(false)} to="/art/atelier">Atelier</Link>
              <Link onClick={() => setVisibility(false)} to="/art/banglore">Banglore</Link>
              <Link onClick={() => setVisibility(false)} to="/art/galerie-203">Galerie 203</Link>
              <Link onClick={() => setVisibility(false)} to="/art/golden-crab">Golden Crab</Link>
              <Link onClick={() => setVisibility(false)} to="/art/paris">Paris</Link>
              <Link onClick={() => setVisibility(false)} to="/art/vendu">Vendu</Link>
            </div>
          </li>
          <li className="dropdown">
            <div>About Us <FontAwesomeIcon className='icon' icon={faChevronDown} /></div>
            <div className="dropdown__content">
              <Link onClick={() => setVisibility(false)} to="/clients">Client</Link>
              <Link to="/about-us#team-section" onClick={() => {
                handleLinkClick('/about-us#team-section');
                setVisibility(false);
              }}>
                Team
              </Link>
              <Link to="/about-us#contact-section" onClick={() => {
                handleLinkClick('/about-us#contact-section');
                setVisibility(false);
              }}>
                Contact
              </Link>
            </div>
          </li>
          <li><Link onClick={() => setVisibility(false)} to="/news">News</Link></li>
        </ul>
        <div className="navbar__right">
          <div className="social-icons">
            <Link onClick={() => setVisibility(false)} to="https://www.facebook.com/profile.php?id=100057256877863">
              <UseAnimation animation={facebook} strokeColor='#c86508' autoPlay={true} loop={true} />
            </Link>
            <Link onClick={() => setVisibility(false)} to="https://www.linkedin.com/company/ddir-architecture-studio/about/">
              <UseAnimation animation={linkedin} strokeColor='#c86508' />
            </Link>
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
