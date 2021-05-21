import React, { useState } from "react";
import postNewForm from "../actions/postNewForm";

const Formulario = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target.closest("form");
    const formData = new FormData(form);
    const data = {};
    for (let [key, value] of formData.entries()) data[key] = value;
    const { success } = await postNewForm(data);
    if (success) {
      form.querySelectorAll("input").forEach((input) => (input.value = ""));
      alert("Success");
      setHayError(false);
      setDidAttempSubmit(true);
    } else {alert("Something went wrong");
    setHayError(true);
    setDidAttempSubmit(true);}
  };

  const [hayError, setHayError] = useState(false);
  const [didAttempSubmit, setDidAttempSubmit] = useState(false);

  const message =
  didAttempSubmit && hayError ? (
      <div>Oops, there was an error</div>
  ) : didAttempSubmit ? (
      <div>Success!</div>
  ) : (
      ''
  );

  return (
    <>
      {message}
      <form className="new-product" onSubmit={onSubmit}>
        <label>
          Title<br/>
          <input name="title" />
        </label>
        <label>
          Price<br/>
          <input name="price" type="number" />
        </label>
        <label>
          Description<br/>
          <input name="description" />
        </label>
        <button>Create</button>
      </form>
    </>
  );
};

export default Formulario;
