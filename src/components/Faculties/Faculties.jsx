import React from "react";
import LST from "../../assets/images/LST.png";
import EIT from "../../assets/images/EIT.png";
import BC from "../../assets/images/BC.png";
import MBA from "../../assets/images/MBA.png";
import MIT from "../../assets/images/MIT.png";
import MME from "../../assets/images/MME.png";

import "./Faculties.css";

const Faculties = () => {
    return (
        <section className="facutlties-section">
            <div className="bachelor-wrapper">
                <h2 className="faculties-title">Our Bachelor Faculties</h2>
                <p className="bachelor-faculties-desc">
                      At SGU, your learning journey goes beyond textbooks. From Day 1 you'll engage in an international curriculum delivered entirely in English, grounded in the Swiss-German educational model that emphasizes both theory and practice. You’ll complete two structured internships — one in Indonesia and another abroad — so by the time you graduate, you won’t just hold a degree, you’ll have real working experience and a global outlook. Whether you’re in Business & Communication, Engineering & Information Technology, or Life Science & Technology, the curriculum is crafted to respond to global challenges: digital transformation, sustainability, technological disruption, and cross-cultural collaboration. You’ll graduate equipped not just with knowledge, but with a mindset and credentials that make you competitive both in Indonesia and internationally.
                </p>

                <div className="bachelor-grid">
                    <div className="faculty-card">
                        <img src={LST} alt="" className="faculty-img" />
                        <button className="faculty-btn">Programs &gt;</button>
                    </div>
                    <div className="faculty-card">
                        <img src={EIT} alt="" className="faculty-img" />
                        <button className="faculty-btn">Programs &gt;</button>
                    </div>
                    <div className="faculty-card">
                        <img src={BC} alt="" className="faculty-img" />
                        <button className="faculty-btn">Programs &gt;</button>
                    </div>
                </div>
            </div>

        <div className="master-wrapper">
                <h2 className="faculties-title">Our Master Programs</h2>

                
                <div className="master-row">
                    <img src={MBA} alt="" className="master-img" />
                    <div className="master-text">
                        <h3 className="master-title">Master Program of Business Administation</h3>
                        <p>
                           At SGU, our MBA Program exposes our students, 
                           who are aspiring professionals, to a journey of 
                           both educational and a self-discovery experience in 
                           enhancing their capabilities and capacity to create 
                           value not only in their professional career but also 
                           in their personal development.
                        </p>
                        <button className="faculty-btn master-btn">Programs &gt;</button>
                    </div>
                </div>

                
                <div className="master-row">
                    <img src={MIT} alt="" className="master-img" />
                    <div className="master-text">
                        <h3 className="master-title">Master Program of Information Technology</h3>
                        <p>
                            Studying Master of Information Technology in SGU is the best way to prepare yourself to adapt 
                            to the current industry challenges and issues as IT becomes the business enabler, especially 
                            considering the growing importance of digital economy and industry 4.0 in Indonesia.
                        </p>
                        <button className="faculty-btn master-btn">Programs &gt;</button>
                    </div>
                </div>

                
                <div className="master-row">
                    <img src={MME} alt="" className="master-img" />
                    <div className="master-text">
                        <h3 className="master-title">Master Program of Mechanical Engineering</h3>
                        <p>
                            Master of Mechanical Engineering of SGU is committed to support the application of Industry 4.0 in Indonesia.
                            We recognize the need of the mechatronics program in the education system so the graduates will be able to implement 
                            automations in the industry to pursue smart factories.
                        </p>
                        <button className="faculty-btn master-btn">Programs &gt;</button>
                    </div>
                </div>
            </div>  
        </section>
    )
};

export default Faculties