import React, { useEffect, useState } from 'react';
import connectTennis from '../containers/connectTennis';
import PlayerSearchBar from './PlayerSearchBar';
import MatchFilter from '../util/MatchFilter';


const Scores = ({ allMatches, getTournamentData, selectedPlayers }) => {
  const [filteredMatches, setFilteredMatches ] = useState([])
  useEffect(() => {
    getTournamentData();
    if (selectedPlayers.length > 0 && allMatches.length > 0) {
      let result = MatchFilter.calculateFilteredMatches(selectedPlayers, allMatches);
      setFilteredMatches(result);
    }
  });

  return (
    <>
      <PlayerSearchBar />
      {
        filteredMatches.map((item) => (
          <h1>{item.player1.name}</h1>
        ))
      }
    </>
  );
};

const ConnectTennisScores = connectTennis(Scores);

export default ConnectTennisScores;
