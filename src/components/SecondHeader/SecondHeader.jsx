import React from "react";
import "./SecondHeader.css";

const SecondHeader = () => {
  return (
    <div className="second-header">
      <ul className="second-nav">
        <li>Research</li>
        <li>New Students</li>
        <li>Active Students</li>
        <li>Student Life</li>
        <li>Alumni</li>
        <li>Parents</li>
        <li>Quality Assurance</li>
        <li>Trainings</li>
        <button className="second-portal-btn">SGU Portal</button>
      </ul>
    </div>
  );
};

export default SecondHeader;
