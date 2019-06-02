import React, { Component } from 'react';
import { Picker, Switch } from 'react-native-web';
import { tournament } from '../tennisData/data';
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
  state = {
    selectedPlayer: '',
    allMatchesInfo: '',
    switchValue: false,
  }

  handleChange = (event) => {
    this.setState({ selectedPlayer: event.target.value });
    this.filterPlayer(event.target.value)
}

  handleSubmit = (event) => {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  handleSwitch = (value) => {
    this.setState({ switchValue: !this.state.switchValue })
  }

  filterPlayer = (playerName) => {
    let result = tournament.matches.filter((match) => 
      match.player1.name === playerName || match.player2.name === playerName
    )
    this.setState({ allMatchesInfo: result })
    return result
  }

  handleOnValueChange = (itemValue, itemIndex) => {
    this.setState({selectedPlayer: itemValue});
    this.filterPlayer(itemValue);
  }

  render() {
    let { allMatchesInfo } = this.state;
    const browserTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    return (
      <div style={divStyles}>
          <p>{browserTimeZone}</p>
          <div>When does
            <Picker
              selectedValue={this.state.selectedPlayer}
              style={pickerStyles}
              onValueChange={this.handleOnValueChange}
            >
              <Picker.Item label="______________________" value="java" />
              <Picker.Item label="Roger Federer" value="Roger Federer" />
              <Picker.Item label="Rafael Nadal" value="Rafael Nadal" />
              <Picker.Item label="Novak Djokovic" value="Novak Djokovic" />
              <Picker.Item label="Kei Nishikori" value="Kei Nishikori" />
            </Picker>
          play next?</div>

          <Switch
            value={this.state.switchValue}
            onValueChange={this.handleSwitch}
          ></Switch><span>advanced</span>

        <div style={divStyles2}>
        {
          this.state.allMatchesInfo &&
            allMatchesInfo.map((matchInfo) => (
              <TennisMatch matchInfo={matchInfo} />
            ))
        }
        </div>
      </div>
    );
  }
}

export default Tennis;
