// Exercise 4: Create instances of `Track` class for each track in the dataset.

import { Track } from './e3.js';
import { tracks } from '../tracks';


export const createInstanceOfTrack = (array) => {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array of tracks');
  }
  return array.map(song => new Track(song));
};


createInstanceOfTrack(tracks);