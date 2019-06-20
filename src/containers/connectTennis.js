import { connect } from 'react-redux';
import {
  clearSelectedPlayers,
  getTournamentData,
  setSelectedPlayers,
  toggleShowSignUpForm,
} from "../actions";

const mapStateToProps = (state) => {
  return {
    selectedPlayers: state.selectedPlayers,
    showSignUpForm: state.showSignUpForm,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearSelectedPlayers: () => dispatch(clearSelectedPlayers()),
    getTournamentData: () => dispatch(getTournamentData()),
    setSelectedPlayers: selectedPlayers =>
      dispatch(setSelectedPlayers(selectedPlayers)),
    toggleShowSignUpForm: (toggleName) => dispatch(toggleShowSignUpForm(toggleName))
  };
};

const ConnectTennis = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default ConnectTennis;
