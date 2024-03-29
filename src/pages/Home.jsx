import LocationCard from "../Components/LocationCard";
// import myData from "../../public/dataLocation.jsx";
import "../styles/home.css";
import "../styles/locationCard.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch("dataLocation.json")
      .then((result) => result.json())
      .then((data) => {
        setLocations(data);
      });
  }, []);

  const LocationCardsElements = locations.map((location) => {
    return (
      <div key={location.id}>
        <Link
          to={`/Appartement/${location.id}`}
          className="LiensVersDetailsAppart"
        >
          <LocationCard img={location.cover} title={location.title} />
        </Link>
      </div>
    );
  });

  return (
    <div className="homeContainer">
      <section className="homeContainer__Img">
        <p>Chez vous, partout et ailleurs</p>
      </section>

      <section className="homeContainer__AllArticlesLocaction">
        {LocationCardsElements}
      </section>
    </div>
  );
}
