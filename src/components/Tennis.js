import React, { Component } from 'react';
import { tournament } from '../tennisData/data';
import TennisMatch from './TennisMatch';

class Tennis extends Component {
  state = {
    selectedPlayer: 'playerName',
    allMatchesInfo: '',
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
      match.player1.name === playerName
        || match.player2.name === 'R Federer'
    )
    this.setState({ allMatchesInfo: result })
    return result
  }

  render() {
    let { allMatchesInfo } = this.state;
    return (
      <>
        <h1>When does
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="R Federer">Fedorer</option>
            <option value="K Nishikori">Nishikori</option>
          </select>
        play next?</h1>

        <h4>{this.state.selectedPlayer}</h4>
        {
          this.state.allMatchesInfo &&
            allMatchesInfo.map((matchInfo) => (
              <TennisMatch matchInfo={matchInfo} />
            ))
        }
      </>
    );
  }
}

export default Tennis;
