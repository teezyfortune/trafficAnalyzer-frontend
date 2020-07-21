import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import SignupPage from './components/adminPages/adminSignup';
import LoginPage from './components/adminPages/adminLogin';
import AdminDashBoard from './components/DashBoard/AdminDashBoard';
import wardenDashBoard from './components/DashBoard/WardenDashBoard';
import AddWarden from './components/DashBoard/addWarden';
import { ReportsPage } from './components/Reports/ReportsPage';
import {GetReportPage} from './components/DashBoard/getReportPage';
import { getPlaces } from '../src/actions/report';


const App = () => (
      <Router>
    <Switch>
      <Route path="/" exact component={SignupPage} />
      <Route path="/send-report" exact component={ReportsPage} />
      <Route path="/reports" exact component={GetReportPage} />
      <Route path="/signup" exact component={SignupPage} />
      <Route path="/addWarden" exact component={AddWarden} />
      <Route path="/login"  exact component={LoginPage} />
      <Route path="/adminDashboard"  exact component={AdminDashBoard} />
      <Route path="/wardenDashboard" exact component={wardenDashBoard} />
    </Switch>
      </Router>
  
  );


export default App;
