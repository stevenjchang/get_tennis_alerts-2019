import React from 'react';
import PropTypes from 'prop-types';
import connectTennis from '../../containers/connectTennis';
import { mockMailingList } from './mockMailingListData';
import { tournament } from "../../tennisData/wimbledonOpen0702";


// input: selectedPlayers Array
// output: filtered players and times, section by times

const sampleSelectedPlayers = [
  "Roger Federer",
  "Juan Ignacio Londero",
  "Stanislas Wawrinka"
];

const _filterMatches = (selectedPlayers, tournament, currentRound) => {
  let round = tournament.matches.filter(match => match.round === currentRound);
  return round.filter(match => {
    for (let player of selectedPlayers) {
      if (match.player1.name === player || match.player2.name === player) {
        return true;
      }
    }
    return false;
  });
};

let _addDateDividers = (list) => {
  let dateDivider = new Date(list[0].dateTime).getDate();
  let result = [{ dateDivider }];
  for (let match of list) {
    let date = new Date(match.dateTime).getDate();
    if (dateDivider !== date) {
      dateDivider = date;
      result.push({ dateDivider });
    }
    result.push(match);
  }
  return result;
}


const Email = () => {
  let filteredList = _filterMatches(mockMailingList[0].selectedPlayers, tournament, 1);
  let filteredListWithDateDividers = _addDateDividers(filteredList);

  return (
    <>
      {
        filteredListWithDateDividers.map((match) => {
          if (match.dateDivider) {
            return (<p>{match.dateDivider}</p>)
          } else {
            return (
              <>
              <p>{match.player1.name}</p>
              <p>{match.player2.name}</p>
              </>
            )
          }
        })
      }
    </>
  );
}

const ConnectTennisEmail = connectTennis(Email);

export default ConnectTennisEmail;

/*
Instead of building out the actual email functionality,
Lets take a step in that direction, by just making it into a page:
So let's brainstorm.

What do need in the email, what are your inputs and outputs?
Input: Array called mailingList
      selectedPlayers [],
      email,
      checkboxA,
      checkboxB

Current dateTime
User dateTime offset





*/