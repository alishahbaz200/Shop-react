import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';

import HomePage from './pages/homePage/homePage.Component';
import ShopPage from "./pages/shopPage/shop.component";
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;