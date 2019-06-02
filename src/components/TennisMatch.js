import React from 'react';
import PropTypes from 'prop-types';

var d = new Date();
var weekday = new Array(7);
weekday[0] =  "Sun";
weekday[1] = "Mon";
weekday[2] = "Tues";
weekday[3] = "Wed";
weekday[4] = "Thur";
weekday[5] = "Fri";
weekday[6] = "Sat";

var n = weekday[d.getDay()];

const divStyles = {
  // display: 'flex',
  // justifyContent: 'center',
  border: '1px solid black',
  marginBottom: '20px',
  width: '500px'
}


const TennisMatch = ({ matchInfo }) => {
  const { player1, player2, dateTime, round } = matchInfo;
  let month = dateTime.getMonth() + 1;
  let day = dateTime.getDate();
  let dayOfTheWeek = weekday[dateTime.getDay()];
  let isFinal = dateTime.getTime() < Date.now();

  return (
    <div style={divStyles}>
      <p>{month}/{day} - {dayOfTheWeek}</p>
      <p>{player1.ranking} {player1.name}</p>
      <p>{player2.ranking} {player2.name}</p>
      <p>round: {round}</p>
      {
        isFinal
        && <p>final</p>
      }
    </div>
  )
}

export default TennisMatch;
