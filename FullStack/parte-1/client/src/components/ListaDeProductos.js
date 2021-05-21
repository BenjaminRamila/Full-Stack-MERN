import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getAllProducts from "../actions/getAllProducts";
import DeleteButton from "./DeleteButton";

const ListaDeProductos = () => {
  const [productos, setProductos] = useState([]);
  const [willUpdateList, setWillUpdateList] = useState(0);
  useEffect(() => {
    // getAllProducts().then(({ success, data }) => {
    //   if (success) setProductos(data);
    // });
    const _getAllProducts = async () => {
      const { success, data } = await getAllProducts();
      if (success) setProductos(data);
    };
    _getAllProducts();
  }, [willUpdateList]);
  const lista = productos.map(({ title, _id }) => (
    <li className="list-item" key={_id}>
      <Link to={"/" + _id}>{title}</Link>
      <DeleteButton
        id={_id}
        title={title}
        onDelete={() => setWillUpdateList((num) => ++num)}
      />
    </li>
  ));

  return (
    <div>
      <section className="lista-de-productos">
        <h2>All Products</h2>
        <ul>{lista}</ul>
      </section>
    </div>
  );
};

export default ListaDeProductos;
