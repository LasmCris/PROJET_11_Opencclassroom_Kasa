import LocationCard from "./LocationCard.jsx";
import myData from "../data/dataLocation.jsx";

export default function Home() {

  const LocationCardsElements = myData.map((location) => {
    return (
        <LocationCard key={location.id} img={location.cover} title={location.title} />
    )
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
