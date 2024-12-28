/* Exercise 1: Group Musicians by Instrument
Task: Write a function that groups the jazz musicians by their instrument and returns an object where each key is an instrument, and the value is an array of musician names. */

import { jazzMusicians } from "../musicians.js";

const groupByInstrument = (musicians) => {
  return musicians.reduce((acc, musician) => {
    const { instrument, name } = musician;
    if (!acc[instrument]) {
      acc[instrument] = [];
    }
    acc[instrument].push(name);
    return acc;
  }, {});
};

console.log(groupByInstrument(jazzMusicians));



//loop through the musicians array
//extract the instrument values
//extract name values
// make new object with the instrument as keys
//names as an array of values







//OUTPUT

/* {
  "Trumpet": ["Louis Armstrong", "Miles Davis", "Dizzy Gillespie"],
  "Saxophone": ["John Coltrane", "Charlie Parker"],
  "Vocals": ["Billie Holiday", "Ella Fitzgerald"],
  "Piano": ["Duke Ellington", "Thelonious Monk", "Herbie Hancock"]
} */
