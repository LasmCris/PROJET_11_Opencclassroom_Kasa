import "../styles/locationDetails.css";
import "../styles/squareInfo.css";
import "../styles/dropdownAppartment.css";
import SquareInfo from "../Components/SquareInfo.jsx";
import DropdownAppartment from "../Components/DropdownAppartment.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Carousel from "../Components/Carrouselle.jsx";

export default function LocationDetails() {
  const urlParams = useParams();
  // console.log(urlParams);
  const idParam = urlParams.id;

 const [location, setLocation] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(false);

 useEffect(() => {
   fetch("/dataLocation.json")
     .then((res) => res.json())
     .then((locations) => locations.find((location) => location.id === idParam))
     .then((location) => {
       setLoading(false);
       if (location === undefined) {
         setError(true);
         return;
       }

       setLocation(location);
     });
 }, [idParam]);

 if (loading) {
   return <h1>Chargement...</h1>;
 }

 if (error) {
   return redirect("/error");
 }

  return (
    <figure className="figureDetailsLocation">
      <Carousel className="carousel" images={location.pictures} />
      <figcaption>
        <div className="figcationDetailsLeve1">
          <div className="level1Left">
            <h1>{location.title}</h1>
            <p>{location.location} </p>
            <div className="rectangleInfoComponant">
              {location.tags.map((tag, index) => (
                <SquareInfo key={index} info={tag} />
              ))}
            </div>
          </div>
          <div className="level1Right">
            <div className="photoPropritaire">
              <p>{location.host.name}</p>
              <img
                src={location.host.picture}
                alt="photo du proprietaire de l'appartement"
              />
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
          <DropdownAppartment
            detailAppartment="Description"
            detailApropos={location.description}
          />
          <DropdownAppartment
            detailAppartment="Equipements"
            detailApropos={location.equipments.map((equipment, index) => (
              <p key={index}>{equipment}</p>
            ))}
          />
        </div>
      </figcaption>
    </figure>
  );
}
