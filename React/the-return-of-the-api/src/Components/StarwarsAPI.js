import React, { useState, useEffect } from "react";

const StarwarsAPI = (props) => {
  const [apiCat, setApiCat] = useState({});
  const [formData, setFormData] = useState({ category: "people", id: "0" });
  const [searchResult, setSearchResult] = useState({});
  const [displayResult, setDisplayResult] = useState("");
  const [isLoaded, setLoaded] = useState(false);
  const [responseStatus, setResponseStatus] = useState("");
  const [homeWorld, setHomeWorld] = useState("");

  useEffect(() => {
    fetch(`https://swapi.dev/api/`)
      .then((response) => response.json())
      .then((data) => setApiCat(data));
  }, []);

  const catKeys = Object.keys(apiCat);
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(apiCat[formData.category] + [formData.id])
      .then((response) => {
        setLoaded(true);
        setResponseStatus(response.status);
        return response.json();
      })
      .then((data) => {
        setSearchResult(data);
        setDisplayResult(formData.category);
      });

    fetch(searchResult.homeworld)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setHomeWorld(data);
      });
  };

  const drawResult = () => {
    if (!isLoaded) {
      return null;
    }
    if (responseStatus === 404) {
      return (
        <div>
          <h3>These are not the droids you are looking for...</h3>
          <img
            src="https://media4.giphy.com/media/l2JJKs3I69qfaQleE/giphy.gif"
            alt="Obi Wan Kenobi"
          />
          <p>(try searching something else)</p>
        </div>
      );
    }

    if (displayResult === "people") {
      return (
        <div>
          {" "}
          <h3>{searchResult.name}</h3> <p>Height: {searchResult.height}</p>
          <p>Hair color: {searchResult.hair_color}</p>
          <p>Birthday Year: {searchResult.birth_year}</p>
          <p>Homeworld: {homeWorld.name}</p>
        </div>
      );
    } else if (displayResult === "planets") {
      return (
        <div>
          {" "}
          <h3>{searchResult.name}</h3>
          <p>Population: {searchResult.population}</p>
          <p>Diameter: {searchResult.diameter}</p>
          <p>Terrain: {searchResult.terrain}</p>
        </div>
      );
    } else if (displayResult === "films") {
      return (
        <div>
          {" "}
          <h3>{searchResult.title}</h3>
          <p>Episode {searchResult.episode_id}</p>
          <p>Director: {searchResult.director}</p>
          <p>Release Date: {searchResult.release_date}</p>
        </div>
      );
    } else if (displayResult === "species") {
      return (
        <div>
          {" "}
          <h3>{searchResult.name}</h3>
          <p>Average Lifespan: {searchResult.average_lifespan}</p>
          <p>Language: {searchResult.language}</p>
          <p>Skin Colors: {searchResult.skin_colors}</p>
        </div>
      );
    } else if (displayResult === "vehicles") {
      return (
        <div>
          {" "}
          <h3>{searchResult.name}</h3>
          <p>Model: {searchResult.model}</p>
          <p>Manufacturer: {searchResult.manufacturer}</p>
          <p>Carco Capacity: {searchResult.cargo_capacity}</p>
          <p>Crew: {searchResult.crew}</p>
        </div>
      );
    } else if (displayResult === "starships") {
      return (
        <div>
          {" "}
          <h3>{searchResult.name}</h3>
          <p>Model: {searchResult.model}</p>
          <p>Manufacturer: {searchResult.manufacturer}</p>
          <p>Carco Capacity: {searchResult.cargo_capacity}</p>
          <p>Crew: {searchResult.crew}</p>
        </div>
      );
    }
  };

  return (
    <div className="swapi">
      <img id="sw-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png" alt="starWars logo"/>
      <form onSubmit={handleSubmit} onChange={handleOnChange}>
        <select id="categories" name="category">
          {catKeys.map((value, index) => {
            return (
              <option value={value} key={index}>
                {value}
              </option>
            );
          })}
        </select>
        <label>id:</label>
        <input type="text" placeholder="id" name="id" />
        <input type="submit" value="submit"></input>{" "}
      </form>

      <div id="div-result">{drawResult()}</div>
      
    </div>
  );
};

export default StarwarsAPI;
