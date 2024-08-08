import { React, useState, useEffect } from 'react';
import Slider from "react-slick";
import './GalleryCarousel.css';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function GalleryCarousel(props) {

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);
  const [numImages, setNumImages] = useState(3);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 700px)');

    const handleMediaQueryChange = (e) => {
      if (e.matches) {
        setNumImages(1);
      } else {
        setNumImages(3);
      }
    };

    // Set the initial state based on the current window size
    handleMediaQueryChange(mediaQuery);

    // Listen for changes in the media query status
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Clean up the event listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  const settings = {
    infinite: true,
    dots: true,
    lazyLoad: false,
    speed: 500,
    slidesToShow: numImages,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="gallery-slider-container">
      <Slider {...settings}>
        {props.items.map((ele, idx) => (
          <div className={idx === imageIndex ? "gallery-slide gallery-active-slide" : "gallery-slide"}>
            <div className='gallery-slider-content'>
              <div className='gallery-img-container'>
                <img src={ele.src} alt={ele.title} />
              </div>
              <div className='gallery-img-details para-font'>
                <h3 className='heading-font'>{ele.title}</h3>
                <p>{ele.medium}</p>
                <p>{ele.size}</p>
                {ele.available? <p>Available!</p> : <p>Sold!  </p>}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}