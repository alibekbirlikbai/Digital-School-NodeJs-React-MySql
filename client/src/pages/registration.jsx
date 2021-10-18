import "../App.css";

import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Axios from "axios";


const RegistrationPage = () => {
  const [usernameReg, setUserNameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg, 
      password: passwordReg
    }).then((response) => {
      console.log(response);
    })
  }

  return (
    <div className="App">
      <div className="information">
        <h1>Registration</h1>

        <label>Login:</label>
        <input
          type="text" placeholder="Enter login"
          onChange={(event) => {
            setUserNameReg(event.target.value);
          }}
        />

        <label>Password:</label>
        <input
          type="password" placeholder="Enter password"
          onChange={(event) => {
            setPasswordReg(event.target.value);
          }}
        />


        <Link onClick={register} to="/student-list"><button>Registration</button></Link>
      </div>

    </div>
  );
}

export default RegistrationPage;
