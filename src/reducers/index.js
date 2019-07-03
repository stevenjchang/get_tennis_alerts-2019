import { combineReducers } from 'redux';
import showSignUpForm from './showSignUpForm';
import selectedPlayers from './selectedPlayers';
import tennis from './tennis'
import timeZone from './timeZone';


const rootReducer = combineReducers({
  showSignUpForm,
  selectedPlayers,
  tennis,
  timeZone,
});

 export default rootReducer; 
