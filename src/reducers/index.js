import { combineReducers } from 'redux';
import selectedPlayers from './selectedPlayers';
import tennis from './tennis'


 const rootReducer = combineReducers({
  selectedPlayers,
  tennis,
});

 export default rootReducer; 
