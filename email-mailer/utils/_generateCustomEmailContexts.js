//input: filteredList
//output: filteredList with dateDividers
const _addDateDividers = list => {
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
};


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

// Main helper
export const _generateCustomEmailContexts = (mailingList, tournament, currentRound) => {
  return mailingList.map((user) => {
    const filteredMatches = _filterMatches(user.selectedPlayers, tournament, currentRound)
    const filteredMatchesWithDateDividers = _addDateDividers(filteredMatches);
    return {
      matches: filteredMatchesWithDateDividers,
    };
  })
}
