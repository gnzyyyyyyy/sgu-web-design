import { useEffect, useState, useRef } from "react";
import img1 from "../../assets/images/img1.webp";
import img2 from "../../assets/images/img2.webp";
import img3 from "../../assets/images/img3.webp";
import "./Intro.css";

import sguWhite from "../../assets/images/WHITE-SGU-LOGO.png";

export default function Intro() {
  const carouselRef = useRef(null);

  const sequence = [
    [img3, img1, img2],
    [img1, img2, img3],
    [img2, img3, img1]
  ];

  const [index, setIndex] = useState(0);
  const [images, setImages] = useState(sequence[0]);

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      startSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [index]);

  const startSlide = () => {
    setAnimate(true); // trigger shrink + fade animations

    setTimeout(() => {
      const nextIndex = (index + 1) % sequence.length;
      setImages(sequence[nextIndex]);
      setIndex(nextIndex);

      setAnimate(false); // reset to normal state
    }, 700);
  };

  return (
    <div className="intro">
      <div className="intro-left">
        <div className="carousel-container">
          <img
            src={images[0]}
            className={`small-img left-img ${animate ? "fade-out shrink-side" : ""}`}
          />

          <img
            src={images[1]}
            className={`main-img ${animate ? "shrink-center fade-out" : "grow-in"}`}
          />

          <img
            src={images[2]}
            className={`small-img right-img ${animate ? "grow-center" : ""}`}
          />
        </div>
      </div>

      <div className="intro-right">
        <img src={sguWhite} className="intro-logo" />
        <p className="intro-text">
          A global edge, rooted in Tangerang. Swiss German University is the first international-university in Indonesia offering dual-degree programs in partnership with Germany and Switzerland. Shape your future with innovation, industry-experience, and global reach.
        </p>
      </div>
    </div>
  );
}
