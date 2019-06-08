import React, { Component } from 'react';
import { Button, Picker } from 'react-native-web';

import { tournament } from '../tennisData/data';
import MultiSelect from './MultiSelect';
import TennisMatch from './TennisMatch';

const divStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-end',
}

const divStyles2 = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'space-between'
  // justifyContent: 'center',
}

const pickerStyles = {
  height: 30,
  width: 160,
  marginLeft: 10,
  marginRight: 10,
  backgroundColor: '#d64541'
}


class Tennis extends Component {
  componentDidMount() {
    this.props.getTournamentData2();
  }

  state = {
    selectedPlayer: '',
    allMatchesInfo: '',
    showHistory: false,
  }

  handleShowHistory = () => {
    this.setState({ showHistory: !this.state.showHistory})
  }

  filterSelected = (array) => {
    let result = tournament.matches
      .filter((match) => {
        return array.includes(match.player1.name) || array.includes(match.player2.name);
      })
      .sort((a, b) => b.dateTime.getTime() - a.dateTime.getTime())
    this.setState({ allMatchesInfo: result })
  }

  render() {
    let { allMatchesInfo, showHistory } = this.state;
    const browserTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    return (
      <div style={divStyles}>
        <p>{browserTimeZone}</p>
        <MultiSelect
          filterSelected={this.filterSelected}
        />

        <div style={divStyles2}>
        {
          allMatchesInfo
          && allMatchesInfo.map((matchInfo) => (
            <>
              <TennisMatch
                matchInfo={matchInfo}
                showHistory={showHistory}
              />
            </>
          ))
        }
        {
          allMatchesInfo
          && !showHistory
          && <p onClick={this.handleShowHistory}>show completed matches</p>
        }
        {
          allMatchesInfo
          && showHistory
          && <p onClick={this.handleShowHistory}>hide completed matches</p>
        }
        </div>
      </div>
    );
  }
}

export default Tennis;
