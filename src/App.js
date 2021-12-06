import './App.css';
import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component';
import SignInSignOut from './pages/sign-in-sign-out/sign-in-sign-out.component';
import { Route, Routes } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/shop' element={<ShopPage />} />
          <Route exact path='/sign-in' element={<SignInSignOut />} />
        </Routes>
      </div>
    );
  }
}

export default App;
