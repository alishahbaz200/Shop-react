import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homePage/homePage.Component";

const Hats =() =>(
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/hats"  component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
