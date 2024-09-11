//Write a function to save the players array to localStorage.

function addLocalStorageItem(array) {
  localStorage.setItem('players', JSON.stringify(array));
  const players = JSON.parse(localStorage.getItem('players'));
  console.log(players);
}




/* 
Write a function to update a specific player's stats and save the updated players array back to localStorage.
Hint: Find the player in the array, update their stats, and then save the array back to localStorage.
*/

//Below is what you had initially but still works
function updateStatsPutBackToLS(array, position) {
  const localStorageItem = localStorage.getItem('players')

  if (localStorageItem) {
    const findPlayer = array.find(player => player.position === position)
    findPlayer.stats.homeRuns = 40;
    addLocalStorageItem(array);
  }
}

//updateStatsPutBackToLS(players, 'Center Fielder');

//What ChatGPT corrected it to
function updateStatsPutBackToLS(position, newStats) {
  const localStorageItem = localStorage.getItem('players');  // Retrieve the players array from localStorage

  if (localStorageItem) {
    let playersArray = JSON.parse(localStorageItem);  // Parse the stored players array
    const playerIndex = playersArray.findIndex(player => player.position === position);  // Find the player index by position

    if (playerIndex !== -1) {
      // Update the specific player's stats
      playersArray[playerIndex].stats = { ...playersArray[playerIndex].stats, ...newStats };
      
      // Save the updated array back to localStorage
      addLocalStorageItem(playersArray);
    } else {
      console.log(`Player with position "${position}" not found.`);
    }
  } else {
    console.log('No players found in localStorage.');
  }
}

//updateStatsPutBackToLS('Center Fielder', { homeRuns: 40, hits: 160 });


