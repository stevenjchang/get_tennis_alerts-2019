import { connect } from 'react-redux';
import {
  getTournamentData,
  setSelectedPlayers,
  toggleShowSignUpForm,
} from "../actions";

const mapStateToProps = (state) => {
  return {
    showSignUpForm: state.showSignUpForm
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
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
