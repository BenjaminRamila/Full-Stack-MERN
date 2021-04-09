import React from "react";
import "./App.css";

import PersonCard from "./components/PersonCard";

const jane = {firstName:'Jane', lastName:'Doe', age:'45', hairColor:'Black'};
const John = {firstName:'John', lastName:'Smith', age:'88', hairColor:'Brown'};
const Millard = {firstName:'Millard', lastName:'Fillmore', age:'50', hairColor:'Brown'};
const Maria = {firstName:'Maria', lastName:'Smith', age:'62', hairColor:'Brown'};

function App() {
  return (
    <div className="App">
      
      <PersonCard someText={jane}/>
      <PersonCard someText={John}/>
      <PersonCard someText={Millard}/>
      <PersonCard someText={Maria}/>
    </div>
  );
}

export default App;
