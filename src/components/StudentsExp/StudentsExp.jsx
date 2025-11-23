import React from "react";
import "./StudentsExp.css";

import josephIMG from "../../assets/images/joseph.png";
import akramIMG from "../../assets/images/akram.png";
import wesleyIMG from "../../assets/images/wesley.png";
import troyIMG from "../../assets/images/troy.png";

const students = [
    { name: "Joseph Andreas", img: josephIMG, major:"Information Technology 2016", desc: "Gila cinta banget gw kuliah di SGU, dosennya ramah banget! Lingkungannya juga nyaman banget" },
    { name: "Muhammad Akram Haritz Thedy", img: akramIMG, major:"Information Technology 2024", desc: "Good shi campus!" },
    { name: "Orlean Wesley", img: wesleyIMG, major:"Information Technology 2024", desc: "Gacha is my life." },
    { name: "Troy Alexius", img: troyIMG, major:"Information Technology 2024", desc: "<3" },
]

const StudentsExp = () => {
    return (
        <section className="students-exp-section">
            <h2 className="students-exp-title">Students Experience</h2>
            <div className="students-exp-scroller">
                {students.map((s) => (
                    <div key={s.name} className="student-card">
                        <img src={s.img} alt="" className="student-img" />
                        <h3 className="student-name">{s.name}</h3>
                        <p className="student-major">{s.major}</p>
                        <p className="student-desc">{s.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StudentsExp;