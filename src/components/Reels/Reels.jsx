import React from "react";
import "./Reels.css";

const sgureels = [
    { id: "C7BbbHwP58S" },
    { id: "DQDcpvYE3A6"},
    { id: "DRB5mbJD0Jy"},
    { id: "DQ_MKs6E0iT"},
    { id: "DQ5nyFYk10L"},
];

const sguYoutube = [
    { id: "07K-WTIq5kI" },
    { id: "kSIT2ujxftU" },
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

            <h2 className="sgu-reels-title" style={{ marginTop: "60px" }}>YouTube Highlights</h2>
                <div className="youtube-grid">
                {sguYoutube.map((v) => (
                    <div key={v.id} className="youtube-card">
                    <iframe
                        className="reel-iframe"
                        src={`https://www.youtube.com/embed/${v.id}?rel=0&controls=0&modestbranding=1&iv_load_policy=3`}
                        title="SGU YouTube Video"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    ></iframe>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Reels;