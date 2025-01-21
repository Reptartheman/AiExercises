/* 
Exercise 2: Find Jazz Musicians by Instrument
Write a function that takes an instrument name and returns all jazz musicians who play that instrument from the jazzMusicians array. */


import { jazzMusicians } from '../../music.js'

function findMusiciansByInstrument(jazzMusicians, instrument) {
  return jazzMusicians.filter(musician => musician.instrument === instrument)
  .map(musician => {
    return {
      name: musician.name,
      instrument: musician.instrument,
      born: musician.born
    }
  })
}

const musician = findMusiciansByInstrument(jazzMusicians, 'Trumpet');

console.log(musician);
