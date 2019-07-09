import { array } from "prop-types";

export default class MatchFilter {
  static calculateFilteredMatches(selectedPlayers, allMatches, showHistory=true) {
    return allMatches
      .filter((match) => {
        if (!showHistory && match.isFinalAsString === 'Final') {
          return false;
        }
        for (let playerObj of selectedPlayers) {
          if (
            playerObj.value === match.player1.name ||
            playerObj.value === match.player2.name
          ) return true;
        }
        return false;
      })
      // .sort((a, b) => b.dateTime > a.dateTime)
  }
};
