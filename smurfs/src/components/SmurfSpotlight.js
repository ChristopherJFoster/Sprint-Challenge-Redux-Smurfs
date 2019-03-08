import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';

let spotlightedSmurf;

const SmurfSpotlight = ({ match, smurfs, deleteSmurf }) => {
  useEffect(() => {
    if (!spotlightedSmurf) {
      console.log('test');
      spotlightedSmurf = smurfs.filter(
        smurf => smurf.id === Number(match.params.id)
      )[0];
    }
  });

  return (
    <div className='smurf spotlight'>
      <h2>{spotlightedSmurf.name}</h2>
      <strong>{spotlightedSmurf.height} tall</strong>
      <p>{spotlightedSmurf.age} smurf years old</p>
      <button
        onClick={() => deleteSmurf(spotlightedSmurf.id)}
        className='delete-smurf-button'
      >
        Delete Smurf
      </button>
      <Link
        to={`/editsmurfform/${spotlightedSmurf.id}`}
        className='edit-smurf-button'
      >
        Edit Smurf
      </Link>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state.smurfs);
  return {
    smurf: state.smurfs
  };
};

// const mapStateToProps = state => ({
//   smurfs: state.smurfs
// });

export default connect(
  mapStateToProps,
  { deleteSmurf }
)(SmurfSpotlight);
