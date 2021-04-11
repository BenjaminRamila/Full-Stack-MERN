import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Main from "./Components/Main";

function App() {
  return (
    <div className="app bg-light">
              
      <Header />
            
      <div className="container">
        <div className="row">
          <Navigation />
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
