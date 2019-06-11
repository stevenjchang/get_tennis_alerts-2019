import { TOGGLE_OPEN, TOGGLE_OPEN_ERROR } from '../constants';

const navigation = (state = {}, action) => {
  switch(action.type) {
    case TOGGLE_OPEN:
      return {
        ...state,
        [action.data]: !state[action.data]
      }
    case TOGGLE_OPEN_ERROR:
      return action.err.response;
    default:
      return state;
  }
};

export default navigation;
