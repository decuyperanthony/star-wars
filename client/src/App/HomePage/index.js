import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

// === component
import Title from './Title';
import SearchBar from './SearchBar';
import ResultNumber from './ResultNumber';
import Soldiers from './Soldiers';
import LoadMoreComponent from './LoadMoreButton';

const useStyles = makeStyles(() => ({
  blocHomePage: {
    maxWidth: '800px',
    margin: 'auto',
    backgroundColor: '#272B30',
    padding: '0.5em',
    height: '100%',
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
      <Title />
      <SearchBar />
      <ResultNumber />
      <Soldiers />
      <LoadMoreComponent />
    </div>
  );
};

export default HomePage;
