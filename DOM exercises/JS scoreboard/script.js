let teamACounter = 0;
let teamBCounter = 0;

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const scores = document.querySelectorAll('span');

    if (button.id === 'increaseA') {
      teamACounter++;
      scores[0].textContent = teamACounter;
    } else if (button.id === 'increaseB') {
      teamBCounter++;
      scores[1].textContent = teamBCounter;
    }
  });
});


