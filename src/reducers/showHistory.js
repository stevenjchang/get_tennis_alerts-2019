import { TOGGLE_SHOW_HISTORY } from '../constants';

const showHistory = (state = false, action) => {
  switch(action.type) {
    case TOGGLE_SHOW_HISTORY:
      return action.data;
    default:
      return state;
  }
};

export default showHistory;
