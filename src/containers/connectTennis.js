import { connect } from 'react-redux';
import {
  getTournamentData,
  setSelectedPlayers,
  toggleNavigation,
} from "../actions";

const mapStateToProps = (state) => {
  return {
    alerts: state.navigation.alerts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTournamentData: () => dispatch(getTournamentData()),
    setSelectedPlayers: selectedPlayers =>
      dispatch(setSelectedPlayers(selectedPlayers)),
    toggleNavigation: (toggleName) => dispatch(toggleNavigation(toggleName))
  };
};

const ConnectTennis = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default ConnectTennis;
