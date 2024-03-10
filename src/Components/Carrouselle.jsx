import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Carousel (props) {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    const newIndex = (currentImageIndex - 1 + props.length) % props.length;
    setCurrentImageIndex(newIndex);
  };

  const goToNextImage = () => {
    const newIndex = (currentImageIndex + 1) % props.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="carousel">
      <img
        src={props[currentImageIndex]}
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




