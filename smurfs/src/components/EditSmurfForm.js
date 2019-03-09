import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import useInput from '../utilities/useInput';
import { editSmurf } from '../actions';

const EditSmurfForm = ({ smurfs, match, history, editSmurf }) => {
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

  const requestEditSmurf = e => {
    e.preventDefault();
    editSmurf({
      id: Number(match.params.id),
      name: name.value,
      age: age.value,
      height: height.value
    }).then(() => {
      name.setValue('');
      age.setValue('');
      height.setValue('');
      history.push('/');
    });
  };

  if (smurfs.length === 0) {
    return <Redirect to='/' />;
  } else {
    return (
      <div className='smurf-form'>
        <h1>What needs updating?</h1>
        <form onSubmit={requestEditSmurf} className='form-inputs'>
          <input
            name='name'
            placeholder='name'
            value={name.value}
            onChange={name.updateValue}
            required
          />
          <input
            name='age'
            placeholder='age'
            value={age.value}
            onChange={age.updateValue}
            required
          />
          <input
            name='height'
            placeholder='height'
            value={height.value}
            onChange={height.updateValue}
            required
          />
          <button className='add-smurf-button' type='submit'>
            Submit smurf edits
          </button>
        </form>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  smurfs: state.smurfs
});

export default connect(
  mapStateToProps,
  { editSmurf }
)(EditSmurfForm);
