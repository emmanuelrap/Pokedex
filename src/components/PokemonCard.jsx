import "./PokemonCard.css";
import pokeball from "../img/pokeball.png";
import { useState } from "react";

export function PokemonCard({
  id,
  name,
  image,
  type,
  height,
  weight,
  stats,
  statsName,
}) {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="container">
      {/* Si esta seleccionado con el cursor entonces.. */}
      {isShown && (
        <div className="show">
          <div className="stat-container-title">
            <p>{name}</p>
            <img src={image} alt={name} className="img-title" />
          </div>
          <img src={image} alt={name} />
          <div style={{ display: "flex", width: "100%" }}>
            <div
              className="stats-left"
              style={{ background: "#dbdbd9", textAlign: "center" }}
            >
              <p>
                <b>Type:</b>
              </p>
              <p>
                <b>Height:</b>
              </p>
              <p>
                <b>Weight:</b>
              </p>
            </div>
            <div className="stats-right" style={{ background: "#ffffff" }}>
              <p>{type}</p>
              <p>{height}0 cm</p>
              <p>{weight} lbs</p>
            </div>
          </div>
          <div className="base-stats">
            <div>
              {statsName.map((stats) => (
                <p className="stats">{stats}</p>
              ))}
            </div>
            <div>
              {stats.map((stats) => (
                <p className="stats">{stats}</p>
              ))}
            </div>
          </div>
        </div>
      )}

      {/*  ///// Lista que se muestra siempre /////  */}
      <div
        className="right"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        {/* imagen pokemon lista */}
        <img
          src={image}
          alt={name}
          style={{ maxHeight: "50px", marginRight: "10px", width: "50px" }}
        />
        <p style={{ width: "300px" }}># {id}</p>
        <p>{name}</p>
        <img
          src={pokeball}
          alt="pokeball"
          style={{ marginLeft: "auto", width: "50px" }}
        />
      </div>
    </div>
  );
}
