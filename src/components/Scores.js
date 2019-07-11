import React, { useEffect } from "react";
import connectTennis from "../containers/connectTennis";
import PlayerSearchBar from "./PlayerSearchBar";
import MatchFilter from "../util/MatchFilter";
import TennisMatchTable from "./TennisMatchTable";
import FloatingActionButton from "./FloatingActionButton";
import ToggleOptions from './ToggleOptions';

const Scores = ({ allMatches, getTournamentData, selectedPlayers, showHistory }) => {
  useEffect(() => {
    getTournamentData();
  });

  //TODO: refactor using reselect
  let results = [];
  if (
    selectedPlayers &&
    selectedPlayers.length > 0 &&
    allMatches &&
    allMatches.length > 0
  ) {
    results = MatchFilter.calculateFilteredMatches(selectedPlayers, allMatches, showHistory);
  }

  return (
    <>
      <p>choose players:</p>
      <PlayerSearchBar />
      <ToggleOptions />
      {results.map(matchInfo => (
        <TennisMatchTable matchInfo={matchInfo} />
      ))}
      <FloatingActionButton />
    </>
  );
};

const ConnectTennisScores = connectTennis(Scores);

export default ConnectTennisScores;
