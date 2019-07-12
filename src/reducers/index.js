import { combineReducers } from 'redux';
import activeTab from './activeTab';
import selectedPlayers from './selectedPlayers';
import showHistory from './showHistory';
import showSignUpForm from './showSignUpForm';
import tennis from './tennis'


const rootReducer = combineReducers({
  activeTab,
  selectedPlayers,
  showHistory,
  showSignUpForm,
  tennis,
});

 export default rootReducer; 
