import React from 'react'
import "./about.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function About() {
    return (
        <div className='about'>
            <div className="about__hero">
                <h1 className='about__hero__title'>Who Are We?</h1>
                <p className='about__hero__slang'>DDIR Architecture Studio was created in 2003 by the combined inspirations of French-Canadian architectural consultant Dominic Dube and Inge Rieck from Germany. Dominic's vision is one of integration of architecture and design with art (nature), technology (structure), life (light) and culture (spirit). The goal is to discover the inherent spirit in each project and this is accomplished through a hands-on approach and complete immersion into the design. Dominic's instinct as a painter is evident in his work. The projects are conceived as paintings on a three dimensional canvas.</p>
            </div>
            <div className="about__wrapper">
                <h2 className='about__title'>We would love to hear from you, <br /> Get in Touch 👋</h2>
                <div className="about__address">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.182240666993!2d77.59369547609705!3d12.96018761512636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15da75593349%3A0xf470157596b3d373!2sDDIR%20Architecture%20Studio!5e0!3m2!1sen!2sin!4v1695544634008!5m2!1sen!2sin" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy={'no-referrer-when-downgrade'}></iframe>
                    <span className="address">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        Address - 8, Andree Rd, Akkithimana Halli, Bheemanna Garden, Shanti Nagar, Bengaluru, Karnataka 560027
                    </span>
                    <span className="call">
                        <FontAwesomeIcon icon={faPhone} />
                        098229 84382
                    </span>
                </div>
            </div>
        </div>
    )
}
