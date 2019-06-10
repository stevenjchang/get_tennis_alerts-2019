import { connect } from 'react-redux';
import { getTournamentData, setSelectedPlayers } from '../actions';

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTournamentData2: () => dispatch(getTournamentData()),
    setSelectedPlayers: (selectedPlayers) => dispatch(setSelectedPlayers(selectedPlayers)),
  };
};

const ConnectTennis = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default ConnectTennis;
