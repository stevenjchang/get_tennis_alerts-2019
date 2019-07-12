import { connect } from 'react-redux';
import _get from 'lodash.get';
import {
  clearSelectedPlayers,
  getTournamentData,
  setActiveTab,
  setSelectedPlayers,
  toggleShowHistory,
  toggleShowSignUpForm,
} from "../actions";

const mapStateToProps = (state) => {
  return {
    activeTab: state.activeTab,
    selectedPlayers: state.selectedPlayers,
    showHistory: state.showHistory,
    showSignUpForm: state.showSignUpForm,
    timeZone: state.timeZone,
    allMatches: _get(state, 'tennis.matches', []),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearSelectedPlayers: () => dispatch(clearSelectedPlayers()),
    getTournamentData: () => dispatch(getTournamentData()),
    setActiveTab: (index) => dispatch(setActiveTab(index)),
    setSelectedPlayers: selectedPlayers =>
      dispatch(setSelectedPlayers(selectedPlayers)),
    toggleShowHistory: () => dispatch(toggleShowHistory()),
    toggleShowSignUpForm: (toggleName) => dispatch(toggleShowSignUpForm(toggleName))
  };
};

const ConnectTennis = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default ConnectTennis;
