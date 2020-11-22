/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import slugify from 'slugify';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles(() => ({
  cardsContainer: {
    backgroundColor: '#4D5054',
    marginBottom: '1.5em',
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
  const { soldiers, inputValue } = useSelector((state) => state);
  // === === === METHOD
  const handleGetSoldierPage = (soldierName) => {
    history.push(`/${slugify(soldierName).toLowerCase()}`);
  };

  // === === === MAP SUR LES SOLDATS
  let soldiersJSX;
  let filterSoldier;
  if (soldiers) {
    // eslint-disable-next-line max-len
    // filterSoldier = soldiers.filter((sol) => sol.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1);
    soldiersJSX = soldiers.map((s) => {
      if (s !== null) {
        return (
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
        );
      }
    });
    if (inputValue === '') {
      return (
        <>{' '}</>
      );
    }
    if (filterSoldier && filterSoldier.length === 0) {
      return (
        <div className={classes.cardsContainer}>
          Aucun résultat..
        </div>
      );
    }
    return (
      <div className={classes.cardsContainer}>
        <Grid container spacing={2}>
          {soldiersJSX}
        </Grid>
      </div>
    );
  }
};

export default Cards;
