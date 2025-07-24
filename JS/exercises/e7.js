/* 
Exercise 7: Find Relative Minor or Major
Write a function that takes a scale name and the scales object, and returns the relative minor or major scale of the given scale.
*/

import { scales } from '../../music.js';

function findRelativeScale(scaleName, scales) {
  const majorScales = scales.majorScales;
  const minorScales = scales.minorScales;

  const scalesArray = [...majorScales, ...minorScales];
  
  const findScale = scalesArray.find(scale => scale.name === scaleName);

  return findScale.relativeMinor || findScale.relativeMajor;
}

const scale = findRelativeScale('D-minor', scales)

console.log(scale)
