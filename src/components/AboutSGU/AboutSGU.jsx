import React from "react";
import MrSamPK from "../../assets/images/paksam.webp";
import MrLeo from "../../assets/images/LeoRusli.jpg";
import MrJames from "../../assets/images/jamespurnama.jpg"

import "./AboutSGU.css";

const AboutSGU = () => {
    return (
        <section className="about-sgu">
            <div className="about-container">
                <h2 className="about-title">SWISS GERMAN UNIVERSITY</h2>

                <div className="about-flex">
                    <div className="about-left">
                        <p className="about-text">
                            Swiss German University (SGU) was established in 2000 as the first international
                            university with an academic license recognized under Indonesian law. The license
                            was issued by the National Ministry of Education (DIKNAS). SGU was formed through
                            a joint effort between Indonesia, Germany, Switzerland, and Austria with the objective
                            of bringing a strong international focus and promoting knowledge and technology in the 
                            higher education system of Indonesia.
                        </p>
                        <p className="about-text">
                            In order to achieve its objectives, SGU offers quality-oriented learning through 
                            17 Bachelor's Degree Programs and 6 Master's Degree Programs ranging from 
                            Engineering, Information Technology, and Business to Life Sciences and Social 
                            Sciences that all use English as the medium of instruction. A pioneer in offering 
                            international curricula and international degree programs in Indonesia, SGU has 
                            established partnerships with 26 universities and 250 companies spread around Europe 
                            that put the institution among the most successful universities with European connections.
                        </p>
                        <p className="about-text">
                            Ever since its establishment, SGU has been dedicated to delivering quality education 
                            in line with international standards and aims to develop skilled professionals that 
                            meet the demands of industry. Ninety percent of the SGU's lecturers earned an 
                            academic degree abroad and have had experience in working as professionals in their 
                            related field.
                        </p>
                        <p className="about-text">
                            SGU Bachelor's Degree Programs offer courses which combine both theoretical and 
                            practical training (internship), while Master's Degree Programs are uniquely designed 
                            to produce business leaders who are fit to compete globally. For over a decade, SGU 
                            has delivered this nation's finest graduates, who are equipped with the knowledge, 
                            experience, and character which are greatly needed in today's competitive market, 
                            making it the place to pursue your tertiary education and degree with full confidence.
                        </p>
                        <button className="about-btn">See More About SGU</button>
                    </div>

                    <div className="about-right">
                        <div className="rector-card-side">
                            <img src={MrSamPK} alt="Rector" className="rector-img" />

                            <div className="rector-name">
                                Dr. Dipl. -Ing. Samuel P. Kusumocahyo
                            </div>

                            <div className="rector-position">
                                Rector Swiss German University
                            </div>

                            <img src={MrLeo} alt="Rector" className="rector-img" />

                            <div className="rector-name">
                               Leonard Rusli, Ph.D
                            </div>

                            <div className="rector-position">
                                Vice Rector of Academic Affairs Swiss German University
                            </div>

                            <img src={MrJames} alt="Rector" className="rector-img" />

                            <div className="rector-name">
                               Associate Professor James Purnama, S.Kom, M.Kom, M.Sc.
                            </div>

                            <div className="rector-position">
                                Vice Rector of Non-Academic Affairs Swiss German University
                            </div>
                            <button className="about-btn">Meet Our Long Life Coaches</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default AboutSGU;