import React from 'react';
import PropTypes from 'prop-types';

const TennisMatch = ({ matchInfo }) => {
  console.log('matchInfo ==>', matchInfo[0]);
  let info = matchInfo[0];
  console.log('info.dateTime ==>', info.dateTime);
  console.log('info.player1 ==>', info.player1);
  let date = info.dateTime.getMonth()
  console.log('date ==>', date);
  return (
    <>
      <p>{date}</p>
      <p>{info.player1.rank}</p>
    </>
  )
}

export default TennisMatch;

/*
dateTime: Fri May 31 2019 04:00:00 GMT-0700 (Pacific Daylight Time) {}
player1: {id: "1", fullName: "K Nishikori", rank: 7}
player2: {id: "1", fullName: "L Djere", rank: 31}
*/