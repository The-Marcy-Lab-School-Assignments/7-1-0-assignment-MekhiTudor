import PokemonCard from "./PokemonCard";
import PokemonContext from "../context/PokemonContext";
import { useContext } from "react";
// TODO: import the PokemonContext and useContext

const PokemonCollection = () => {
  //destructuring the useContext object to pull the all pokemon data out of it.
  const { allPokemon, pokemonSearch } = useContext(PokemonContext);

  // TODO: Replace this to get the pokemon from PokemonContext

  return (
    <div className="ui six cards">
      {allPokemon
        ?.filter((pokemon) => {
          return pokemon.name.includes(pokemonSearch);
        })
        .map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            front={pokemon.front}
            back={pokemon.back}
            name={pokemon.name}
            hp={pokemon.hp}
          />
        ))}
    </div>
  );
};

export default PokemonCollection;
