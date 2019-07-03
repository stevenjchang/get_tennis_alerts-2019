import moment from 'moment-timezone';

// input: mailingListItem
// output: filteredEmailBody
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

const _addLocalTime = (matches, timeZoneLocationString, timeZoneOffset) => {
  return matches.map((match) => {
    console.log('match.dateTime ==>', match.dateTime);
    console.log('timeZoneLocationString ==>', timeZoneLocationString);
    let utcTime = moment.tz(match.dateTime, 'UTC');
    let localTime = moment
      .tz(match.dateTime, "UTC")
      .tz(timeZoneLocationString)
      .format()
      .slice (11, 16)
    console.log("localTime ==>", localTime);
    return {
      ...match,
      localTime,
    }
  })
}

//input: filteredList
//output: filteredList with dateDividers
const _addDateDividers = list => {
  let dateDivider = new Date(list[0].dateTime)
    .toISOString()
    .slice(5, 10);
  let result = [{ dateDivider }];
  for (let match of list) {
    let date = new Date(match.dateTime)
      .toISOString()
      .slice(5, 10);
    if (dateDivider !== date) {
      dateDivider = date;
      result.push({ dateDivider });
    }
    result.push(match);
  }
  return result;
};


// Main helper
export const _generateCustomEmailContexts = (mailingList, tournament, currentRound) => {
  return mailingList.map((user) => {
    const filteredMatches = _filterMatches(user.selectedPlayers, tournament, currentRound)
    const filteredMatchesWithLocalTime = _addLocalTime(
      filteredMatches,
      user.timeZoneLocationString,
      user.timeZoneOffset,
    );
    const filteredMatchesWithDateDividers = _addDateDividers(
      filteredMatchesWithLocalTime
    );
    return {
      email: user.email,
      tournamentName: tournament.name,
      round: currentRound,
      // timeZoneOffset,
      matches: filteredMatchesWithDateDividers,
    };
  })
}
