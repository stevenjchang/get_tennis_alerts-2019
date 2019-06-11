import { combineReducers } from 'redux';
import navigation from './navigation';
import selectedPlayers from './selectedPlayers';
import tennis from './tennis'


const rootReducer = combineReducers({
  navigation,
  selectedPlayers,
  tennis,
});

 export default rootReducer; 
