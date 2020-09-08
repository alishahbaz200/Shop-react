import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homePage/homePage.Component";
import ShopPage from "./pages/shopPage/shop.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop"  component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
