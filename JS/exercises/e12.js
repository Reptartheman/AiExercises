/* 
Exercise 2: Count Notes in All Major Scales
Write a function that takes the scales object and returns an object where 
each note in the major scales is a key, 
and the value is how many times that note appears across all major scales.
*/

import { scales } from '../../music.js';


function countNotesInMajorScales(scales) {
  const getMajor = scales.majorScales;
  const getNotes = getMajor.flatMap(scale => scale.notes);
  const countIt = getNotes.reduce((acc, note) => {
    acc[note] = (acc[note] || 0) + 1;
    return acc;
  }, {})

  return countIt;
  
}



const demScales = countNotesInMajorScales(scales);

console.log(demScales);


/* 
{
  "C": 12,
  "D": 12,
  "E": 12,
  "F": 12,
  "G": 12,
  "A": 12,
  "B": 11,
  "B-flat": 5,
  "E-flat": 5,
  "A-flat": 4,
  "D-flat": 4,
  "G-flat": 3,
  "C-flat": 1,
  "F-flat": 1
}
*/
