import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import SignupPage from "./components/adminPages/adminSignUp/adminSignup";
import LoginPage from "./components/adminPages/adminLoginPage/adminLogin";
import AdminDashBoard from "./components/adminPages/adminDashBoard/AdminDashBoard";
import wardenDashBoard from "./components/wardenPages/wardenDashBoard/WardenDashBoard.jsx";
import AddWarden from "./components/DashBoard/addWarden";
import WardenLoginPage from "./components/wardenPages/wardenLoginPage/wardenLogin";

const App = () => (
  <Router>
    <Switch>
      <Route path="/adminSignUp" exact component={SignupPage} />
      <Route path="/adminLogin" exact component={LoginPage} />
      <Route path="/adminDashBoard" exact component={AdminDashBoard} />
      <Route path="/addWarden" exact component={AddWarden} />
      <Route path="/wardenDashboard" exact component={wardenDashBoard} />
      <Route path="/wardenLogin" exact component={WardenLoginPage} />
    </Switch>
  </Router>
);

export default App;
