import react from "react";
import "./ScholarshipInfo.css";

const ScholarshipInfo = () => {
    return (
        <div>
            <section className="scholarship-info">
                <h2 className="scholarship-title">Scholarship Information</h2>

                <div className="scholarship-box">
                    <p>
                        We are excited to announce that SGU is calling opportunities for SMA grade XII students to get academic and non-academic scholarship. 
                        Eligibility Criteria To full fill the requirement.Take this opportunity to achieve a quality education at a more affordable cost. Here 
                        are the scholarship details you can obtain based on your academic accomplishments.
                    </p>
                    
                    <br/>
                    <p>
                        Swiss German University (SGU) also proudly presents an exclusive opportunity through our Privilege Scholarship program. 
                        Whether you are an SGU alumnus or a graduate from another university, we offer various scholarships to help you achieve your academic dreams.
                        Don’t miss this golden opportunity to receive a quality education at a more affordable cost. Here are the scholarship details you can obtain based 
                        on your academic achievements.
                    </p>
                    <br/>

                    <p><strong>Document Requirement Procedure:</strong></p>
                    <ul className="scholarship-list">
                        <li>Academic Transcript</li>
                        <li>Bachelor Degree Certificate(S2)</li>
                        <li>Motivational Letter</li>
                    </ul>

                    <p><strong>Deadline:</strong></p>
                    <ul className="scholarship-list">
                        <li>Open Registration Batch 1: August 12 – September 20, 2024</li>
                        <li>Result in Scholarship Batch 1: September 28, 2024</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default ScholarshipInfo;