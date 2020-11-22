import React from 'react';
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  resultNumberContainer: {
    backgroundColor: '#4D5054',
    marginBottom: '0.5em',
    borderRadius: '4px',
    textAlign: 'left',
    padding: '0.5em',
  },
}));

const ResultNumber = () => {
  const { count, inputValue } = useSelector((state) => state);
  const classes = useStyles();
  let resultat = 'resultat';
  if (count > 1) resultat += 's';
  let sentenceResultNumberJSX;
  if (inputValue === '') {
    sentenceResultNumberJSX = '';
  } else {
    sentenceResultNumberJSX = (
      <div className={classes.resultNumberContainer}>
        La recherche a donné
        {' '}
        {count}
        {' '}
        {resultat}
      </div>
    );
  }
  return (
    <>
      {sentenceResultNumberJSX}
    </>
  );
};

export default ResultNumber;
