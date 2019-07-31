import { combineReducers } from 'redux';
import activeTab from './activeTab';
import selectedPlayers from './selectedPlayers';
import showHistory from './showHistory';
import showSignUpForm from './showSignUpForm';
import tennis from './tennis'

// initialize timeZone in store
const timeZone = (state=0) => {
  return state
}

const rootReducer = combineReducers({
  activeTab,
  selectedPlayers,
  showHistory,
  showSignUpForm,
  tennis,
  timeZone,
});

 export default rootReducer; 
