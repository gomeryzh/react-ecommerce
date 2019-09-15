import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignOnAndSignOutPage from "./pages/sign-in-and-sign-out/sign-in-and-sign-out.components";
import Header from "./components/header/header.component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignOnAndSignOutPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
