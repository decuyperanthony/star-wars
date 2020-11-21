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
// import getAllSoldiers from '../utils/getAllSoldiers';

//* == component
import Login from './Login';
import HomePage from './HomePage';
import Soldier from './HomePage/SoldierDetails';
// const userToken = false;
// == auto connect

const App = () => {
  const userToken = JSON.parse(localStorage.getItem('userToken'));

  // React.useEffect(() => {
  //   if (userToken) {
  //     getAllSoldiers();
  //   }
  // }, [userToken]);
  // if (userToken) {
  //   getAllSoldiers();
  // }
  const { soldiers } = useSelector((state) => state);
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

        {soldierRouter}
      </Switch>

    </div>
  );
};

export default App;
