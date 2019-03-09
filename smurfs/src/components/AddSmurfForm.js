import React from 'react';
import { connect } from 'react-redux';

import useInput from '../utilities/useInput';
import { addSmurf } from '../actions';

const AddSmurfForm = ({ history, addSmurf }) => {
  const name = useInput();
  const age = useInput();
  const height = useInput();

  const requestAddSmurf = e => {
    e.preventDefault();
    addSmurf({
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

  return (
    <div className='smurf-form'>
      <h1>Who's the new Smurf?</h1>
      <form onSubmit={requestAddSmurf} className='form-inputs'>
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
          Add smurf to the village
        </button>
      </form>
    </div>
  );
};

export default connect(
  null,
  { addSmurf }
)(AddSmurfForm);
