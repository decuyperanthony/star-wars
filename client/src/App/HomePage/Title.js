import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  titleContainer: {
    // maxWidth: '800px',
    // margin: 'auto',
    // backgroundColor: '#272B30',
    // padding: '0.5em',
    // height: '100%',
    // margin: '0.5em',
  },
  //   card: {
  //     display: 'flex',
  //     [theme.breakpoints.down('xs')]: {
  //       width: '250px',
  //     },
  //   },

}));

const Title = () => {
  const classes = useStyles();
  return (
    <div className={classes.titleContainer}>
      <h1>Star wars</h1>
    </div>
  );
};

export default Title;
