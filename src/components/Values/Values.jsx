import React from "react";
import values1 from "../../assets/images/value1.png";
import values2 from "../../assets/images/value2.png";
import values3 from "../../assets/images/value3.png";
import "./Values.css";

const Values = () => {
    return (
        <section className="Values-section">
            <div className="Values-wrapper">
                <h2 className="Values-title">Added Values To Your Journey</h2>
            
                <div className="values-grid">
                    <div className="values-card">
                        <img src={values1} alt="" className="values-img" />
                        <button className="faculty-btn">Learn More &gt;</button>
                    </div>
                    <div className="values-card">
                        <img src={values2} alt="" className="values-img" />
                        <button className="faculty-btn">Scholarship &gt;</button>
                    </div>
                    <div className="values-card">
                        <img src={values3} alt="" className="values-img" />
                        <button className="faculty-btn">Learn More &gt;</button>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Values;