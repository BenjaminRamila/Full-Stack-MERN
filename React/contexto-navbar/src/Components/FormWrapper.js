import React, { useState } from "react";

const FormWrapper = (props) => {
  

  return (
    <div className="formWrap">
      <form onChange={props.handleOnChange}>
        <label>Your Name: </label>
        <input type="text" name='name'></input>
      </form>
    </div>
  );
};

export default FormWrapper;
