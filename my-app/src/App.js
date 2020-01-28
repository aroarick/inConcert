import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import Navigation from "./components/Navigation/Navigation.js";
import Home from "./components/Home/home";
// import BlogSubmit from "./components/Blog/blogSubmit";
// import Home from "./components/Home/Home.js";

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
