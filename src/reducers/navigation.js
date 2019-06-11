import { SHOW_SIGN_UP_FORM, SHOW_SIGN_UP_FORM_ERROR } from '../constants';

const navigation = (state = {}, action) => {
  switch(action.type) {
    case SHOW_SIGN_UP_FORM:
      return {
        ...state,
        [action.data]: !state[action.data]
      }
    case SHOW_SIGN_UP_FORM_ERROR:
      return action.err.response;
    default:
      return state;
  }
};

export default navigation;
