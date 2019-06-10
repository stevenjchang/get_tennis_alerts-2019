import { tournament } from '../tennisData/data';
import { playerNames } from '../tennisData/playerNames';
import {
  GET_TOURNAMENT_DATA,
  GET_TOURNAMENT_DATA_ERROR,
  SET_ALL_PLAYER_NAMES,
  SET_SELECTED_PLAYERS,
} from '../constants';

export const getTournamentData = () => {
  return {
    type: GET_TOURNAMENT_DATA,
    data: tournament,
  };
};

export const setAllPlayerNames = () => {
  return {
    type: SET_ALL_PLAYER_NAMES,
    data: playerNames,
  }
}

export const setSelectedPlayers = (selectedPlayers) => {
  return {
    type: SET_SELECTED_PLAYERS,
    data: selectedPlayers,
  }
};
