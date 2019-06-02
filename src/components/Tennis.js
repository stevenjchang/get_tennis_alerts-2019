import React, { Component } from 'react';
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


class Tennis extends Component {
  state = {
    selectedPlayer: '',
    allMatchesInfo: '',
  }

  componentDidUpdate() {

  }

  handleChange = (event) => {
    this.setState({ selectedPlayer: event.target.value });
    this.filterPlayer(event.target.value)
}

  handleSubmit = (event) => {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  filterPlayer = (playerName) => {
    let result = tournament.matches.filter((match) => 
      match.player1.name === playerName || match.player2.name === playerName
    )
    this.setState({ allMatchesInfo: result })
    return result
  }

  render() {
    let { allMatchesInfo } = this.state;
    return (
      <div style={divStyles}>
          <h1>When does
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Roger Federer">Fedorer</option>
              <option value="Kei Nishikori">Nishikori</option>
              <option value="Rafael Nadal">Nadal</option>
              <option value="Novak Djokovic">Djokovic</option>
            </select>
          play next?</h1>
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
