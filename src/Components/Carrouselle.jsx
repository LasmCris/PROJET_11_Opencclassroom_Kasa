import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Carousel(props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + props.images.length) % props.images.length
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % props.images.length);
  };

  return (
    <div className="carousel">
      <img
        src={props.images[currentImageIndex]} // Utilisation correcte des images depuis props
        alt={`Image ${currentImageIndex + 1}`}
      />

      <div className="carouselNavigation">
        <FontAwesomeIcon
          className="arrowLeft"
          icon={faArrowLeft}
          onClick={goToPreviousImage}
        />
        <FontAwesomeIcon
          className="arrowRight"
          icon={faArrowRight}
          onClick={goToNextImage}
        />
      </div>
    </div>
  );
}
