import React, { Component } from 'react';
import { tournament } from '../tennisData/data';
import TennisMatch from './TennisMatch';

class Tennis extends Component {
  state = {
    selectedPlayer: 'playerName',
    nextMatchInfo: '',  //next, write a filter
  }

  handleChange = (event) => {
    this.setState({ selectedPlayer: event.target.value });
    this.filterPlayer()
  }

  handleSubmit = (event) => {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  filterPlayer = () => {
    let playerName = 'K Nishikori'
    let result = tournament.matches.filter((match) => match.player1.name === playerName)
    console.log('result ==>', result);
    this.setState({ nextMatchInfo: result })
    return result
  }

  render() {
    console.log('tournament ==>', tournament);
    let { nextMatchInfo } = this.state;
    return (
      <>
        <h1>When does
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Fedorer">Fedorer</option>
            <option value="K Nishikori">Nishikori</option>
          </select>
        play next?</h1>

        <h4>{this.state.selectedPlayer}</h4>
        {
          this.state.nextMatchInfo &&
            <TennisMatch matchInfo={nextMatchInfo}/>
        }
      </>
    );
  }
}

export default Tennis;
