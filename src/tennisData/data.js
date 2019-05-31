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

export const tournament = {  //
  custom_id: '2019_french',
  name: '2019 French Open',
  round1: [
    {}
  ],
  round2: [
    {
      dateTime: newTime(5, 29, 4),
      player1: {
        id,
        fullName: 'K Nishikori',
        rank: 7,
        winner: true,
        result: [4, 6, 6, 6],
      },
      player2: {
        id,
        fullName: 'J Tsonga',
        rank: null,
        winner: false,
        result: [6, 4, 4, 4],
      },
    },
    {
      dateTime: new Date(2019, 5, 30, 11),
      winner: 'player1',
      player1: {
        id,
        fullName: 'D Thiem',
        rank: 4,
        winner: true,
        result: [6, 6, 6, 7]
      },
      player2: {
        id,
        fullName: 'A Bublik',
        rank: null,
        winner: false,
        result: [3, 7, 3, 5]
      },
    },
    {
      dateTime: new Date(2019, 5, 30, 11),
      player1: {
        id,
        fullName: 'P Cuevas',
        rank: null,
        winner: true,
        result: [7, 6, 2],
      },
      player2: {
        id,
        fullName: 'K Edmonds',
        rank: 28,
        winner: false,
        result: [6, 3, 1],
      },
    },
  ],


// ----------------- ROUND 3 -----------------
  round3: [
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
        rank: 7,
      },
      player2: {
        id,
        fullName: 'L Djere',
        rank: 31,
      }
    },
    {
      dateTime: newTime(5, 31, 4),
      player1: {
        id,
        fullName: 'P Carreno Busta',
        rank: null,
      },
      player2: {
        id,
        fullName: 'B Paire',
        rank: null,
      },
    },

    {
      dateTime: newTime(5, 31, 4),
      player1: {
        id,
        fullName: '',
        rank: null,
        winner: null,
        result: [],
      },
      player2: {
        id,
        fullName: '',
        rank: null,
        winner: null,
        result: [],
      },
    },

  ]

}

const result = tournament.round3.filter(match => {
  // console.log('match ==>', match);
  if (match.player1.fullName === 'K Nishikori') {
    console.log('found ==>', match);
  }
})
