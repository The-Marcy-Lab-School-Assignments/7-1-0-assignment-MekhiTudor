// TODO: This component should render a single pokemon's stats and image.
import { useState } from "react";

const PokemonCard = ({ key, front, back, name, hp }) => {
  const [frontBack, setFrontBack] = useState(front);
  const changeSide = () => {
    setFrontBack((c) => (c === front ? back : front));
  };
  return (
    <div key={key} className="ui card">
      <div>
        <div className="image">
          <img alt="pokemon name" src={frontBack} onClick={changeSide} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
