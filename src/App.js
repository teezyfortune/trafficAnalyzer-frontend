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
import { ViewReport } from './components/wardenPages/Reports/viewReports';
import { EditReport } from './components/wardenPages/Reports/editeports';
import { FetchWardenPage } from './components/adminPages/wardens/wardens';
import { WardenDetails} from './components/adminPages/wardens/Details';
import {HomePage} from './components/HomePage/HomePage';
import AllWarden from './components/adminPages/ViewAllWarden/allWarden';
import SingleWarden from './components/adminPages/ViewSingleWarden/singleWarden';




const App = () => (
  <Router>
    <Switch>
    <Route path="/" exact component={HomePage} />
      <Route path="/adminSignUp" exact component={SignupPage} />
      <Route path="/send-report" exact component={ReportsPage} />
      <Route path="/admin/reports" exact component={GetReportPage} />
      <Route path="/warden/reports" exact component={WardenReports} />
      <Route path="/warden/edit-report" exact component={EditReport} />
      <Route path="/reports/:reportId" exact component={ReportDetails} />
      <Route path="/warden/report/:reportId" exact component={ViewReport} />
      <Route path="/search" exact component={TestingPage} />
      <Route path="/adminLogin" exact component={LoginPage} />
      <Route path="/adminDashBoard" exact component={AdminDashBoard} />
      <Route path="/wardenDashboard" exact component={wardenDashBoard} />
      <Route path="/admin/wardens" exact component={FetchWardenPage} />
      <Route path="/admin/wardens/:wardenId" exact component={WardenDetails} />
      <Route path="/wardenLogin" exact component={WardenLoginPage} />
      <Route path="/admin/allWarden" exact component={AllWarden} />
      <Route path="/singleWarden" exact component={SingleWarden} />
    </Switch>
  </Router>
);

export default App;
