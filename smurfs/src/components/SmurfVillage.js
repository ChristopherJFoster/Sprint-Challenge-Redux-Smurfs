import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs } from '../actions';
import Smurf from './Smurf';

const SmurfVillage = ({ smurfs, fetchSmurfs }) => {
  useEffect(() => {
    if (smurfs.length === 0) {
      fetchSmurfs();
    }
  });

  return (
    <div className='smurfs'>
      <h1>Smurf Village</h1>
      <p className='suggestion-p'>Click a smurf's name to spotlight them!</p>
      <ul>
        {smurfs.map(smurf => (
          <Smurf smurf={smurf} key={smurf.id} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  smurfs: state.smurfs
});

export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(SmurfVillage);
