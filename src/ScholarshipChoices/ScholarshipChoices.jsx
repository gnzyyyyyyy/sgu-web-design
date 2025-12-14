import React from "react";
import "./ScholarshipChoices.css";

import josephIMG from "../assets/images/joseph.png";
import akramIMG from "../assets/images/akram.png";
import wesleyIMG from "../assets/images/wesley.png";
import troyIMG from "../assets/images/troy.png";
import hatIMG from "../assets/images/hat.png";
import runIMG from "../assets/images/run.png";
import sportIMG from "../assets/images/sports.jpg";
import bookIMG from "../assets/images/book.jpg";
import alfasiberIMG from "../assets/images/alfasiber.jpg";

const students = [
    { name: "Academic Scholarships", img: bookIMG, major:"S1 & S2", req:"Requirements:", desc: "Submit a report card SMA grade X-XI with a minimum score average of 80.\n\n Recommendation letter from the school’s teachers or principal.\n\n Essay with a minimum of 500 words on the academic record.\n\n Academic certificate.\n\n Following the entrance test process is the Academic Potential Test (TPA)." },
    { name: "Non-Academic Scholarships", img: sportIMG, major:"S1 & S2", req:"Requirements:", desc: "Submit a report card SMA grade X-XI with a minimum score average of 80.\n\n Recommendation letter from the school’s teachers or principal.\n\n Portfolio or leadership program or art and creativity or sport certificate.\n\n Essay with a minimum of 500 words on the non-academic record.\n\n Following the entrance test process is the Academic Potential Test (TPA)." },
    { name: "Alumni Scholarships", img: hatIMG, major:"S2", req:"Requirements:", desc: "Applicable for SGU alumni (Bachelor Degree) who pass the internal interview.\n\n Required GPA ≥ 3.50 for next semester.\n\n Alumni who has GPA (bachelor degree) ≥ 2.75 will get 15% discount from total normal price for single degree program.\n\n Alumni who has GPA (bachelor degree) ≥ 3.00 will get 25% discount from total normal price for single degree program.\n\n Alumni who has GPA (bachelor degree) ≥ 3.50 will get 50% discount from total normal price for single degree program." },
    { name: "Alfa Siber Scholarships", img: alfasiberIMG, major:"S2",  req:"Requirements:", desc: "Begin your path to global success with Swiss German University’s fully-funded Master IT in Cybersecurity scholarship program.\n\nSeize this exceptional chance to impact the digital world and act now to shape your future to secure a promising career.\n\n The deadline for Alfa Siber Teknologi’s scholarship submission is approaching, so make sure to register by July 31, 2024! For more information, please contact: 0811 995 8010." },
]

const ScholarshipChoices = () => {
    return (
        <section className="students-exp-section">
            <h2 className="students-exp-title">Apply for SGU Scholarship!</h2>
            <div className="students-exp-scroller">
                {students.map((s) => (  
                    <div key={s.name} className="student-card">
                        <img src={s.img} alt="" className="student-img" />
                        <h3 className="student-name">{s.name}</h3>
                        <p className="student-major">{s.major}</p>
                        <button className="scholarship-button">Join Proggram</button>
                        <p className="student-desc">{s.req}</p>
                        <p className="student-desc">{s.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ScholarshipChoices;