const GET_TOURNAMENT_DATA = 'GET_TOURNAMENT_DATA'
const GET_TOURNAMENT_DATA_ERROR = 'GET_TOURNAMENT_DATA_ERROR'

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
