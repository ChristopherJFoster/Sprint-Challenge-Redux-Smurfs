import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const FETCH_SMURFS_REQUEST = 'FETCH_SMURFS_REQUEST';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';

export const ADD_SMURF_REQUEST = 'ADD_SMURF_REQUEST';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';

export const EDIT_SMURF_REQUEST = 'EDIT_SMURF_REQUEST';
export const EDIT_SMURF_SUCCESS = 'EDIT_SMURF_SUCCESS';
export const EDIT_SMURF_FAILURE = 'EDIT_SMURF_FAILURE';

export const DELETE_SMURF_REQUEST = 'DELETE_SMURF_REQUEST';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
export const DELETE_SMURF_FAILURE = 'DELETE_SMURF_FAILURE';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_REQUEST });
  return axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_SMURFS_FAILURE, payload: err.response.data });
    });
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURF_REQUEST });
  return axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_SMURF_FAILURE, payload: err.response.data });
    });
};

export const editSmurf = smurf => dispatch => {
  dispatch({ type: EDIT_SMURF_REQUEST });
  return axios
    .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
    .then(res => {
      dispatch({ type: EDIT_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: EDIT_SMURF_FAILURE, payload: err.response.data });
    });
};

export const deleteSmurf = id => dispatch => {
  if (id === 0) {
    alert("Papa Smurf won't leave the village...");
    return;
  }
  dispatch({ type: DELETE_SMURF_REQUEST });
  return axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: DELETE_SMURF_FAILURE, payload: err.response.data });
    });
};
