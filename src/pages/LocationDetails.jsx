import "../styles/locationDetails.css";
import RectangleInfo from "../Components/RectangleInfo.jsx";
import AproposItems from "../Components/AproposItems.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Carousel from "../Components/Carrouselle.jsx";

export default function LocationDetails() {
  const [appartement, setAppartement] = useState({});
  const urlParams = useParams();
  console.log(urlParams);
  const idParam = urlParams.id;

  //FONCTION POUR DETERMINER L'APPART EN FONCTION DE SON ID
  function trouverAppartAvecId(data, id) {
    for (const item of data) {
      if (item.id === id) {
        return item;
      }
    }
  }

  useEffect(() => {
    fetch(`/dataLocation.json`)
      .then((res) => res.json())
      .then((lappart) => trouverAppartAvecId(lappart, idParam))
      .then((data) => setAppartement(data));
  }, [idParam]);

  return (
    <figure className="figureDetailsLocation">
      <Carousel className="carousel" images={appartement.pictures} />
      <figcaption>
        <div className="figcationDetailsLeve1">
          <div className="level1Left">
            <h1>{appartement.title}</h1>
            <p>{appartement.location} </p>
            <div className="rectangleInfoComponant">
              <RectangleInfo />
            </div>
          </div>
          <div className="level1Right">
            <div className="photoPropritaire">
              <p>hostname</p>
              <img src="" alt="photo du proprietaire de l'appartement" />
            </div>
            <div className="stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
        </div>

        <div className="figcationDetailsLeve2">
          <AproposItems className="aproposItemDetailsPage" />
        </div>
      </figcaption>
    </figure>
  );
}
