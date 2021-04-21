import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Number from "./components/number";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            {" "}
            <Home />
          </Route>

          <Route path="/home" exact>
            {" "}
            <Home />
          </Route>
          <Route path="/:id/:color?/:bgcolor?">
            <Number />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
