const moment = require('moment-timezone');

// takes in 1 user's subscription list (selectedPlayers) and return an array of only
// the matches that match a player's subscription AND the match has not started yet
const _filterMatches = (selectedPlayers, matches) => {
  if (!selectedPlayers || !matches) return [];
  // let currentTimeUTC = moment.utc();
  return matches.filter((match) => {
    // if (match.dateTime > currentTimeUTC) return false;
    for (let player of selectedPlayers) {
      if (match.player1.name === player.value || match.player2.name === player.value) {
        return true
      };
    }
    return false;
  })
}

const _calculateLocalDateTime = (dateTime, timeZoneLocationString, timeZoneOffset) => {
  if (timeZoneLocationString) {
    return moment
      .tz(dateTime, 'UTC')
      .tz(timeZoneLocationString)
      .format()
  } else {
    return moment
      .tz(dateTime, 'UTC')
      .utcOffset(timeZoneOffset)
      .format()
  }
}

// takes the filteredMatches and figures out the local time for a given user
const _addLocalTime = (matches, timeZoneLocationString, timeZoneOffset) => {
  if (!timeZoneLocationString && !timeZoneOffset) return matches
  return matches.map((match) => {
    let localDateTime = _calculateLocalDateTime(
      match.dateTime,
      timeZoneLocationString,
      timeZoneOffset,
    )
    let localDate = localDateTime.slice(5, 10);
    let localTime = localDateTime.slice(11, 16);
    return {
      ...match,
      localDateTime,
      localDate,
      localTime,
      timeZoneLocationString,
    }
  })
}

/** Main function
 * 
 * @param {array of objects} mailingList
 * @param {array of objects} tournament
 *   @param {array of objects} tournament.matches
 * 
 * @returns {array of objects} 
 */
const _generateEmailContexts = (mailingList, tournament) => {
  return mailingList.map((user) => {
    const filteredMatches = _filterMatches(user.selectedPlayers, tournament.matches)
    const matchesWithLocalTimeAdded = _addLocalTime(
      filteredMatches,
      user.timeZoneLocationString,
      user.timeZoneOffset
    )
    return {
      email: user.email,
      tournamentName: tournament.name,
      // round: currentRound,
      timeZoneLocationString: user.timeZoneLocationString,
      timeZoneOffset: user.timeZoneOffset,
      matches: matchesWithLocalTimeAdded
    };
  })
}

module.exports = _generateEmailContexts;
