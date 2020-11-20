import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

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
    fontWeight: 'bold',
  },

  cardContainer: {
    padding: '0.5em',
  },

}));

const Cards = () => {
  const classes = useStyles();
  const { soldiers } = useSelector((state) => state);
  //   console.log('soldiers', soldiers);
  let soldiersJSX;
  if (soldiers.results) {
    soldiersJSX = soldiers.results.map((s) => {
      console.log('s', s);
      return (
        <Grid

          key={s.name}
          item
          xs={12}
          sm={6}
          md={4}
        >
          <Card className={classes.cardContainer}>{s.name}</Card>
        </Grid>
      );
    });
  }
  return (
    <div className={classes.cardsContainer}>
      <Grid container spacing={2}>
        {soldiersJSX}
      </Grid>
    </div>
  );
};

export default Cards;
