import "./TopBar.css";
import pokeball from "../img/pokeball.png";
import salir from "../img/salir.png";
import pokeballcolor from "../img/pokeballcolor.png";
import { UserAuth } from "../context/AuthContext";

export function TopBar() {
  const { user, logOut } = UserAuth();
  const cerrarSesión = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="title">
      <div className="title__left">
        <p>Pokédex</p>
        <div className="caught-seen">
          <div className="caught">
            <img
              src={pokeballcolor}
              alt="pokeball"
              style={{ width: "30px", marginRight: "10px" }}
            />
            {/* Atrapados */}
            <p>59</p>
          </div>
          <div className="seen">
            <img
              src={pokeball}
              alt="pokeball"
              style={{ width: "30px", marginRight: "10px" }}
            />
            {/* Faltantes */}
            <p>390</p>
          </div>
          <img src={salir} onClick={cerrarSesión}></img>
        </div>
      </div>
    </div>
  );
}
