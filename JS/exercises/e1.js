/* 
  Exercise 1: Get Major Scales with Accidentals
Write a function that filters the major scales from the scales object, returning only the names of the scales that have sharps or flats.

Exercise ext: Make the function return an object where each key is the name of the scale and the value is the scale's number of sharps or flats.

*/



import { scales } from '../../music.js'


function getMajorScalesWithAccidentals(scales) {
  const { majorScales } = scales;

  return majorScales.filter(scale => scale.hasSharpsOrFlats)
}


export default getMajorScalesWithAccidentals(scales);