import React from 'react';
import { Link } from 'react-router-dom';

const Smurf = ({ smurf }) => {
  return (
    <div className='smurf'>
      <Link to={`smurf/${smurf.id}`} className='spotlight-link'>
        <h3>{smurf.name}</h3>
      </Link>
      <strong>{smurf.height} tall</strong>
      <p>{smurf.age} smurf years old</p>
      <button className='delete-smurf-button'>Delete Smurf</button>
      <Link to={`/editsmurfform/${smurf.id}`} className='edit-smurf-button'>
        Edit Smurf
      </Link>
    </div>
  );
};

export default Smurf;
