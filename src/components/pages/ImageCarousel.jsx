import React, { useState } from "react";
import "../../ImageCarousel.css"

const ImageCarousel = ( {images, id }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);    
  }

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  }

  return (
    <div className="homepage-image-carousel">
      <button className="homepage-carousel-previous" onClick={prevImage}>{'<'}</button>
      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      <button className="homepage-carousel-next" onClick={nextImage}>{'>'}</button>
      <div className="homepage-carousel-dots">
        {images.map((_, index) => ( 
          <div
          key={index}
          className={`homepage-carousel-dot ${index === currentIndex ? 'active' : ''}`}
          onClick={() => handleDotClick(index)}
          />
          ))}
      </div>
    </div>
  );
};

export default ImageCarousel;