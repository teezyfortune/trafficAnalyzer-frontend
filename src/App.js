import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import SignupPage from './components/adminPages/adminSignup';
import AdminDashBoard from './components/DashBoard/Admindashboard';

const  App = () => (
      <Router>
    <Switch>
        <Route path="/signup"  exact component={SignupPage} />
        <Route path="/admin"  exact component={AdminDashBoard} />

        </Switch>
      </Router>
  
  );


export default App;
