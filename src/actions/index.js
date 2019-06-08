import { tournament } from '../tennisData/data';
import { playerNames } from '../tennisData/playerNames';
import { GET_TOURNAMENT_DATA, GET_TOURNAMENT_DATA_ERROR } from '../constants';

export const getTournamentData = () => {
  return {
    type: GET_TOURNAMENT_DATA,
    data: tournament,
  };
};

export const setAllPlayerNames = () => {
  // return {
  //   type: 
  // }
}

export const setSelectedPlayers = () => {

};

