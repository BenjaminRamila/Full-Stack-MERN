import React, { useEffect, useState } from "react";
import axios from "axios";

const PokeApi = (props) => {
  const [pokemon, setPokemon] = useState([]);
  const [num, setNum] = useState(0);
  const [offsetNum, setOffsetNum] = useState(0);
  

  const fetchPokemon = () => {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/?limit=${num}&offset=${offsetNum}`
      )
      .then((response) => {
        setPokemon(response.data.results);
      });
  }

  const handleNumPokemon = (e) => {
    setNum(e.target.value);
  };
  const handleOffset = (e) => {
    setOffsetNum(e.target.value);
  };

  return (
    <div>
      <h1>There are currently 898 pokemons discovered!</h1>
      <p>How many pokemons you'll try to fetch today?</p>
      <input
        type="number"
        placeholder="number of pokemons"
        onChange={handleNumPokemon}
      />

      <button onClick={fetchPokemon} >Fetch Pokemon</button>

      <input
        type="number"
        placeholder="ignore this much pokemon"
        onChange={handleOffset}
      />

      <div>
        {pokemon.map((pokemon, index) => {
          return <div key={index}>{pokemon.name}</div>;
        })}
      </div>
    </div>
  );
};

export default PokeApi;
