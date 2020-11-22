import React from 'react';
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import getMoreSoldiers from '../../../utils/getMoreSoldiers';

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
  diplayNone: {
    display: 'none',
  },

}));

const LoadMoreComponent = () => {
  const classes = useStyles();
  const [disabled, setDisabled] = React.useState(true);
  const { count, soldiers } = useSelector((state) => state);
  // console.log('count', count);
  React.useEffect(() => {
    if (soldiers) {
      // eslint-disable-next-line no-unused-expressions
      (count > 10 && soldiers.length > 9) ? setDisabled(false) : setDisabled(true);
    }
  }, [count, soldiers.length, soldiers]);
  const handleLoadMoreClick = () => {
    getMoreSoldiers();
  };
  return (
    <div className={disabled ? classes.diplayNone : classes.loadMoreContainer}>
      <Button
        // disabled={disabled}
        // display="none"
        onClick={handleLoadMoreClick}
        // className={disabled ? classes.diplayNone : null}
        style={{
          backgroundColor: '#BFAF20',
        }}
      >
        See next results

      </Button>
    </div>
  );
};

export default LoadMoreComponent;