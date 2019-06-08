import { GET_TOURNAMENT_DATA, GET_TOURNAMENT_DATA_ERROR } from '../constants';

//TODO: rename reducer to tennisMatches?
const tennis = (state = [], action) => {
  switch (action.type) {
    case GET_TOURNAMENT_DATA:
      return action.data;
    case GET_TOURNAMENT_DATA_ERROR:
      return action.err.response
    default:
      return state;
  }
};

export default tennis;
