import { handleActions } from 'redux-actions';

const defaultState = {
  pingInfo: {},
};

const movie = handleActions(
  {
    'UPDATE_PING': (state, action) => (
      { ...state, pingInfo: action.result }
    ),
  },
  defaultState
);

export default movie;
