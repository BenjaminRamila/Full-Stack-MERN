import "./App.css";
import NameCard from "./components/NameCard";

const jane = {
  firstName: "Jane",
  lastName: "Doe",
  age: 45,
  hairColor: "Black",
};
const John = {
  firstName: "John",
  lastName: "Smith",
  age: 88,
  hairColor: "Brown",
};
const Millard = {
  firstName: "Millard",
  lastName: "Fillmore",
  age: 50,
  hairColor: "Brown",
};
const Maria = {
  firstName: "Maria",
  lastName: "Smith",
  age: 62,
  hairColor: "Brown",
};

function App() {
  return (
    <div className="App">
      <NameCard someText={jane} />
      <NameCard someText={John} />
      <NameCard someText={Millard} />
      <NameCard someText={Maria} />
    </div>
  );
}

export default App;
