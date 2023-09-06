import React, { useEffect, useState } from 'react';
import "./scrolltotop.scss";
import { faChevronCircleUp, faL } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ScrollToTop() {
    const [scrollToTop, setTopButton] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 750) {
                setTopButton(true);
            } else {
                setTopButton(false);
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
    <>{
        <button className={scrollToTop? "btn scroll-to-top show" : "btn scroll-to-top"} onClick={scrollUp}>
            <FontAwesomeIcon icon={faChevronCircleUp} />
        </button>
    }
    </>
    )
}
