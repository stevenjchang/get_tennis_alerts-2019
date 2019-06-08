import { connect } from 'react-redux';
import { getTournamentData } from '../actions';
import Tennis from '../components/Tennis';

const mapStateToProps = (state) => {
  return {
    tournament: state.tennis,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTournamentData2: () => dispatch(getTournamentData()),
  };
};

const TennisContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tennis);

export default TennisContainer;
