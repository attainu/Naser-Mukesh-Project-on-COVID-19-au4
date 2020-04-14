import React from "react";
import {NavLink, Route, Switch } from "react-router-dom";
import CasesByCountry from "./components/CasesByCountry";
import IndiaStatistics from "./components/IndiaStatistics";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <a href="/"><img className="App-logo" alt="covid-19 tracker" src="/logo.png" /></a>
        <div className="App-Navbar">
              <NavLink exact className="Link" activeClassName="active-link" to="/">Home</NavLink>
              <NavLink exact className="Link" activeClassName="active-link" to="/india-statistics">Statistics in India</NavLink>
              <NavLink exact className="Link" activeClassName="active-link" to="/cases-by-country">Cases By Country</NavLink>
              <NavLink exact className="Link" activeClassName="active-link" to="/orders">Hospital Requirements</NavLink>
          </div>
      </div>
      <Switch>
        {/* <Route exact path="/" component={homepage} /> */}
        <Route exact path="/cases-by-country" component={CasesByCountry} />
        <Route exact path="/india-statistics" component={IndiaStatistics} />
      </Switch>
    </div>
  );
}

export default App;
