import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Landing, Questions, Home, Profile, Events, News } from "./screens";
import Store from "./store.json";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Switch>
          <Route path="/news">
            <News store={Store} />
          </Route>
          <Route path="/events">
            <Events store={Store} />
          </Route>
          <Route path="/profile">
            <Profile store={Store} />
          </Route>
          <Route path="/home">
            <Home store={Store} />
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
