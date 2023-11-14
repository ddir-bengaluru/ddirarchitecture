import React from 'react'
import "./about.scss";
import { Element as ScrollElement, scroller } from 'react-scroll';
import Team from '../Team/Team';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Contact from '../Contact/Contact';

export default function About() {
    const location = useLocation();
    useEffect(() => {
        const shouldScrollToTeam = location.hash === '#team-section';
        const shouldScrollToContact = location.hash === '#contact-section';

        if (shouldScrollToTeam) {
            // Scroll to the "team-section" when the component mounts
            let offSet = window.innerWidth > 768 ? -80 : 0;
            scroller.scrollTo('team-section', {
                smooth: true,
                offset: offSet, // Adjust the offset as needed
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
                <p className='about__hero__slang'>DDIR Architecture Studio, founded in 2003 by the visionary Dominic Dube and Inge Rieck, is a harmonious blend of French-Canadian and German influences. Dominic's unique approach combines art (nature), technology (structure), life (light) and culture (spirit) to reveal the true spirit of each project. With a hands-on, immersive design process, DDIR Architecture Studio crafts three-dimensional masterpieces that resonate with Dominic's painterly instincts.</p>
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

