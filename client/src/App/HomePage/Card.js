/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

const Soldier = ({ data }) => (
  <div style={{ color: '#FDE300' }}>
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
