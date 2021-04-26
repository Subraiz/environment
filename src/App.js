import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Landing, Questions, Home, Profile, Events, News } from "./screens";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Switch>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/questions">
            <Questions />
          </Route>
          <Route path="/" exact>
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
