import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import getMoreSoldiers from '../../utils/getMoreSoldiers';

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
//   card: {
//     display: 'flex',
//     [theme.breakpoints.down('xs')]: {
//       width: '250px',
//     },
//   },
  loadMoreContainer: {
    backgroundColor: '#4D5054',
    marginBottom: '0.5em',
    borderRadius: '4px',
    textAlign: 'left',
    padding: '0.5em',
    display: 'flex',
    justifyContent: 'center',
  },

}));

const LoadMoreComponent = () => {
  const classes = useStyles();
  const handleLoadMoreClick = () => {
    getMoreSoldiers();
  };
  return (
    <div className={classes.loadMoreContainer}>
      <Button
        onClick={handleLoadMoreClick}
        style={{
          backgroundColor: 'yellow',
        }}
      >
        Load More

      </Button>
    </div>
  );
};

export default LoadMoreComponent;
