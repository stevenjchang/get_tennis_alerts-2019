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
//TODO: handle if timeZoneLocationString is null
  return matches.map((match) => {
    console.log('match.dateTime ==>', match.dateTime);
    console.log('timeZoneLocationString ==>', timeZoneLocationString);
    let utcTime = moment.tz(match.dateTime, 'UTC');
    let localDateTime = moment
      .tz(match.dateTime, "UTC")
      .tz(timeZoneLocationString)
      .format()
    let localDate = localDateTime.slice(5, 10)
    let localTime = localDateTime.slice(11, 16)
    console.log('localDateTime ==>', localDateTime);
    console.log('localDate ==>', localDate);
    console.log("localTime ==>", localTime);
    return {
      ...match,
      localDateTime,
      localDate,
      localTime,
    }
  })
}

//input: filteredList
//output: filteredList with dateDividers
const _addDateDividers = list => {
  let dateDivider = list[0].localDate
  let result = [{ dateDivider }];
  for (let match of list) {
    let date = match.localDate;
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
