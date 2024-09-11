

/* 
Display Players in a Table
Write an HTML page with a table to display all player information.
Write a JavaScript function to populate the table with data from the players array.
Hint: Use document.createElement and appendChild to create table rows and cells dynamically.
*/

function renderTable(array) {
  const playersTable = document.getElementById('playersTable');
  const tableBody = playersTable.querySelector('tbody');
  tableBody.innerHTML = '';
  array.forEach((player) => {
    const tableRow = document.createElement('tr');
    
    const nameCell = document.createElement('td');
    nameCell.textContent = player.name;
    tableRow.appendChild(nameCell);

    const positionCell = document.createElement('td');
    positionCell.textContent = player.position;
    tableRow.appendChild(positionCell);

    const teamCell = document.createElement('td');
    teamCell.textContent = player.team;
    tableRow.appendChild(teamCell);

    const gamesCell = document.createElement('td');
    gamesCell.textContent = player.stats.games;
    tableRow.appendChild(gamesCell);

    const atBatsCell = document.createElement('td');
    atBatsCell.textContent = player.stats.atBats;
    tableRow.appendChild(atBatsCell);

    const hitsCell = document.createElement('td');
    hitsCell.textContent = player.stats.hits;
    tableRow.appendChild(hitsCell);

    const homeRunsCell = document.createElement('td');
    homeRunsCell.textContent = player.stats.homeRuns;
    tableRow.appendChild(homeRunsCell);

    const rbisCell = document.createElement('td');
    rbisCell.textContent = player.stats.RBIs;
    tableRow.appendChild(rbisCell);

    const battingAverageCell = document.createElement('td');
    battingAverageCell.textContent = player.stats.battingAverage.toFixed(3);
    tableRow.appendChild(battingAverageCell);


    tableBody.appendChild(tableRow);
    console.log(tableBody);
  })
}

renderTable(players);

const submitBtn = document.querySelector('button[type="submit"]');

function handleFormSubmit(e) {
  e.preventDefault();

  const nameValue = document.getElementById('name').value;
  const positionValue = document.getElementById('position').value;
  const teamValue = document.getElementById('team').value;
  const gamesValue = parseInt(document.getElementById('games').value);
  const atBatsValue = parseInt(document.getElementById('atBats').value);
  const hitsValue = parseInt(document.getElementById('hits').value);
  const homeRunsValue = parseInt(document.getElementById('homeRuns').value);
  const rbiValue = parseInt(document.getElementById('RBIs').value);
  const battingAverageValue = parseFloat(document.getElementById('battingAverage').value);

  const newPlayer = {
    name: nameValue,
    position: positionValue,
    team: teamValue,
    stats: {
      games: gamesValue,
      atBats: atBatsValue,
      hits: hitsValue,
      homeRuns: homeRunsValue,
      RBIs: rbiValue,
      battingAverage: battingAverageValue
    }
  };
  
  players.push(newPlayer);
  renderTable(players);
  return players
}

submitBtn.addEventListener('click', handleFormSubmit);