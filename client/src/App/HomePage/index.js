import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      width: '250px',
    },
  },

}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <div>HomePage</div>
  );
};

export default HomePage;
