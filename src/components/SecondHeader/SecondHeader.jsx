import React, {useState, useEffect} from "react";

import './SecondHeader.css';
import logo from '../../assets/images/LOGO-SGU.png';

const SecondHeader = () => {

    return (
        <div className="navbar2">
            <ul className="nav-menu">
                <li>Research</li>
                <li>New Students</li>
                <li>Active Students</li>
                <li>Student Life</li>
                <li>Alumni</li>
                <li>Parents</li>
                <li>Quality Assurance</li>
                <li>Trainings</li>
                <button className="portal-button">SGU Portal</button>
            </ul>
        </div>
    )
}

export default SecondHeader;