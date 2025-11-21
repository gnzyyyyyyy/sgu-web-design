import React from "react";

import "./DoubleDegree.css";

import solbridge from "../../assets/images/solbridge.png";
import mingchuan from "../../assets/images/mingchuan.png";
import imi from "../../assets/images/imi.png";
import hokkaido from "../../assets/images/hokkaido.png";
import fhsoest from "../../assets/images/fhsoest.png";
import emst from "../../assets/images/emst.png";
import albstadt from "../../assets/images/albstadt.png";

const DoubleDegree = () => {
    return (
        <div className="sectionWrapper">
            <h2 className="title">
                Our Double Degree & Student Exchange University Partners
            </h2>

            <div className="grids">
                <img src={solbridge} alt="solbridge" className="logoUni" />
                <img src={mingchuan} alt="mingchuan" className="logoUni" />
                <img src={imi} alt="imi" className="logoUni" />
                <img src={hokkaido} alt="hokkaido" className="logoUni" />
                <img src={fhsoest} alt="fhsoest" className="logoUni" />
                <img src={emst} alt="emst" className="logoUni" />
                <div className="centerLast">
                    <img src={albstadt} alt="albstadt" className="logoUni" />
                </div>
            </div>
        </div>
    )
}

export default DoubleDegree