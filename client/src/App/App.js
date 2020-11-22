import React from 'react';
import { useSelector } from 'react-redux';
import slugify from 'slugify';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import './App.css';

//* == component
import Login from './Login';
import HomePage from './HomePage';
import Soldier from './HomePage/components/SoldierDetails';

const App = () => {
  const { soldiers } = useSelector((state) => state);
  const userToken = JSON.parse(localStorage.getItem('userToken'));

  let soldierRouter;
  if (soldiers) {
    soldierRouter = soldiers.map((soldier) => (
      <Route
        key={`${soldier.name}`}
        exact
        path={`/${slugify(soldier.name).toLowerCase()}`}
        render={() => {
          if (!userToken) {
            return <Redirect to="/login" />;
          }
          return <Soldier data={soldier} />;
        }}
      />
    ));
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
        {/* ROUTE SOLDIER DETAILS */}
        {soldierRouter}
      </Switch>
    </div>
  );
};

export default App;
