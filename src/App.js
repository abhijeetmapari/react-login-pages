import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from './container/login'
import LoginPage from './container/login2'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
            <Link to="/" className="navbar-brand">Various Login Forms</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">

                <li className="navbar-item">
                  <Link to="/login1" className="nav-link">Login</Link>
                </li>

                <li className="navbar-item">
                  <Link to="/login2" className="nav-link">Login 2</Link>
                </li>
                
              </ul>
            </div>
          </nav>

          
          <Route path="/login1" component={Login} />
          <Route path="/login2" component={LoginPage} />
        </div>
        
      </Router>
    );
  }
}

export default App;

