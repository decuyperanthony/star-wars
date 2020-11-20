import React from 'react';
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
//   card: {
//     display: 'flex',
//     [theme.breakpoints.down('xs')]: {
//       width: '250px',
//     },
//   },
  resultNumberContainer: {
    backgroundColor: '#4D5054',
    marginBottom: '0.5em',
    borderRadius: '4px',
    textAlign: 'left',
    padding: '0.5em',
  },

}));

const ResultNumber = () => {
  const { count } = useSelector((state) => state);
  const classes = useStyles();
  return (
    <div className={classes.resultNumberContainer}>
      La recherche a donné
      {' '}
      {count}
      {' '}
      resultats
    </div>
  );
};

export default ResultNumber;
