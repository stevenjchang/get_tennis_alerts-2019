import { combineReducers } from 'redux';
import showSignUpForm from './showSignUpForm';
import selectedPlayers from './selectedPlayers';
import tennis from './tennis'


const rootReducer = combineReducers({
  showSignUpForm,
  selectedPlayers,
  tennis,
});

 export default rootReducer; 
