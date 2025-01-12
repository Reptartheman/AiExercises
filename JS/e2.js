/* Exercise 2: Calculate Average Track Tempo
Task: Write a function that calculates the average tempo of all completed tracks in the tracks array.

Input: tracks array.
Output: Number representing the average tempo of completed tracks. 122 BPM
 */

import { tracks } from "../tracks.js";

const calculateAverageTempo = (array) => {
  const trackTempos = array
    .filter((track) => track.isComplete)
    .map((track) => track.tempo);
  const average =
    trackTempos.reduce((acc, track) => {
      return acc + track;
    }, 0) / trackTempos.length;
  return Math.round(average);
};

calculateAverageTempo(tracks);
