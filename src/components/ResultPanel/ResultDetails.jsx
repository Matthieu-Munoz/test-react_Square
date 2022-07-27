// Dependencies
import { useSelector } from "react-redux";
// Local | React-Redux
// Styles

function ResultDetails() {
  const { resultMore, selector } = useSelector((state) => state.app);
  const selectedSelector = Object.keys(selector).filter((k) => selector[k])[0];
  const result = () => {
    switch (selectedSelector) {
      case "people":
        return (
          <ul className="resultdetails__list">
            <li>Name : {resultMore.name}</li>
            <li>Gender : {resultMore.gender}</li>
            <li>Birth Year : {resultMore.birth_year}</li>
            <li>Height : {resultMore.height}cm</li>
            <li>Mass : {resultMore.mass}kg</li>
            <li>Skin Color : {resultMore.skin_color}</li>
            <li>Hair Color : {resultMore.hair_color}</li>
            <li>Eye Color : {resultMore.eye_color}</li>
          </ul>
        );
      case "planets":
        return (
          <ul className="resultdetails__list">
            <li>Name : {resultMore.name}</li>
            <li>Diameter : {resultMore.diameter}</li>
            <li>Population : {resultMore.population}</li>
            <li>Climate : {resultMore.climate}</li>
            <li>Terrain : {resultMore.terrain}</li>
            <li>Orbital Period : {resultMore.orbital_period}</li>
            <li>Rotation Period : {resultMore.rotation_period}</li>
            <li>Gravity : {resultMore.gravity}</li>
            <li>Surface Wate : {resultMore.surface_water}</li>
          </ul>
        );
      case "films":
        return (
          <ul className="resultdetails__list">
            <li>Title : {resultMore.title}</li>
            <li>Release Date : {resultMore.release_date}</li>
            <li>Episode ID : {resultMore.episode_id}</li>
            <li>Director : {resultMore.director}</li>
            <li>Producer : {resultMore.producer}</li>
          </ul>
        );
      case "species":
        return (
          <ul className="resultdetails__list">
            <li>Name: {resultMore.name}</li>
            <li>Language : {resultMore.language}</li>
            <li>Designation : {resultMore.designation}</li>
            <li>Classification : {resultMore.classification}</li>
            <li>Average Height : {resultMore.average_height}</li>
            <li>Average Lifespan : {resultMore.average_lifespan}</li>
            <li>Skin Colors : {resultMore.skin_colors}</li>
            <li>Hair Colors : {resultMore.hair_colors}</li>
            <li>Eye colors : {resultMore.eye_colors}</li>
          </ul>
        );

      case "starships":
        return (
          <ul className="resultdetails__list">
            <li>Name : {resultMore.name}</li>
            <li>Model : {resultMore.model}</li>
            <li>Crew : {resultMore.crew}</li>
            <li>Passengers: {resultMore.passengers}</li>
            <li>Cost : {resultMore.cost_in_credits} credits</li>
            <li>Manufacturer : {resultMore.manufacturer}</li>
            <li>Starship Class : {resultMore.starship_class}</li>
            <li>Length : {resultMore.length}</li>
            <li>
              Max Atmosphering Speed : {resultMore.max_atmosphering_speed}
            </li>
            <li>Hyperdrive Rating : {resultMore.hyperdrive_rating}</li>
            <li>MGLT : {resultMore.MGLT}</li>
            <li>Consumables : {resultMore.consumables}</li>
            <li>Cargo Capacity : {resultMore.cargo_capacity}</li>
          </ul>
        );
      case "vehicles":
        return (
          <ul className="resultdetails__list">
            <li>Name : {resultMore.name}</li>
            <li>Model: {resultMore.model}</li>
            <li>Crew : {resultMore.crew}</li>
            <li>Passengers : {resultMore.passengers}</li>
            <li>Cost : {resultMore.cost_in_credits} credits</li>
            <li>Manufacturer : {resultMore.manufacturer}</li>
            <li>Vehicle Class : {resultMore.vehicle_class}</li>
            <li>Length : {resultMore.length}</li>
            <li>
              Max Atmosphering Speed : {resultMore.max_atmosphering_speed}
            </li>
            <li>Consumables : {resultMore.consumables}</li>
            <li>Cargo Capacity : {resultMore.cargo_capacity}</li>
          </ul>
        );
      default:
        return <h1>No result match</h1>;
    }
  };

  return (
    <div className="resultdetails">
      <div className="resultdetails__separator">&gt;</div>
      {result()}
    </div>
  );
}

export default ResultDetails;
