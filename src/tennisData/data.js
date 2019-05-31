const id = '1'

const newTime = (month, day, hour=0, min=0) => {
  if (month === 4 || month === 6 || month === 9 || month === 11) {
    if (day > 30) return 'nope!!!!'
  }
  if (month === 2 && day > 29) {
    return 'nope'
  }
  return new Date(2019, (month - 1), day, hour, min)
}

export const tournament = {
  custom_id: '2019_french',
  name: '2019 French Open',
  year: 2019,
  open: 'french',
  matches: [
    {
      round: 2,
      dateTime: newTime(5, 29, 4),
      player1: {
        id,
        fullName: 'K Nishikori',
        ranking: 7,
        winner: true,
        result: [4, 6, 6, 6],
      },
      player2: {
        id,
        fullName: 'J Tsonga',
        ranking: null,
        winner: false,
        result: [6, 4, 4, 4],
      },
    },
    {
      round: 2,
      dateTime: newTime(5, 29, 4),
      winner: 'player1',
      player1: {
        id,
        fullName: 'D Thiem',
        ranking: 4,
        winner: true,
        result: [6, 6, 6, 7]
      },
      player2: {
        id,
        fullName: 'A Bublik',
        ranking: null,
        winner: false,
        result: [3, 7, 3, 5]
      },
    },
    {
      round: 2,
      dateTime: newTime(5, 29, 4),
      player1: {
        id,
        fullName: 'P Cuevas',
        ranking: null,
        winner: true,
        result: [7, 6, 2],
      },
      player2: {
        id,
        fullName: 'K Edmonds',
        ranking: 28,
        winner: false,
        result: [6, 3, 1],
      },
    },
    {
      round: 3,
      dateTime: newTime(5, 31, 4),
      player1: {
        id,
        fullName: 'K Nishikori',
        ranking: 7,
        winner: null,
        result: [],
      },
      player2: {
        id,
        fullName: 'L Djere',
        ranking: 31,
        winner: null,
        result: [],
      }
    },
    {
      round: 3,
      dateTime: newTime(5, 31, 4),
      player1: {
        id,
        fullName: 'P Carreno Busta',
        ranking: null,
      },
      player2: {
        id,
        fullName: 'B Paire',
        ranking: null,
      },
    },
  ],

//  -----------------  SAMPLE  -----------------
  sample: [
    {
      rounds: 0,
      dateTime: newTime(5, 31, 4),
      player1: {
        id,
        fullName: '',
        ranking: null,
        winner: null,
        result: [],
      },
      player2: {
        id,
        fullName: '',
        ranking: null,
        winner: null,
        result: [],
      },
    },
  ]

}

const result = tournament.matches.filter(match => {
  // console.log('match ==>', match);
  if (match.player1.fullName === 'K Nishikori') {
    console.log('found ==>', match);
  }
})

// -----------------  FIELDS TO ADD  -----------------

/*
    {
      // dateTime: new Date(2019, 5-1, 31, 11, 45),
      dateTime: newTime(5, 31, 4),
      // date,
      // time,
      // court_name,
      // winner: null || 'player1' || 'player2' || 1 || 2,  // winner present means match finished
      // status: 'final' || 'final/retired'
      // result: [],
      //  do I put result all together or with player1 and 2?
      player1: {
        id,
        fullName: 'K Nishikori',
        ranking: 7,
      },
      player2: {
        id,
        fullName: 'L Djere',
        ranking: 31,
      }
    },
*/
