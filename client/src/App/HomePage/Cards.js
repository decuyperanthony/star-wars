import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
//   card: {
//     display: 'flex',
//     [theme.breakpoints.down('xs')]: {
//       width: '250px',
//     },
//   },
  cardsContainer: {
    backgroundColor: '#4D5054',
    marginBottom: '0.5em',
    borderRadius: '4px',
    textAlign: 'left',
    padding: '0.5em',
  },

}));

const Cards = () => {
  const classes = useStyles();
  return (
    <div className={classes.cardsContainer}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          hello
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          hello
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          hello
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          hello
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          hello
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          hello
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
