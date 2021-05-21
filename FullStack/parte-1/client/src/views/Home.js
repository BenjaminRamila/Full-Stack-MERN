import React from "react";
import Formulario from '../components/Formulario'
import ListaDeProductos from "../components/ListaDeProductos";
const Home = (props) => {
  return (<div>
      <Formulario/>
      <hr/>
      <ListaDeProductos/>
  </div>);
};

export default Home;
