import React, {useState, useEffect} from "react";
import "./Scholarship.css";

import scholarship1 from "../../assets/images/scholarship1.png";
import scholarship2 from "../../assets/images/scholarship2.png";
import scholarship3 from "../../assets/images/scholarship3.png";

const scholarshipImages = [
    scholarship1,
    scholarship2,
    scholarship3
];

const Scholarship = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % scholarshipImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="scholarship-banner-container">
            {scholarshipImages.map((image, i) => (
                <img key={i} className={`scholarship-banner-image ${i === index ? "fade" : ""}`} src={image} alt={`Scholarship ${i + 1}`} />
            ))}
        </div>
    );
};

export default Scholarship;