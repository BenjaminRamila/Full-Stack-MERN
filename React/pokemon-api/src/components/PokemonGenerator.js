import React, { useEffect, useState } from "react";



const PokemonGenerator = (props) => {
  const [pokemon, setPokemon] = useState([]);
  const [num, setNum] = useState(3);
  const [offsetNum, setOffsetNum] = useState(0);

  const fetchPokemon = (num) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${num}&offset=${offsetNum}`)
      .then((response) => response.json())
      .then((response) => setPokemon(response.results));
  };

  const handleNumPokemon = (e) =>{
      setNum(e.target.value);
  }
  const handleOffset = (e) =>{
      setOffsetNum(e.target.value);
  }

  return (
    <div>
        <h1>There are currently 898 pokemons discovered!</h1>
        <p>How many pokemons you'll try to fetch today?</p>
      <input type="number" placeholder="number of pokemons" onChange={handleNumPokemon}/>

      <button onClick={fetchPokemon(num)}>Fetch Pokemon</button>
      
      <input type="number" placeholder="ignore this much pokemon" onChange={handleOffset}/>
      <div>
        {pokemon.length > 0 &&
          pokemon.map((pokemon, index) => {
            return <div key={index}>{pokemon.name}</div>;
          })}
      </div>
    </div>
  );
};
export default PokemonGenerator;
