import React, { useState } from "react";
import "./App.css";
import FormDisplay from "./Components/FormDisplay";
import UserForm from "./Components/UserForm";

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <div className="App">
      <UserForm inputs={state} setInputs={setState} />
      <FormDisplay data={state} />
    </div>
  );
}

export default App;
