const id = '1'

//TODO: refactor to throw error, or some other way to not fail silently
//TODO: move to a helper function elsewhere
const newTime = (month, day, hour=0, min=0) => {
  if (month < 1 || month > 12) return 'date is invalid';
  if (day < 1 || day > 31) return 'date is invalid';
  if (month === 4 || month === 6 || month === 9 || month === 11) {
    if (day > 30) return 'date is invalid';
  }
  if (month === 2 && day > 29) {
    return 'date is invalid';
  }
  return new Date(2019, (month - 1), day, hour, min);
}

//TODO: change name to name
//TODO: add in additional name fields?
export const tournament = {
  custom_id: '2019_french',
  name: '2019 French Open',
  year: 2019,
  open: 'french',
  matches: [
    {
      round: 2,
      dateTime: newTime(5, 30, 12),
      player1: {
        id,
        name: 'Novak Djokovic',
        ranking: 1,
        winner: true,
        result: [],
      },
      player2: {
        id,
        name: 'Henri Laaksonen',
        ranking: null,
        winner: false,
        result: [],
      }
    },
    {
      round: 2,
      dateTime: newTime(5, 29, 4),
      player1: {
        id,
        name: 'Kei Nishikori',
        ranking: 7,
        winner: true,
        result: [4, 6, 6, 6],
      },
      player2: {
        id,
        name: 'J Tsonga',
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
        name: 'D Thiem',
        ranking: 4,
        winner: true,
        result: [6, 6, 6, 7]
      },
      player2: {
        id,
        name: 'A Bublik',
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
        name: 'P Cuevas',
        ranking: null,
        winner: true,
        result: [7, 6, 2],
      },
      player2: {
        id,
        name: 'K Edmonds',
        ranking: 28,
        winner: false,
        result: [6, 3, 1],
      },
    },




















// -----------------  ROUND 3  -----------------

    {
      round: 3,
      dateTime: newTime(5, 31, 4),
      player1: {
        id,
        name: 'Kei Nishikori',
        ranking: 7,
        winner: null,
        result: [],
      },
      player2: {
        id,
        name: 'L Djere',
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
        name: 'P Carreno Busta',
        ranking: null,
        winner: null,
        result: [],
      },
      player2: {
        id,
        name: 'B Paire',
        ranking: null,
        winner: null,
        result: [],
      }
    },
    {
      round: 3,
      dateTime: newTime(5, 31, 12),
      player1: {
        id,
        name: 'Casper Ruud',
        ranking: null,
        winner: false,
        result: [],
      },
      player2: {
        id,
        name: 'Roger Federer',
        ranking: 3,
        winner: true,
        result: [],
      }
    },
    {
      round: 3,
      dateTime: newTime(5, 31, 12),
      player1: {
        id,
        name: 'David Goffin',
        ranking: 27,
        winner: false,
        result: [],
      },
      player2: {
        id,
        name: 'Rafael Nadal',
        ranking: 2,
        winner: true,
        result: [],
      }
    },
    {
      round: 3,
      dateTime: newTime(6, 1, 11),
      player1: {
        id,
        name: 'Fabio Fognini',
        ranking: 6,
        winner: true,
        result: [],
      },
      player2: {
        id,
        name: 'Roberto Bautista Agut',
        ranking: 18,
        winner: false,
        result: [],
      }
    },
    {
      round: 3,
      dateTime: newTime(6, 1, 11),
      player1: {
        id,
        name: 'Jan-Lennard Struff',
        ranking: null,
        winner: true,
        result: [],
      },
      player2: {
        id,
        name: 'Borna Coric',
        ranking: 13,
        winner: false,
        result: [],
      }
    },
    {
      round: 3,
      dateTime: newTime(6, 1, 11),
      player1: {
        id,
        name: 'Stanislas Wawrinka',
        ranking: 24,
        winner: true,
        result: [],
      },
      player2: {
        id,
        name: 'Grigor Dimitrov',
        ranking: null,
        winner: false,
        result: [],
      }
    },
    {
      round: 3,
      dateTime: newTime(6, 1, 12),
      player1: {
        id,
        name: 'Novak Djokovic',
        ranking: 1,
        winner: true,
        result: [],
      },
      player2: {
        id,
        name: 'Salvatore Caruso',
        ranking: null,
        winner: false,
        result: [],
      }
    },
    





    {
      round: 3,
      dateTime: newTime(6, 1, 12),
      player1: {
        id,
        name: '',
        ranking: null,
        winner: null,
        result: [],
      },
      player2: {
        id,
        name: '',
        ranking: null,
        winner: null,
        result: [],
      }
    },
































// -----------------  ROUND 4  -----------------
    {
      round: 4,
      dateTime: newTime(6, 2, 1),
      player1: {
        id,
        name: 'L Mayer',
        ranking: null,
        winner: null,
        result: [],
      },
      player2: {
        id,
        name: 'Roger Federer',
        ranking: 3,
        winner: null,
        result: [],
      },
    },
    {
      round: 4,
      dateTime: newTime(6, 2, 1),
      player1: {
        id,
        name: 'J Londero',
        ranking: null,
        winner: null,
        result: [],
      },
      player2: {
        id,
        name: 'Rafael Nadal',
        ranking: 2,
        winner: null,
        result: [],
      },
    },
    {
      round: 4,
      dateTime: newTime(6, 2, 1),
      player1: {
        id,
        name: 'Kei Nishikori',
        ranking: 7,
        winner: null,
        result: [],
      },
      player2: {
        id,
        name: 'B Paire',
        ranking: null,
        winner: null,
        result: [],
      },
    },
    {
      round: 4,
      dateTime: newTime(6, 3, 4),
      player1: {
        id,
        name: 'Novak Djokovic',
        ranking: 1,
        winner: null,
        result: [],
      },
      player2: {
        id,
        name: 'Jan-Lennard Struff',
        ranking: null,
        winner: null,
        result: [],
      }
    },

  ],

//  -----------------  SAMPLE  -----------------
  sample: [
    {
      round: 0,
      dateTime: newTime(5, 31, 4),
      player1: {
        id,
        name: '',
        ranking: null,
        winner: null,
        result: [],
      },
      player2: {
        id,
        name: '',
        ranking: null,
        winner: null,
        result: [],
      },
    },
  ]

}

const result = tournament.matches.filter((match) => {
  // console.log('match ==>', match);
  if (match.player1.name === '') {
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
        name: 'Kei Nishikori',
        ranking: 7,
      },
      player2: {
        id,
        name: 'L Djere',
        ranking: 31,
      }
    },
*/
