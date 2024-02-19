

function LocationCard(props) {
  return (
    <figure key={props.id} className="locationCard">
      <img src={props.img} alt={props.title} />
      <figcaption>
        <p>{props.title}</p>
      </figcaption>
    </figure>
  );
}


export default LocationCard;
