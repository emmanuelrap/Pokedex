import { useEffect, useState } from "react";
import { PokemonCard } from "./PokemonCard";
import "./PokeList.css";

export function PokeList() {
  const [allPokemons, setAllPokemons] = useState([]);

  const getAllPokemons = async () => {
    const resNombres = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
    );
    const dataNombres = await resNombres.json();

    //Recorre resNombres, y con ellos obtiene los datos de c/u
    function createPokemonObject(pokemones) {
      pokemones.forEach(async (pokemon) => {
        const resDatosPokemon = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        //mete a la currenList pokemon x pokemon y los ordena de menor a mayor por ID
        const data = await resDatosPokemon.json();
        setAllPokemons((currentList) => [...currentList, data]);
        await allPokemons.sort((a, b) => a.id - b.id);
      });
    }
    //hace un barrido de los resultados y guarda la respuesta del [ulr + nombrePokemon]
    createPokemonObject(dataNombres.results);
  };

  //Esto es lo PRIMERO que se ejecuta
  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className="app-container">
      <div className="pokemon-container">
        <div className="all-container">
          {allPokemons.map((pokemonStats) => (
            <PokemonCard
              key={pokemonStats.id}
              id={pokemonStats.id.toString().padStart(3, "0")}
              name={pokemonStats.name.replace(/^./, (str) => str.toUpperCase())}
              image={
                pokemonStats.sprites.other["official-artwork"].front_default
              }
              type={pokemonStats.types[0].type.name}
              weight={pokemonStats.weight}
              height={pokemonStats.height}
              stats={pokemonStats.stats
                .map((stat) => stat.base_stat)
                .slice(0, 3)}
              statsName={pokemonStats.stats
                .map((stat) => stat.stat.name)
                .slice(0, 3)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
