import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import Navigation from "./components/Navigation/Navigation.js";
import Home from "./components/Home/home";
import ArtistPage from "./components/ArtistPage/artistPage";

function App() {
  return (
    <div>
      <Router>
        {/* <Navigation></Navigation> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/artistPage" component={ArtistPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
