import { connect } from 'react-redux';
import _get from 'lodash.get';
import {
  clearSelectedPlayers,
  getTournamentData,
  setSelectedPlayers,
  setTimeZone,
  toggleShowSignUpForm,
} from "../actions";

const mapStateToProps = (state) => {
  return {
    selectedPlayers: state.selectedPlayers,
    showSignUpForm: state.showSignUpForm,
    timeZone: state.timeZone,
    allMatches: _get(state, 'tennis.matches', []),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearSelectedPlayers: () => dispatch(clearSelectedPlayers()),
    getTournamentData: () => dispatch(getTournamentData()),
    setSelectedPlayers: selectedPlayers =>
      dispatch(setSelectedPlayers(selectedPlayers)),
    setTimeZone: offset => dispatch(setTimeZone(offset)),
    toggleShowSignUpForm: (toggleName) => dispatch(toggleShowSignUpForm(toggleName))
  };
};

const ConnectTennis = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default ConnectTennis;
