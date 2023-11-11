import React from 'react'
import "./about.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Element as ScrollElement, scroller } from 'react-scroll';
import Team from '../Team/Team';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Contact from '../Contact/Contact';

export default function About() {
    const location = useLocation();
    useEffect(() => {
        const shouldScrollToTeam = location.hash === '#team-section';
        const shouldScrollToContact = location.hash === '#contact-section';

        if (shouldScrollToTeam) {
            // Scroll to the "team-section" when the component mounts
            scroller.scrollTo('team-section', {
                smooth: true,
                offset: -450, // Adjust the offset as needed
            });
        } else if (shouldScrollToContact) {
            // Scroll to the "contact-section" when the component mounts
            scroller.scrollTo('contact-section', {
                smooth: true,
                offset: 10, // Adjust the offset as needed
            });
        }
    }, [location]);



    return (
        <div className='about'>
            <div className="about__hero">
                <h1 className='about__hero__title'>Who Are We?</h1>
                <p className='about__hero__slang'>DDIR Architecture Studio was created in 2003 by the combined inspirations of French-Canadian architectural consultant Dominic Dube and Inge Rieck from Germany. Dominic's vision is one of integration of architecture and design with art (nature), technology (structure), life (light) and culture (spirit). The goal is to discover the inherent spirit in each project and this is accomplished through a hands-on approach and complete immersion into the design. Dominic's instinct as a painter is evident in his work. The projects are conceived as paintings on a three dimensional canvas.</p>
            </div>
            <ScrollElement name="team-section" className="element">
                <Team />
            </ScrollElement>
            
            <ScrollElement name="contact-section" className="element">
                <Contact />
            </ScrollElement>
        </div>
    )
}

