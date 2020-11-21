/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  soldierDetailContainer: {
    maxWidth: '400px',
    margin: 'auto',
    borderRadius: '4px',

    // maxWidth: '800px',
    // margin: 'auto',
    backgroundColor: '#272B30',
    padding: '0.5em',
    // height: '100%',
    // margin: '0.5em',
    color: '#FDE300',
  },
  typoNameStyle: {
    fontWeight: 'bold',
    fontSize: '1.5em',

    // [theme.breakpoints.down('xs')]: {
    //   width: '250px',
    // },
  },

}));

const Soldier = ({ data }) => {
  const classes = useStyles();
  return (
    <div className={classes.soldierDetailContainer}>
      <div className={classes.typoNameStyle}>
        {data.name}
      </div>
      <div>
        Height :
        {' '}
        {data.height}
      </div>
      <div>
        Mass:
        {' '}
        {data.mass}
      </div>
      <div>
        Hair color:
        {' '}
        {data.hair_color}
      </div>
      <div>
        Skin color:
        {' '}
        {data.skin_color}
      </div>
      <div>
        Eyes color:
        {' '}
        {data.eye_color}
      </div>
      <div>
        Gender:
        {' '}
        {data.gender}
      </div>
    </div>
  );
};

export default Soldier;

Soldier.propTypes = {
  data: PropTypes.shape(
    PropTypes.shape({
      name: PropTypes.string,
      height: PropTypes.string,
      mass: PropTypes.string,
      hair_color: PropTypes.string,
      skin_color: PropTypes.string,
      eye_color: PropTypes.string,
      gender: PropTypes.string,
    }),
  ),
};
