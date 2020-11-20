import React from 'react';

import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import './App.css';

//* == component
import Login from './Login';
import HomePage from './HomePage';

const userToken = false;

const App = () => (
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

export default App;
