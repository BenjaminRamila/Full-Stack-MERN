import React  from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import ProductView from "./views/ProductView";
import Navigation from './components/Navigation'

function App() {
  return (
    <>
      <Router>
        <Navigation/>
        
        <Switch>
          <Route path="/:productId" component={ProductView} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
