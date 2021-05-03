import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Landing,
  Questions,
  Home,
  Profile,
  Events,
  News,
  Create
} from "./screens";
import Data from "./store.json";

function App() {
  const [Store, updateStore] = useState(Data);

  const addPost = (post) => {
    let updatedStore = Store;
    updatedStore.posts.push(post);
    updateStore(updatedStore);
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Switch>
          <Route path="/create">
            <Create store={Store} addPost={addPost} />
          </Route>
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
