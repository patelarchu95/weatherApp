import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./component/weatherComponent";
import Home from "./component/homeComponent";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
           <Weather/>
        </Route>
        <Route exact path="/home" >
           <Home/>
        </Route>
      </Switch>
    </Router>
  );
};
export default App;