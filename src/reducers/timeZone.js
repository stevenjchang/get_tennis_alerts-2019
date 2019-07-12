import { SET_TIME_ZONE } from '../constants';

const timeZone = (state='-7', action) => {
  switch(action.type) {
    case SET_TIME_ZONE:
      return action.data;
    default:
      return state;
  }
};

export default timeZone;
