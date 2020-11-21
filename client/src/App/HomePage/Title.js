import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import logo from '../../public/img/logo.png';

const useStyles = makeStyles(() => ({
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: '4em',
  },
  //   card: {
  //     display: 'flex',
  //     [theme.breakpoints.down('xs')]: {
  //       width: '250px',
  //     },
  //   },

}));

const Title = () => {
  const classes = useStyles();
  return (
    <div className={classes.titleContainer}>
      <img
        className={classes.logo}
        src={logo}
        alt="logo"
      />
      <h1>Star wars</h1>
    </div>
  );
};

export default Title;
