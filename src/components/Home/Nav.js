import React from "react";
import {Link} from 'react-scroll';
import {NavLink} from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <ul>
                <li><NavLink to="/" smooth={"true"} className="link">Start</NavLink></li>
                <li><Link to="fourSteps" smooth={"true"} className="link">O co chodzi?</Link></li>
                <li><Link to="aboutUs" smooth={"true"} className="link">O nas</Link></li>
                <li><Link to="whoWeHelp" smooth={"true"} className="link">Fundacja i organizacje</Link></li>
                <li><Link to="contact" smooth={"true"} className="link">Kontakt</Link></li>
            </ul>
        </nav>
    )
};

export default Nav;