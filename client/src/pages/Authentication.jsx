import React from "react";
import { Link } from "react-router-dom";
import "../App.css";


const AuthenticationPage = () => {
  return (
    <div className="App">
      
      <div className="information">
        <h1>Authentication Form</h1>
      
        <div class="divide">   
          <Link to="/registration-page">Registration</Link>
          <Link to="/login-page">Login</Link>
        </div>
      </div>
      
    </div>
    
  )
}

export default AuthenticationPage;
