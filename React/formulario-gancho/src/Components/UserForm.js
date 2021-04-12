import React, { useState } from "react";

const UserForm = (props) => {
  const { inputs, setInputs } = props;

  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleFirstName = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    setFirstName(e.target.value);
    if (e.target.value.length < 1) {
      setFirstNameError(" is required!");
    } else if (e.target.value.length < 3) {
      setFirstNameError(" must be 3 characters or longer!");
    } else if (e.target.value.length > 2) {
      setFirstNameError("");
    }
  };

  const handleLastName = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    setLastName(e.target.value);
    if (e.target.value.length < 1) {
      setLastNameError(" is required!");
    } else if (e.target.value.length < 3) {
      setLastNameError(" must be 3 characters or longer!");
    } else if (e.target.value.length > 2) {
      setLastNameError("");
    }
  };

  const handleEmail = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    setEmail(e.target.value);
    if (e.target.value.length < 1) {
      setEmailError(" is required!");
    } else if (e.target.value.length < 3) {
      setEmailError(" must be 3 characters or longer!");
    } else if (e.target.value.length > 2) {
      setEmailError("");
    }
  };

  const handlePassword = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    setPassword(e.target.value);
    if (e.target.value.length < 1) {
      setPasswordError(" is required!");
    } else if (e.target.value.length < 8) {
      setPasswordError(" must be 8 characters or longer!");
    } else if (e.target.value.length > 2) {
      setPasswordError("");
    }
  };

  const handleConfirmPassword = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setConfirmPasswordError(" does not match!");
  
    } else {
      setConfirmPasswordError("");
    }

  };

  return (
    <form>
      <div className="formBox">
        <label>First Name </label>
        <input type="text" name="firstName" onChange={handleFirstName} />
        {firstNameError ? (
          <p style={{ color: "red" }}>First Name{firstNameError}</p>
        ) : (
          ""
        )}
      </div>
      <div className="formBox">
        <label>Last Name </label>
        <input type="text" name="lastName" onChange={handleLastName} />
        {lastNameError ? (
          <p style={{ color: "red" }}>Last Name{lastNameError}</p>
        ) : (
          ""
        )}
      </div>
      <div className="formBox">
        <label>Email Address </label>
        <input type="text" name="email" onChange={handleEmail} />
        {emailError ? (
          <p style={{ color: "red" }}>Email{emailError}</p>
        ) : (
          ""
        )}
      </div>
      <div className="formBox">
        <label>Password </label>
        <input type="password" name="password" onChange={handlePassword} />
        {passwordError ? (
          <p style={{ color: "red" }}>Password{passwordError}</p>
        ) : (
          ""
        )}
      </div>
      <div className="formBox">
        <label>Confirm Password </label>
        <input type="password" name="confirmPassword" onChange={handleConfirmPassword} />
        {confirmPasswordError ? (
          <p style={{ color: "red" }}>Password{confirmPasswordError}</p>
        ) : (
          ""
        )}
      </div>
    </form>
  );
};

export default UserForm;
