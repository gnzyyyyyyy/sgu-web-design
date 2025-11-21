import React from "react";
import "./Reels.css";

const sgureels = [
    { id: "C7BbbHwP58S" },
    { id: "DQDcpvYE3A6"},
    { id: "DRB5mbJD0Jy"},
    { id: "DQ_MKs6E0iT"},
    { id: "DQ5nyFYk10L"},
];

const Reels = () => {
    return (
        <section className="sgu-reels-section">
            <h2 className="sgu-reels-title">Reels</h2>

                <div className="sgu-reels-scroller">
                    {sgureels.map((r) => (
                        <div key={r.id} className="reel-card">
                            <iframe src={`https://www.instagram.com/reel/${r.id}/embed`} 
                            className="reel-iframe" 
                            allow="autoplay; encrypted-media"
                            ></iframe>
                        </div>
                    ))}
                </div>
        </section>
    );
};

export default Reels;