import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

// === component
import SearchBar from './SearchBar';
import ResultNumber from './ResultNumber';
import Cards from './Cards';

const useStyles = makeStyles((theme) => ({
  blocHomePage: {
    maxWidth: '800px',
    margin: 'auto',
    backgroundColor: '#272B30',
    padding: '0.5em',
    // margin: '0.5em',
  },
  //   card: {
  //     display: 'flex',
  //     [theme.breakpoints.down('xs')]: {
  //       width: '250px',
  //     },
  //   },

}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.blocHomePage}>
      <h1 style={{ margin: 0 }}>Star wars</h1>
      <SearchBar />
      <ResultNumber />
      <Cards />
    </div>
  );
};

export default HomePage;
