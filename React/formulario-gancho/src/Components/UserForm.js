import React, { useState } from "react";

const UserForm = (props) => {
  const { inputs, setInputs } = props;

  const handleOnChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <form onChange={handleOnChange}>
      <div className="formBox">
        <label>First Name </label>
        <input type="text" name="firstName" />
        {inputs.firstName.length < 3 && inputs.firstName.length !== 0 ? (
          <p style={{ color: "red" }}>
            First Name must be longer than 3 characters
          </p>
        ) : (
          ""
        )}
      </div>
      <div className="formBox">
        <label>Last Name </label>
        <input type="text" name="lastName" />
        {inputs.lastName.length < 3 && inputs.lastName.length !== 0 ? (
          <p style={{ color: "red" }}>
            Last Name must be longer than 3 characters
          </p>
        ) : (
          ""
        )}
      </div>
      <div className="formBox">
        <label>Email Address </label>
        <input type="text" name="email" />
        {inputs.email.length < 3 && inputs.email.length !== 0 ? (
          <p style={{ color: "red" }}>Email must be longer than 3 characters</p>
        ) : (
          ""
        )}
      </div>
      <div className="formBox">
        <label>Password </label>
        <input type="password" name="password" />
        {inputs.password.length < 3 && inputs.password.length !== 0 ? (
          <p style={{ color: "red" }}>
            Your password must be at least 8 characters long
          </p>
        ) : (
          ""
        )}
      </div>
      <div className="formBox">
        <label>Confirm Password </label>
        <input type="password" name="confirmPassword" />
        {inputs.confirmPassword !== inputs.password &&
        inputs.confirmPassword.length !== 0 ? (
          <p style={{ color: "red" }}>Your password doesn't match!</p>
        ) : (
          ""
        )}
      </div>
    </form>
  );
};

export default UserForm;
