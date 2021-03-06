import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/Home";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Step3 from "./pages/Step3";
import Step4 from "./pages/Step4";
import Step5 from "./pages/Step5";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <nav>
              <ul className="navigation">
                <li>
                  <NavLink activeClassName="active" to="/step-1">
                    Step 1
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/step-2">
                    Step 2
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/step-3">
                    Step 3
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/step-4">
                    Step 4
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/step-5">
                    Step 5
                  </NavLink>
                </li>
              </ul>
            </nav>
            <Route path="/step-1" component={Step1} />
            <Route path="/step-2" component={Step2} />
            <Route path="/step-3" component={Step3} />
            <Route path="/step-4" component={Step4} />
            <Route path="/step-5" component={Step5} />
            <Route exact path="/" component={HomePage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
