import React from 'react';
import PropTypes from 'prop-types';

//TODO: abstract into helper function
var weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tues";
weekday[3] = "Wed";
weekday[4] = "Thur";
weekday[5] = "Fri";
weekday[6] = "Sat";

const divStyles = {
  // display: 'flex',
  // justifyContent: 'center',
  border: '1px solid black',
  marginBottom: '20px',
  width: '500px'
}

const pStyles = {
  fontSize: '10px',
}


const TennisMatch = ({ matchInfo }) => {
  const { player1, player2, dateTime, round } = matchInfo;
  let month = dateTime.getMonth() + 1;
  let day = dateTime.getDate();
  let hour = dateTime.getUTCHours();
  let dayOfTheWeek = weekday[dateTime.getDay()];
  let isFinal = dateTime.getTime() < Date.now();

  return (
    <div style={divStyles}>
      {
        isFinal
        && <span style={pStyles}>final</span>
      }
      <p>{month}/{day} - {dayOfTheWeek}</p>
      <p>{player1.ranking} {player1.name}</p>
      <p>{player2.ranking} {player2.name}</p>
      <p style={pStyles}>round: {round}</p>
    </div>
  )
}

export default TennisMatch;
