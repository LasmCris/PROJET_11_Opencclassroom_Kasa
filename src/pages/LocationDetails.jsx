import "../styles/locationDetails.css"
import RectangleInfo from "../Components/RectangleInfo.jsx";
import AproposItems from "../Components/AproposItems.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


export default function LocationDetails() {


    return (
      <figure className="figureDetailsLocation">
        <img src="" alt="Image de l'appartement de location" />
        <figcaption>
          <div className="figcationDetailsLeve1">
            <div className="level1Left">
              <h1>NOM DE L4APARTEMENT</h1>
              <p>Ville</p>
              <div className="rectangleInfoComponant">
                <RectangleInfo />
              </div>
            </div>
            <div className="level1Right">
              <div className="photoPropritaire">
                <p>DANNIELL</p>
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