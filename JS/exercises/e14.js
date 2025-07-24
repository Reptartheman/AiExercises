/* 
Exercise 4: Create Scale Patterns
Write a function that takes the name of 
a major scale and the number of octaves, 
and returns the sequence of notes 
for the scale repeated over the given number of octaves.
*/

import { scales } from '../../music.js';


function createScalePattern(scaleName, octaves, scales) {
  const majorScales = scales.majorScales;

  for (const scale of majorScales) {
    if (scale.name === scaleName) {
      const scaleNotes = scale.notes;
      const newArray = [];
      newArray.push(scaleNotes);
      const flattened = newArray.flat();
      const sliced = flattened.slice(0,7);
      return new Array(octaves).fill(sliced).flat();
    }
  }    
}


const pattern = createScalePattern('C-Major', 3, scales);
console.log(pattern);

/* 
  Expected output
  ["C", "D", "E", "F", "G", "A", "B", 
  "C", "D", "E", "F", "G", "A", "B", 
  "C", "D", "E", "F", "G", "A", "B"]
*/