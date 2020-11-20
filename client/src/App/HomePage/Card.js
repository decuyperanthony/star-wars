/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import { Card } from '@material-ui/core';

const Soldier = ({ data }) => {
  console.log('data', data);
  return (
    <Card style={{ color: '#FDE300' }}>
      <div style={{
        fontWeight: 'bold',
        fontSize: '1.5em',
      }}
      >
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
        Mass:
        {' '}
        {data.mass}
      </div>
    </Card>
  );
};

export default Soldier;

Soldier.propTypes = {
  data: PropTypes.shape(
    PropTypes.shape({
    //   status: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
};
