import "./BottomBar.css";

export function BottomBar() {
  return (
    <div className="bottom">
      <div className="bottom-btn">
        <p className="bg-circle-white">A</p>
        <p>Ver Detalles</p>
      </div>
      <div className="bottom-btn">
        <p className="bg-circle-white">X</p>
        <p>Hábitat</p>
      </div>
    </div>
  );
}
