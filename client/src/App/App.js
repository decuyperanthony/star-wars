import React from 'react';

import {
  Route,
  Switch,
  Redirect,
  useRouteMatch,
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
        render={(props) => {
          if (!userToken) {
            return <Redirect to="/login" />;
          }
          // eslint-disable-next-line react/jsx-props-no-spreading
          return <HomePage />;
        }}
      />

      {/* <Route path="/">
        <HomePage />
      </Route> */}
    </Switch>

  </div>
);

export default App;
