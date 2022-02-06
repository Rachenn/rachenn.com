/*App.js*/
import React, { Component } from "react";
import "./App.css";
//Import all needed Component for this tutorial
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import MainPage from "./pages"; ///< index.jsx will be automatically imported 
import UsersPage from "./pages/users";

class App extends Component {
  render() {
    return (
      <Router>
       {/*All our Routes goes here!*/}
       <Route path="/" component={} />
       <Route exact path="/" component={MainPage} />
       <Route exact path="/users" component={UsersPage} />
      </Router>
    );
  }
}



export default App;