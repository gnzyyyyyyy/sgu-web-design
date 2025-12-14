import React from "react";
import "./StudentsExp.css";

import josephIMG from "../../assets/images/joseph.png";
import akramIMG from "../../assets/images/fabio.png";
import wesleyIMG from "../../assets/images/wesley2.png";
import troyIMG from "../../assets/images/troy2.png";

const students = [
    { name: "Joseph Andreas", img: josephIMG, major:"Information Technology 2016", desc: "Overall, studying at a Swiss German university is a rewarding experience for students who value academic excellence, structure, and independence. While the workload can be intense and cultural adaptation may require effort, the skills, education, and international exposure gained are highly valuable. For motivated students, Swiss German universities offer a solid foundation for both personal growth and future career success." },
    { name: "Fabio Nicholas Kho", img: akramIMG, major:"Information Technology 2024", desc: "Life outside academics is generally well balanced. Swiss German universities often encourage independence, meaning students must manage their time and responsibilities on their own. Student clubs, sports activities, and cultural events provide opportunities to socialize, though student life can feel quieter compared to universities in some other countries. The high cost of living is one of the main challenges, but it is balanced by excellent public transportation, safety, and a high overall quality of life" },
    { name: "Orlean Wesley", img: wesleyIMG, major:"Information Technology 2024", desc: "The student experience is strongly influenced by the multicultural and international atmosphere. While Swiss German (Schweizerdeutsch) is commonly spoken in daily life, many degree programs are taught in High German or English, making it accessible for international students. This creates a diverse campus culture where students from different backgrounds interact, collaborate, and learn from one another. However, adjusting to the local language and culture can take time, especially outside the classroom." },
    { name: "Troy Alexius", img: troyIMG, major:"Information Technology 2024", desc: "Studying at a Swiss German university offers a high-quality academic experience shaped by strong research traditions and a practical approach to learning. Lectures are well-structured, professors are knowledgeable, and courses often emphasize critical thinking and real-world application. Students benefit from modern facilities, well-equipped libraries, and access to cutting-edge research projects, especially in fields like engineering, business, and science. The academic environment is demanding, but it prepares students effectively for professional careers." },
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