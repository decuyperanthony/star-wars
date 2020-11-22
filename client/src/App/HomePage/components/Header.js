import React from 'react';
import { useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import { Button } from '@material-ui/core';

//* === ACTION ===
import { enterLoginPage } from '../../../store/action/route';
import { RESET, DISCONNECT } from '../../../store/action/auth';

import logo from '../../../public/img/logo.png';

const useStyles = makeStyles(() => ({
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '1.5em',
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: '4em',
  },

}));

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const handleLogout = () => {
    dispatch({ type: RESET });
    dispatch({ type: DISCONNECT });
    dispatch(enterLoginPage(history));
  };
  return (
    <div className={classes.headerContainer}>
      <div className={classes.titleContainer}>
        <img
          className={classes.logo}
          src={logo}
          alt="logo"
        />
        <h1>Star wars</h1>
      </div>
      <Button
        onClick={handleLogout}
        color="secondary"
      >
        logout
      </Button>
    </div>
  );
};

export default Header;
