import "../App.css";

import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import Axios from "axios";


const LoginPage = () => {
  const history = useHistory();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  
  const [LoginStatus, setLoginStatus] = useState("");



  const login = () => {

      Axios.post("http://localhost:3001/login", {
        username: username, 
        password: password
      }).then((response) => {
  
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        history.push("/student-list");
      }
    })
  }


  return (
    <div className="App">
      <div className="information">
        <h1>Login</h1>

        <label>Login:</label>
        <input
          type="text" placeholder="Enter login"
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />

        <label>Password:</label>
        <input
          type="password" placeholder="Enter password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />


        <button onClick={login}>Login</button>
        
        <p>{LoginStatus}</p>
      </div>
    </div>
  );
}

export default LoginPage;