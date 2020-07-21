import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import SignupPage from "./components/adminPages/adminSignUp/adminSignup";
import LoginPage from "./components/adminPages/adminLoginPage/adminLogin";
import AdminDashBoard from "./components/adminPages/adminDashBoard/AdminDashBoard";
import wardenDashBoard from "./components/wardenPages/wardenDashBoard/WardenDashBoard.jsx";
import AddWarden from "./components/adminPages/addWarden";
import WardenLoginPage from "./components/wardenPages/wardenLoginPage/wardenLogin";
import { ReportsPage } from './components/adminPages/Reports/ReportsPage';
import { TestingPage } from './components/adminPages/Reports/testingPage';
import {GetReportPage} from './components/adminPages/Reports/getReportPage';
import {ReportDetails} from './components/adminPages/Reports/reportDetails';


const App = () => (
  <Router>
    <Switch>
      <Route path="/adminSignUp" exact component={SignupPage} />
      <Route path="/send-report" exact component={ReportsPage} />
      <Route path="/reports" exact component={GetReportPage} />
      <Route path="/reports/:reportId" exact component={ReportDetails} />
      <Route path="/search" exact component={TestingPage} />
      <Route path="/adminLogin" exact component={LoginPage} />
      <Route path="/adminDashBoard" exact component={AdminDashBoard} />
      <Route path="/addWarden" exact component={AddWarden} />
      <Route path="/wardenDashboard" exact component={wardenDashBoard} />
      <Route path="/wardenLogin" exact component={WardenLoginPage} />
    </Switch>
  </Router>
);

export default App;
