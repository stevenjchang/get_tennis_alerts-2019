import { SET_ACTIVE_TAB } from '../constants';

const activeTab = (state = 0, action) => {
  switch(action.type) {
    case SET_ACTIVE_TAB:
      return action.data;
    default:
      return state;
  }
};

export default activeTab;
