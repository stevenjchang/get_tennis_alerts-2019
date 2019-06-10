import { SET_SELECTED_PLAYERS, SET_SELECTED_PLAYERS_ERROR } from '../constants';

const selectedPlayer = (state = [], action) => {
  switch(action.type) {
    case SET_SELECTED_PLAYERS:
      return action.data;
    case SET_SELECTED_PLAYERS_ERROR:
      return action.err.response;
    default:
      return state;
  }
};

export default selectedPlayer;
