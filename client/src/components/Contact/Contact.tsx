import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <div className="about__wrapper">
            <h1 style = {{ textAlign: 'center'}}>Contact</h1>
            <h2 className='about__title'>We would love to hear from you, <br /> Get in Touch 👋</h2>
            <div className="about__address">
                <iframe title='ddir-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d77.5812552!3d13.0096827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf52b4ef30be7e809!2s31%2C%20Ground%20floor%2C%208th%20A%20Main%20road%2C%20Raj%20Mahal%20Vilas%2C%20Extension%2C%20Armane%20Nagar%2C%20Bengaluru%2C%20560080!5e0!3m2!1sen!2sin!4v1695544634008!5m2!1sen!2sin" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy={'no-referrer-when-downgrade'}></iframe>
                <span className="address">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    31, Ground floor, 8th A Main road, Raj Mahal Vilas, Extension, Armane Nagar, Bengaluru, 560080.
                    Near to: Starbucks, Sadashivanagar
                </span>
                <a href="tel:9845688501" className="call">
                    <FontAwesomeIcon icon={faPhone} />
                    +91 98456 88501
                </a>
            </div>
        </div>
    );
}

export default Contact;
