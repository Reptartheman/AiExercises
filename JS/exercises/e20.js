/* 
Exercise 5: Find Chord by Normalized Index
Write a function that takes 
a scale name, 
a chord index, 
and the scales object, 
and returns the chord at 
the normalized index in the chords object of the scale.
*/

import { scales } from "../../music.js";


function findChordByNormalizedIndex(scaleName, index, scales) {
  let allScales = [...scales.majorScales, ...scales.minorScales]; // all scales into a single array
  const desiredScale = allScales.find(scale => scale.name === scaleName); // find the scale that matches the scale name to give me a single object
  const chordValues = Object.values(desiredScale.chords); // Get only the chord values from the desiredScale.chords object
  const wrappedIndex = ((index % chordValues.length) + chordValues.length) % chordValues.length; // calculate the wrapped index
  return chordValues[wrappedIndex]; // give me the wrapped index
  
  
  


}




const result = findChordByNormalizedIndex('F-Major', 8, scales);

console.log(result);

/* 
"G-minor" // Loops around since there are 7 chords
*/

