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

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>

      {/* <Route
          exact
          path={`${path}/profile`}
          render={(props) => {
            if (!userToken) {
              return <Redirect to="/" />;
            }
            // eslint-disable-next-line react/jsx-props-no-spreading
            return <Profile data={user} />;
          }}
        /> */}

      <Route path="/">
        <HomePage />
      </Route>
    </Switch>

  </div>
);

export default App;
