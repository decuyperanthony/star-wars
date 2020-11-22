import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

// === component
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ResultNumber from './components/ResultNumber';
import Soldiers from './components/SoldiersList';
import LoadMoreComponent from './components/LoadMoreButton';

const useStyles = makeStyles(() => ({
  blocHomePage: {
    maxWidth: '800px',
    margin: 'auto',
    backgroundColor: '#272B30',
    padding: '0.5em',
    // height: '100%',
    // minHeight: '50vh',
    // margin: '0.5em',
  },

}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.blocHomePage}>
      <Header />
      <SearchBar />
      <ResultNumber />
      <Soldiers />
      <LoadMoreComponent />
    </div>
  );
};

export default HomePage;
