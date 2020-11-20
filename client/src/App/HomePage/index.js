import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

// === component
import SearchBar from './SearchBar';

const useStyles = makeStyles((theme) => ({
  blocHomePage: {
    maxWidth: '800px',
    margin: 'auto',
    backgroundColor: '#ECF0F1',
    padding: '1em auto',
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
    </div>
  );
};

export default HomePage;
