import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';

let spotlightedSmurf;

const SmurfSpotlight = ({ match, smurfs, deleteSmurf }) => {
  useEffect(() => {
    if (!spotlightedSmurf) {
      console.log('no spotlightedSmurf');
      const id = parseInt(match.params.id, 10);
      console.log(id);
      console.log(smurfs);
      spotlightedSmurf = smurfs.filter(smurf => id === smurf.id)[0];
      console.log(spotlightedSmurf);
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

const mapStateToProps = state => ({
  smurfs: state.smurfs
});

export default connect(
  mapStateToProps,
  { deleteSmurf }
)(SmurfSpotlight);
