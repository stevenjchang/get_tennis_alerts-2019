import React, { useEffect } from 'react';
import connectTennis from '../containers/connectTennis';
import PlayerSearchBar from './PlayerSearchBar';


const Scores = ({ getTournamentData }) => {
  useEffect(() => {
    getTournamentData();
  });

  return (
    <>
      <PlayerSearchBar />
    </>
  );
};

const ConnectTennisScores = connectTennis(Scores);

export default ConnectTennisScores;
