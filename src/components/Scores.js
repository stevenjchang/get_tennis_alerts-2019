import React, { useEffect, useState } from 'react';
import connectTennis from '../containers/connectTennis';
import PlayerSearchBar from './PlayerSearchBar';
import MatchFilter from '../util/MatchFilter';
import TennisMatchTable from './TennisMatchTable';


const Scores = ({ allMatches, getTournamentData, selectedPlayers }) => {
  useEffect(() => {
    getTournamentData();
  });

  //TODO: refactor using reselect
  let results = []
  if (selectedPlayers.length > 0 && allMatches.length > 0) {
    results = MatchFilter
      .calculateFilteredMatches(selectedPlayers, allMatches);
  }

  return (
    <>
      <PlayerSearchBar />
      {
        results.map((matchInfo) => (
          <TennisMatchTable matchInfo={matchInfo} />
        ))
      }
    </>
  );
};

const ConnectTennisScores = connectTennis(Scores);

export default ConnectTennisScores;
