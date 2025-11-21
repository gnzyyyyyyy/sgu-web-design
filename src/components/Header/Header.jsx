import React, {useState, useEffect} from "react";

import './Header.css';
import logo from '../../assets/images/LOGO-SGU.png';

const Header = () => {
    
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }; 
    });

    return (
        <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <img src={logo} alt="SGU Logo" className="logo" />

            <ul>
                <li>About SGU</li>
                <li>Programs</li>
                <li>Admissions</li>
                <li>Scholarships</li>
            </ul>
            <button className="login-button">Join SGU Now</button>
        </div>
    )
}

export default Header