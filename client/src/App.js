import "./App.css";

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

import AuthenticationPagePage from "./pages/Authentication";
import NotFoundPage from "./pages/404";
import RegistrationPage from "./pages/registration";
import LoginPage from "./pages/login";

import StudentList from "./pages/student-list";
import AddStudentPage from "./pages/add-student";


import { Component } from "react";

class App extends Component {
    render() {
      return <Router>
          <Switch>
              <Route exact path="/" component={AuthenticationPagePage} />
              <Route exact path="/404" component={NotFoundPage} />

              <Route exact path="/registration-page" component={RegistrationPage}/>
              <Route exact path="/login-page" component={LoginPage}/>
              <Route exact path="/student-list" component={StudentList}/>
              <Route exact path="/add-student" component={AddStudentPage}/>

              <Redirect to="/404" />
          </Switch>
      </Router>
    }

}


export default App;

