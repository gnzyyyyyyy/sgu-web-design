import React, {useState, useEffect} from "react";

import './Header.css';
import { Link } from 'react-router-dom'
import logo from '../../assets/images/LOGO-SGU.png';

const Header = () => {
    
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);


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
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                <img src={logo} alt="SGU Logo" className="logo" />
            </Link>

            <ul className={menuOpen ? "nav-open" : ""}>
                <li onClick={() => setMenuOpen(false)}>About SGU</li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="https://sgu.ac.id/study-programs/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>Study Programs</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <Link to="/scholarship" style={{ textDecoration: "none", color: "inherit" }}>
                        Scholarship
                    </Link>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <Link to="/admission" style={{ textDecoration: "none", color: "inherit" }}>
                        Admission
                    </Link>
                </li>
            </ul>
            <button className="login-button">Join SGU Now</button>

        <div
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            >
            <span></span>
            <span></span>
            <span></span>
            </div>
        </div>
    )
}

export default Header