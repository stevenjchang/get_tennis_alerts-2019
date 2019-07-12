import { combineReducers } from 'redux';
import activeTab from './activeTab';
import selectedPlayers from './selectedPlayers';
import showHistory from './showHistory';
import showSignUpForm from './showSignUpForm';
import tennis from './tennis'
import timeZone from './timeZone';


const rootReducer = combineReducers({
  activeTab,
  selectedPlayers,
  showHistory,
  showSignUpForm,
  tennis,
  timeZone,
});

 export default rootReducer; 
