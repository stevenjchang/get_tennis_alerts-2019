import React, { useEffect } from 'react';
import connectTennis from '../containers/connectTennis';


const Scores = ({ getTournamentData }) => {
  useEffect(() => {
    getTournamentData();
  });

  return (
    <>
      <h1>Scores</h1>
    </>
  );
};

const ConnectTennisScores = connectTennis(Scores);

export default ConnectTennisScores;
