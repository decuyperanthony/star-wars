import React from 'react';
import { useSelector } from 'react-redux';
import slugify from 'slugify';
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
import Soldier from './HomePage/Card';
// const userToken = false;
// == auto connect
const userToken = JSON.parse(localStorage.getItem('userToken'));

if (userToken) {
  getAllSoldiers();
}
const App = () => {
  const { soldiers } = useSelector((state) => state);
  // console.log('soldiers APP', soldiers);
  const soldiersData = soldiers.results;
  console.log('soldiersData', soldiersData);
  let soldierRouter;
  if (soldiersData) {
    soldierRouter = soldiersData.map((soldier) => {
      console.log(slugify(soldier.name));
      return (
        <Route
          key={`${soldier.name}bonjour`}
          exact
          path={`/${slugify(soldier.name)}`}
          render={(props) => {
            console.log('props', props);
            if (!userToken) {
              return <Redirect to="/login" />;
            }
            return <Soldier data={soldier} />;
          }}
        />
      );
    });
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

        {soldierRouter}
      </Switch>

    </div>
  );
};

export default App;
