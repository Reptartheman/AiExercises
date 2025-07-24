/* 
  Exercise 9: Create an Instrument
Using the Instrument class, write a function that creates a new instrument with the given properties.
*/

import { Instrument } from '../../musicConstructors.js'

function createInstrument(name, type, range, isTransposed, commonGenres) {
  return new Instrument(name, type, range, isTransposed, commonGenres);
}

const trumpet = createInstrument('trumpet', 'brass', 'high', true, 435);

console.log(trumpet);