import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';
import useInput from '../utilities/useInput';
import { deleteSmurf } from '../actions';

const SmurfSpotlight = ({ match, smurfs, deleteSmurf }) => {
  const name = useInput('');
  const age = useInput('');
  const height = useInput('');

  useEffect(() => {
    if (smurfs.length !== 0) {
      let smurf = smurfs.filter(
        smurf => smurf.id === Number(match.params.id)
      )[0];
      name.setValue(smurf.name);
      age.setValue(smurf.age);
      height.setValue(smurf.height);
    }
  }, []);

  if (smurfs.length === 0) {
    return <Redirect to='/' />;
  } else {
    return (
      <div className='smurf spotlight'>
        <h2>{name.value}</h2>
        <strong>{height.value} tall</strong>
        <p>{age.value} smurf years old</p>
        <button
          onClick={() => deleteSmurf(Number(match.params.id))}
          className='delete-smurf-button'
        >
          Delete Smurf
        </button>
        <Link
          to={`/editsmurfform/${match.params.id}`}
          className='edit-smurf-button'
        >
          Edit Smurf
        </Link>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  smurfs: state.smurfs
});

export default connect(
  mapStateToProps,
  { deleteSmurf }
)(SmurfSpotlight);
