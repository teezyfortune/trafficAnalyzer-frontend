import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import SignupPage from "./components/adminPages/adminSignUp/adminSignup";
import LoginPage from "./components/adminPages/adminLoginPage/adminLogin";
import AdminDashBoard from "./components/adminPages/adminDashBoard/AdminDashBoard";
import wardenDashBoard from "./components/wardenPages/wardenDashBoard/WardenDashBoard.jsx";
import WardenLoginPage from "./components/wardenPages/wardenLoginPage/wardenLogin";
import { ReportsPage } from './components/wardenPages/Reports/ReportsPage';
import { TestingPage } from './components/adminPages/Reports/testingPage';
import {GetReportPage} from './components/adminPages/Reports/getReportPage';
import {ReportDetails} from './components/adminPages/Reports/reportDetails';
import {WardenReports} from './components/wardenPages/Reports/wardenReports';
import {ViewReport} from './components/wardenPages/Reports/viewReports';


const App = () => (
  <Router>
    <Switch>
      <Route path="/adminSignUp" exact component={SignupPage} />
      <Route path="/send-report" exact component={ReportsPage} />
      <Route path="/admin/reports" exact component={GetReportPage} />
      <Route path="/warden-reports" exact component={WardenReports} />
      <Route path="/reports/:reportId" exact component={ReportDetails} />
      <Route path="/reports/warden/:reportId" exact component={ViewReport} />
      <Route path="/search" exact component={TestingPage} />
      <Route path="/adminLogin" exact component={LoginPage} />
      <Route path="/adminDashBoard" exact component={AdminDashBoard} />
      <Route path="/wardenDashboard" exact component={wardenDashBoard} />
      <Route path="/wardenLogin" exact component={WardenLoginPage} />
    </Switch>
  </Router>
);

export default App;
