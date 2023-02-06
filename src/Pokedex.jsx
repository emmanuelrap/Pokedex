import { useState } from "react";
import "./pokedex.css";
import { TopBar } from "./components/TopBar";
import { PokeList } from "./components/PokeList";
import { BottomBar } from "./components/BottomBar";

export function Pokedex() {
  return (
    <div>
      <TopBar />
      <PokeList />
      <BottomBar />
    </div>
  );
}

export default Pokedex;
