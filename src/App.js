import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import {selectCurrentUser} from './redux/user/user.selectors';
import {createStructuredSelector} from "reselect";
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Checkout from './pages/checkout/checkout.component';
import SignOnAndSignOutPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.components';
import Header from './components/header/header.component';


class App extends Component {
  constructor () {
    super();

    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //
    //   if(userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);
    //
    //     userRef.onSnapshot(snapshot => {
    //       setCurrentUser({
    //         id: snapshot.id,
    //           ...snapshot.data()
    //         });
    //     });
    //   } else {
    //     setCurrentUser(userAuth);
    //   }
    // })
  }

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={Checkout} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignOnAndSignOutPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(App);
