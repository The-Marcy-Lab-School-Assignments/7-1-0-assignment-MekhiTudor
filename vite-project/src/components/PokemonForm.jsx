import handleFetch from "../utils/handleFetch";
import { useState } from "react";
import { useContext } from "react";
import PokemonContext from "../context/PokemonContext";
const PokemonForm = () => {
  const [name, setName] = useState("");
  const [hp, setHp] = useState("");
  const [frontImg, setFrontImg] = useState("");
  const [backImg, setBackImg] = useState("");

  const handleSubmit = (e) => {
    const { setAllPokemon, allPokemon } = useContext(PokemonContext);
    e.preventDefault();
    const exampleOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        hp: hp,
        front: frontImg,
        back: backImg,
      }),
    };
    const url = `http://localhost:4000/pokemon`;
    const response = handleFetch(url, exampleOptions);
    console.log({ name, hp, frontImg, backImg });
    console.log("test");
  };
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="four fields" widths="equal">
          <div className="field ui fluid">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="field ui fluid">
            <label>HP</label>
            <input
              type="text"
              name="hp"
              placeholder="HP"
              value={hp}
              onChange={(e) => setHp(e.target.value)}
            />
          </div>
          <div className="field ui fluid">
            <label>Front Image URL</label>
            <input
              type="text"
              name="front"
              placeholder="url"
              value={frontImg}
              onChange={(e) => setFrontImg(e.target.value)}
            />
          </div>
          <div className="field ui fluid">
            <label>Back Image URL</label>
            <input
              type="text"
              name="back"
              placeholder="url"
              value={backImg}
              onChange={(e) => setBackImg(e.target.value)}
            />
          </div>
        </div>
        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PokemonForm;
