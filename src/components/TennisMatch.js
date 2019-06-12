import React from 'react';
import PropTypes from 'prop-types';
import TennisMatchTable from './TennisMatchTable';

//TODO: abstract into helper function
// var weekday = new Array(7);
// weekday[0] = "Sun";
// weekday[1] = "Mon";
// weekday[2] = "Tues";
// weekday[3] = "Wed";
// weekday[4] = "Thur";
// weekday[5] = "Fri";
// weekday[6] = "Sat";


const TennisMatch = ({ matchInfo }) => {
  // const { player1, player2, dateTime, round } = matchInfo;
  // let month = dateTime.getMonth() + 1;
  // let day = dateTime.getDate();
  // let hour = dateTime.getUTCHours();
  // let dayOfTheWeek = weekday[dateTime.getDay()];
  // let isFinal = dateTime.getTime() < Date.now();

  return (
    <TennisMatchTable
      matchInfo={matchInfo}
    />
  )
}

export default TennisMatch;
