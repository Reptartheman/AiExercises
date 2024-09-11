const players = [
  {
      name: "Mike Trout",
      position: "Center Fielder",
      team: "Los Angeles Angels",
      stats: {
          games: 140,
          atBats: 500,
          hits: 150,
          homeRuns: 35,
          RBIs: 100,
          battingAverage: 0.300
      }
  },
  {
      name: "Aaron Judge",
      position: "Right Fielder",
      team: "New York Yankees",
      stats: {
          games: 130,
          atBats: 480,
          hits: 130,
          homeRuns: 40,
          RBIs: 90,
          battingAverage: 0.271
      }
  },
  {
      name: "Mookie Betts",
      position: "Right Fielder",
      team: "Los Angeles Dodgers",
      stats: {
          games: 150,
          atBats: 520,
          hits: 160,
          homeRuns: 30,
          RBIs: 85,
          battingAverage: 0.308
      }
  },
  {
      name: "Fernando Tatis Jr.",
      position: "Shortstop",
      team: "San Diego Padres",
      stats: {
          games: 110,
          atBats: 420,
          hits: 120,
          homeRuns: 25,
          RBIs: 70,
          battingAverage: 0.286
      }
  }
];

//Write a function to return an array of all player names.

function getPlayerNames(array) {
    return array.map(player => player.name);
}

//console.log(getPlayerNames(players));


//Write a function to calculate the total number of home runs hit by all players combined.

function totalHomeRunsHit(array) {
    return array.reduce((prev, curr) => {
        return prev + curr.stats.homeRuns
    }, 0)
}

//console.log(totalHomeRunsHit(players));

//Write a function that accepts a position (e.g., "Right Fielder") 
//and returns an array of players who play that position.

function getPosition(array) {
    return array.filter(player => player.position === 'Center Fielder');
}

//console.log(getPosition(players));

//Write a function to sort the players by their batting average in descending order.

function sortDescendingBattingAverage(array) {
    return array.sort((a, b) => a.stats.battingAverage - b.stats.battingAverage);
}

//console.log(sortDescendingBattingAverage(players));

//Write a function to add a new stat (e.g., stolenBases) 
//to each player's stats object with a default value of 0.

function addStatToPlayer(array) {
    for(const player of array) {
        player.stats.stolenBases = 0;
    }
    return array;
}

//console.log(addStatToPlayer(players));