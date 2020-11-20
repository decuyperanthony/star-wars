import React from 'react';

import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import './App.css';

//* === method
import getAllSoldiers from '../utils/getAllSoldiers';

//* == component
import Login from './Login';
import HomePage from './HomePage';

// const userToken = false;

const App = () => {
  const userToken = JSON.parse(localStorage.getItem('userToken'));
  // == auto connect
  if (userToken) {
    getAllSoldiers();
  }
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>

        <Route
          exact
          path="/"
          render={() => {
            if (!userToken) {
              return <Redirect to="/login" />;
            }
            return <HomePage />;
          }}
        />
      </Switch>

    </div>
  );
};

export default App;
