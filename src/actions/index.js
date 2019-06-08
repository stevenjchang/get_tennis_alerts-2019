import { tournament } from '../tennisData/data';

const GET_TOURNAMENT_DATA = 'GET_TOURNAMENT_DATA'
const GET_TOURNAMENT_DATA_ERROR = 'GET_TOURNAMENT_DATA_ERROR'

export const getTournamentData = () => {
  return {
    type: GET_TOURNAMENT_DATA,
    data: tournament,
  };
};
