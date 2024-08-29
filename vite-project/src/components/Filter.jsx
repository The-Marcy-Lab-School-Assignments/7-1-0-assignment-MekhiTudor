// TODO: Make this a controlled component. On each stroke of the key, it should filter the displayed pokemon
import { useContext } from "react";
import PokemonProvider from "../context/PokemonProvider";
import PokemonContext from "../context/PokemonContext";
const Filter = () => {
  const { setPokemonSearch, pokemonSearch } = useContext(PokemonContext);
  console.log(pokemonSearch);
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          className="prompt"
          placeholder="Search by Name..."
          value={pokemonSearch}
          onChange={(e) => setPokemonSearch(e.target.value)}
        />
        <i className="search icon" />
      </div>
    </div>
  );
};

export default Filter;
