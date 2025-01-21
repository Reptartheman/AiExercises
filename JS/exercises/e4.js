/* 
Exercise 4: Get Chords of a Scale
Write a function that takes the name of a scale and the scales object, and returns the chords of the scale.
*/

import { scales } from '../../music.js';

function getScaleChords(scaleName, scales) {
  let foundScale;

  for (const scaleType in scales) {
     foundScale = scales[scaleType].find(scale => scale.name.toLowerCase() === scaleName.toLowerCase());
  }

  return foundScale ? foundScale.chords : new Error('That scale doesn\'t exist!');
}





const answer = getScaleChords('f-minor', scales);

console.log(answer);


/* 
{
  oneChord: 'C-major',
  twoChord: 'D-minor',
  threeChord: 'E-minor',
  fourChord: 'F-major',
  fiveChord: 'G-major',
  sixChord: 'A-minor',
  sevenChord: 'B-diminished'
}


*/