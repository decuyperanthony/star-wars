import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import slugify from 'slugify';
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
    '&:hover': {
      cursor: 'pointer',
    },
    color: 'blue',
    textDecoration: 'underline',
  },

}));

const Cards = () => {
  const history = useHistory();
  const classes = useStyles();
  const { soldiers } = useSelector((state) => state);
  // === === === METHOD
  const handleGetSoldierPage = (soldierName) => {
    console.log('soldierName', soldierName);
    history.push(`/${slugify(soldierName)}`);
  };

  // === === === MAP SUR LES SOLDATS
  let soldiersJSX;
  if (soldiers.results) {
    soldiersJSX = soldiers.results.map((s) => (
      <Grid
        key={s.name}
        item
        xs={12}
        sm={6}
        md={4}
      >
        <Card
          className={classes.cardContainer}
          onClick={() => handleGetSoldierPage(s.name)}
        >
          {s.name}
        </Card>
      </Grid>
    ));
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
