import React from 'react';
import PropTypes from 'prop-types';

const divStyles = {
  border: '1px solid black',
  marginBottom: '20px',
}

const TennisMatch = ({ matchInfo }) => {
  const { player1, player2, dateTime, round } = matchInfo;
  let month = dateTime.getMonth() + 1;
  let day = dateTime.getDate();
  let isFinal = dateTime.getTime() < Date.now();

  return (
    <div style={divStyles}>
      <p>{month}/{day}</p>
      <p>{player1.name}</p>
      <p>{player2.name}</p>
      <p>round: {round}</p>
      {
        isFinal
        && <p>final</p>
      }
    </div>
  )
}

export default TennisMatch;
