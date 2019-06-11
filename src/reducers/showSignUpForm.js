import { SHOW_SIGN_UP_FORM, SHOW_SIGN_UP_FORM_ERROR } from '../constants';

const showSignUpForm = (state = false, action) => {
  switch(action.type) {
    case SHOW_SIGN_UP_FORM:
      return !state;
    case SHOW_SIGN_UP_FORM_ERROR:
      return action.err.response;
    default:
      return state;
  }
};

export default showSignUpForm;
