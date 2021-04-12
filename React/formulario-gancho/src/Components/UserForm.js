import React, { useState } from "react";

const UserForm = (props) => {
  const { inputs, setInputs } = props;
  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form>
      <div className="formBox">
        <label>First Name </label>
        <input type="text" name="firstName" onChange={onChange} />
      </div>
      <div className="formBox">
        <label>Last Name </label>
        <input type="text" name="lastName" onChange={onChange} />
      </div>
      <div className="formBox">
        <label>Email Address </label>
        <input type="text" name="email" onChange={onChange} />
      </div>
      <div className="formBox">
        <label>Password </label>
        <input type="password" name="password" onChange={onChange} />
      </div>
      <div className="formBox">
        <label>Confirm Password </label>
        <input type="password" name="confirmPassword" onChange={onChange} />
      </div>
    </form>
  );
};

export default UserForm;
