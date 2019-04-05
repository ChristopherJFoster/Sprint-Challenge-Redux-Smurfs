/*
  Be sure to import in all of the action types from `../actions`
*/

import {
  FETCH_SMURFS_REQUEST,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE,
  ADD_SMURF_REQUEST,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE,
  EDIT_SMURF_REQUEST,
  EDIT_SMURF_SUCCESS,
  EDIT_SMURF_FAILURE,
  DELETE_SMURF_REQUEST,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILURE
} from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  editingSmurf: false,
  deletingSmurf: false,
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_REQUEST:
      return { ...state, fetchingSmurfs: true, error: null };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload,
        error: null
      };
    case FETCH_SMURFS_FAILURE:
      return { ...state, fetchingSmurfs: false, error: action.payload };

    case ADD_SMURF_REQUEST:
      return { ...state, addingSmurf: true, error: null };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        smurfs: action.payload,
        error: null
      };
    case ADD_SMURF_FAILURE:
      return { ...state, addingSmurf: false, error: action.payload };

    case EDIT_SMURF_REQUEST:
      return { ...state, editingSmurf: true, error: null };
    case EDIT_SMURF_SUCCESS:
      return {
        ...state,
        editingSmurf: false,
        smurfs: action.payload,
        error: null
      };
    case EDIT_SMURF_FAILURE:
      return { ...state, editingSmurf: false, error: action.payload };

    case DELETE_SMURF_REQUEST:
      return { ...state, deletingSmurf: true, error: null };
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        deletingSmurf: false,
        smurfs: action.payload,
        error: null
      };
    case DELETE_SMURF_FAILURE:
      return { ...state, deletingSmurf: false, error: action.payload };

    default:
      return state;
  }
};
