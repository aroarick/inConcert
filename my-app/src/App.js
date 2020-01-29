import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import Navigation from "./components/Navigation/Navigation.js";
import Home from "./components/Home/home";

function App() {
  return (
    <div>
      <Router>
        {/* <Navigation></Navigation> */}
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
