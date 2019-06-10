import {
  GET_TOURNAMENT_DATA,
  GET_TOURNAMENT_DATA_ERROR,
  SET_ALL_PLAYER_NAMES,
} from '../constants';

//TODO: rename reducer to tennisMatches?
const tennis = (state = [], action) => {
  switch (action.type) {
    case GET_TOURNAMENT_DATA:
      return action.data;
    case GET_TOURNAMENT_DATA_ERROR:
      return action.err.response;
    case SET_ALL_PLAYER_NAMES:
      return action.data;
    default:
      return state;
  }
};

export default tennis;
