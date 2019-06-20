import { tournament } from '../tennisData/data';
import { playerNames } from '../tennisData/playerNames';
import {
  CLEAR_SELECTED_PLAYERS,
  GET_TOURNAMENT_DATA,
  GET_TOURNAMENT_DATA_ERROR,
  SET_ALL_PLAYER_NAMES,
  SET_SELECTED_PLAYERS,
  SHOW_SIGN_UP_FORM,
  SHOW_SIGN_UP_FORM_ERROR,
} from "../constants";

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

export const clearSelectedPlayers = () => {
  return {
    type: CLEAR_SELECTED_PLAYERS,
  }
}

export const toggleShowSignUpForm = toggleName => {
  return {
    type: SHOW_SIGN_UP_FORM,
    data: toggleName
  };
};
