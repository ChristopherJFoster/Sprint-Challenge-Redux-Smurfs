import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';

const Smurf = ({ smurf, deleteSmurf }) => {
  return (
    <div className='smurf'>
      <Link to={`/${smurf.id}`} className='spotlight-link'>
        <h3>{smurf.name}</h3>
      </Link>
      <strong>{smurf.height} tall</strong>
      <p>{smurf.age} smurf years old</p>
      <button
        onClick={() => deleteSmurf(smurf.id)}
        className='delete-smurf-button'
      >
        Delete Smurf
      </button>
      <Link to={`/editsmurfform/${smurf.id}`} className='edit-smurf-button'>
        Edit Smurf
      </Link>
    </div>
  );
};

export default connect(
  null,
  { deleteSmurf }
)(Smurf);
